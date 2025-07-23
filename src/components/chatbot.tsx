"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Complete Chatbot Component with all features
interface ChatBotProps {
  // Customization props
  colors?: {
    primary?: string;
    primaryHover?: string;
    accent?: string;
    accentHover?: string;
    background?: string;
    surface?: string;
    border?: string;
    text?: string;
    textSecondary?: string;
    textMuted?: string;
    shadow?: string;
  };
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
  "Why should I choose SynexaTech over others?",
  "How much does your AI chatbot cost?",
  "Do you provide a free chatbot trial?"
],
  placeholder = "Type your message...",
  botName = "AI Assistant",
  welcomeMessage = "Hi! I'm here to help you learn more about Huzaifa Mukhtar. How can I assist you today?",
  position = "bottom-right",
}) => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Default theme with customization support
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

  // Custom chat state (non-streaming)
  const [messages, setMessages] = useState<
    Array<{ id: string; role: "user" | "assistant"; content: string }>
  >([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (messageContent?: string) => {
    const contentToSend = messageContent || input;
    if (!contentToSend.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: contentToSend,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant" as const,
        content:
          data.content ||
          data.text ||
          "Sorry, I could not process your request.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant" as const,
        content: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) {
      setShowSuggestions(false);
    }
  }, [messages]);

  // Event handlers
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    handleSubmit(suggestion);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      handleSubmit();
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
    if (isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  // Position classes
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  // Custom Button Component
  const CustomButton: React.FC<{
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    type?: "button" | "submit";
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }> = ({
    onClick,
    disabled,
    className,
    style,
    children,
    type = "button",
    onMouseEnter,
    onMouseLeave,
  }) => (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`transition-all duration-200 ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={closeChat}
          />
        )}
      </AnimatePresence>

      <div className={`fixed ${positionClasses[position]} z-50`}>
        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-4"
            >
              <div
                className="w-80 overflow-hidden rounded-2xl border md:w-96"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  boxShadow: theme.shadow,
                }}
              >
                {/* Header */}
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
                      <p
                        className="text-xs"
                        style={{ color: theme.textSecondary }}
                      >
                        Online now
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CustomButton
                      onClick={toggleMinimize}
                      className="flex h-8 w-8 items-center justify-center rounded p-0 hover:bg-gray-100"
                    >
                      {isMinimized ? (
                        <Maximize2 className="h-4 w-4" />
                      ) : (
                        <Minimize2 className="h-4 w-4" />
                      )}
                    </CustomButton>
                    <CustomButton
                      onClick={closeChat}
                      className="flex h-8 w-8 items-center justify-center rounded p-0 hover:bg-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </CustomButton>
                  </div>
                </div>

                {/* Chat Content */}
                <AnimatePresence>
                  {!isMinimized && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {/* Messages Container */}
                      <div
                        className="h-80 space-y-4 overflow-y-auto p-4"
                        style={{
                          backgroundColor: theme.surface,
                          scrollbarWidth: "thin",
                          scrollbarColor: `${theme.border} transparent`,
                        }}
                      >
                        {/* Welcome Message */}
                        {messages.length === 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-6 text-center"
                          >
                            <div
                              className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full"
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
                              className="px-2 text-sm leading-relaxed"
                              style={{ color: theme.textSecondary }}
                            >
                              {welcomeMessage}
                            </p>
                          </motion.div>
                        )}

                        {/* Suggested Prompts */}
                        <AnimatePresence>
                          {showSuggestions && messages.length === 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ delay: 0.3 }}
                              className="space-y-2"
                            >
                              <p
                                className="text-xs font-medium"
                                style={{ color: theme.textMuted }}
                              >
                                Suggested questions:
                              </p>
                              {suggestedPrompts.map((prompt, index) => (
                                <motion.button
                                  key={prompt}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + index * 0.1 }}
                                  onClick={() => handleSuggestionClick(prompt)}
                                  className="block w-full rounded-lg border p-3 text-left text-sm transition-colors hover:border-blue-300"
                                  style={{
                                    backgroundColor: theme.background,
                                    borderColor: theme.border,
                                    color: theme.text,
                                  }}
                                >
                                  {prompt}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Chat Messages */}
                        {messages.map((message, index) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex gap-3 ${
                              message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            {message.role === "assistant" && (
                              <div
                                className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: theme.accent }}
                              >
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                            )}

                            <div
                              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                                message.role === "user"
                                  ? "rounded-br-md"
                                  : "rounded-bl-md"
                              }`}
                              style={{
                                backgroundColor:
                                  message.role === "user"
                                    ? theme.primary
                                    : theme.background,
                                color:
                                  message.role === "user"
                                    ? "white"
                                    : theme.text,
                                border:
                                  message.role === "assistant"
                                    ? `1px solid ${theme.border}`
                                    : "none",
                              }}
                            >
                              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                                <ReactMarkdown>{message.content}</ReactMarkdown>
                              </div>
                            </div>

                            {message.role === "user" && (
                              <div
                                className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: theme.surface }}
                              >
                                <User
                                  className="h-4 w-4"
                                  style={{ color: theme.textSecondary }}
                                />
                              </div>
                            )}
                          </motion.div>
                        ))}

                        {/* Loading Indicator */}
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
                                      repeat: Number.POSITIVE_INFINITY,
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

                      {/* Input Area */}
                      <div
                        className="border-t p-4"
                        style={{
                          backgroundColor: theme.background,
                          borderColor: theme.border,
                        }}
                      >
                        <form onSubmit={onSubmit} className="flex gap-2">
                          <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder={placeholder}
                            disabled={isLoading}
                            className="h-10 flex-1 rounded-full border-2 px-4 py-2 transition-colors outline-none focus:border-blue-400"
                            style={{
                              backgroundColor: theme.surface,
                              borderColor: theme.border,
                              color: theme.text,
                            }}
                          />
                          <CustomButton
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full p-0 hover:scale-105"
                            style={{ backgroundColor: theme.accent }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                theme.accentHover;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                theme.accent;
                            }}
                          >
                            <Send className="h-4 w-4 text-white" />
                          </CustomButton>
                        </form>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button - Only show when chat is closed */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CustomButton
                onClick={openChat}
                className="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300"
                style={{
                  backgroundColor: theme.accent,
                  boxShadow: theme.shadow,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accentHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent;
                }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </CustomButton>

              {/* Notification Badge */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500"
                >
                  <motion.div
                    className="h-2 w-2 rounded-full bg-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: ${theme.border};
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.textMuted};
        }
      `}</style>
    </>
  );
};

export default ChatBot;