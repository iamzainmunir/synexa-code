// Full working chatbot component with loader and Gemini support
"use client";

import type React from "react";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

import {
  Send,
  MessageCircle,
  Minimize2,
  Maximize2,
  Bot,
  User,
  Sparkles,
  X,
} from "lucide-react";

interface ChatBotProps {
  colors?: Record<string, string>;
  suggestedPrompts?: string[];
  placeholder?: string;
  botName?: string;
  welcomeMessage?: string;
  position?: "bottom-right" | "bottom-left";
}

const ChatBot: React.FC<ChatBotProps> = ({
  colors = {},
  suggestedPrompts = [
    "Tell me about your services",
    "What does Mind Changer HSE Consultancy do?",
    "Where is MCC located and which countries do you operate in?",
    "Why should I choose MCC over other training institutes?",
  ],
  placeholder = "Type your message...",
  botName = "AI Assistant",
  welcomeMessage = "Hi! I'm here to help you learn more about MMC International. How can I assist you today?",
  position = "bottom-right",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const theme = {
    primary: "#1f2937",
    primaryHover: "#111827",
    accent: "#14CF93",
    accentHover: "#18CF99",
    background: "#ffffff",
    surface: "#f8fafc",
    border: "#e5e7eb",
    text: "#111827",
    textSecondary: "#6b7280",
    textMuted: "#9ca3af",
    shadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
    ...colors,
  };

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
    append,
  } = useChat({
    api: "/api/chat",
    stream: false, // Important for Gemini
    onResponse: async (res) => {
      const data = await res.json();
      append({
        id: data.id || Date.now().toString(),
        role: data.role || "assistant",
        content: data.content,
      });
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) setShowSuggestions(false);
  }, [messages]);

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    handleSubmit({
      preventDefault: () => {},
      target: { message: { value: suggestion } },
    } as any);
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e);
    },
    [handleInputChange]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      handleSubmit(e);
      setShowSuggestions(false);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (isMinimized) setTimeout(() => inputRef.current?.focus(), 300);
  };

  const renderedMessages = useMemo(
    () =>
      messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className={`flex gap-3 ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {message.role === "assistant" && (
            <div
              className="mt-1 h-7 w-7 flex items-center justify-center rounded-full"
              style={{ backgroundColor: theme.accent }}
            >
              <Bot className="h-4 w-4 text-white" />
            </div>
          )}

          <div
            className={`max-w-[75%] rounded-2xl px-4 py-3 ${
              message.role === "user" ? "rounded-br-md" : "rounded-bl-md"
            }`}
            style={{
              backgroundColor:
                message.role === "user" ? theme.primary : theme.background,
              color: message.role === "user" ? "white" : theme.text,
              border:
                message.role === "assistant"
                  ? `1px solid ${theme.border}`
                  : "none",
            }}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </p>
          </div>

          {message.role === "user" && (
            <div
              className="mt-1 h-7 w-7 flex items-center justify-center rounded-full"
              style={{ backgroundColor: theme.surface }}
            >
              <User
                className="h-4 w-4"
                style={{ color: theme.textSecondary }}
              />
            </div>
          )}
        </motion.div>
      )),
    [messages]
  );

  return (
    <div
      className={`fixed ${
        position === "bottom-right" ? "bottom-6 right-2" : "bottom-6 left-2"
      } z-50`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-80 md:w-96 overflow-hidden rounded-2xl border shadow-lg"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              boxShadow: theme.shadow,
            }}
          >
            <div
              className="flex items-center justify-between border-b px-4 py-3"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: theme.accent }}
                >
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold"
                    style={{ color: theme.text }}
                  >
                    {botName}
                  </h3>
                  <p className="text-xs" style={{ color: theme.textSecondary }}>
                    Online now
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleMinimize}
                  className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100"
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4 text-gray-500" />
                  )}
                </button>
                <button
                  onClick={closeChat}
                  className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
            {!isMinimized && (
              <div className="flex flex-col h-[28rem]">
                <div className="flex-1 overflow-y-auto p-4">
                  {messages.length === 0 && (
                    <div className="text-center py-6">
                      <div
                        className="mx-auto mb-3 h-12 w-12 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.accent }}
                      >
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <h4
                        className="mb-2 font-medium"
                        style={{ color: theme.text }}
                      >
                        Welcome! 👋
                      </h4>
                      <p
                        className="text-sm px-2"
                        style={{ color: theme.textSecondary }}
                      >
                        {welcomeMessage}
                      </p>
                    </div>
                  )}

                  {showSuggestions &&
                    messages.length === 0 &&
                    suggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleSuggestionClick(prompt)}
                        className="w-full text-left p-2 text-sm border rounded-lg mb-2 hover:border-blue-300"
                        style={{
                          backgroundColor: theme.background,
                          borderColor: theme.border,
                          color: theme.text,
                        }}
                      >
                        {prompt}
                      </button>
                    ))}

                  {renderedMessages}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start gap-3"
                    >
                      <div
                        className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.accent }}
                      >
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div
                        className="rounded-2xl rounded-bl-md border px-4 py-3"
                        style={{
                          backgroundColor: theme.background,
                          borderColor: theme.border,
                        }}
                      >
                        <div className="flex space-x-1">
                          {[0, 0.2, 0.4].map((delay, i) => (
                            <motion.div
                              key={i}
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: theme.textMuted }}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <form
                  onSubmit={onSubmit}
                  className="border-t p-4 flex gap-2 items-center"
                  style={{ borderColor: theme.border }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="flex-1 rounded-full border px-4 py-2"
                    style={{
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                      color: theme.text,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="h-10 w-10 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.accent }}
                  >
                    <Send className="h-4 w-4 text-white" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <button
          onClick={openChat}
          className="h-14 w-14 rounded-full flex items-center justify-center shadow-md"
          style={{ backgroundColor: theme.accent }}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
