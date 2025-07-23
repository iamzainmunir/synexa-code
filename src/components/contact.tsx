"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    country: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setLoading(false);
      setStatus(data.status === "success" ? "Form submitted successfully!" : "Error submitting form");
    } catch (err) {
      setLoading(false);
      setStatus("Error submitting form");
    }
  };

  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">
          Help us route your inquiry
        </h1>

        <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
            <div>
              <h2 className="mb-3 text-lg font-semibold">Address</h2>
              <Link
                href="mailto:hello@tailus.io"
                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
              >
                30 RIVERHEAD CLOSE LONDON ENGLAND E17 5PY
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Our Email</h3>
              <Link
                href="mailto:press@tailus.io"
                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
              >
                info@syenxatech.com
              </Link>
            </div>
          </div>
        </div>

        <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
        <form action={"https://formspree.io/f/mwpqlwkd"}  method="POST" onSubmit={handleSubmit} className="border px-4 py-12 lg:px-0 lg:py-24">
          <Card className="mx-auto max-w-lg p-8 sm:p-16">
            <h3 className="text-xl font-semibold">Let&apos;s get you to the right place</h3>
            <p className="mt-4 text-sm">
              Reach out to our sales team! We’re eager to learn more about how
              you plan to use our services.
            </p>

            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input onChange={handleChange} type="text" id="name" value={form.name} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input onChange={handleChange} type="email" id="email" value={form.email} required />
              </div>
              <div>
                <Label htmlFor="services">Services</Label>
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select our services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai_automation">AI automation</SelectItem>
                    <SelectItem value="website_development">Website development</SelectItem>
                    <SelectItem value="ai_business_automation">AI business automation</SelectItem>
                    <SelectItem value="ai_chatbot">AI Chatbot</SelectItem>
                    <SelectItem value="mobile_development">Mobile development</SelectItem>
                    <SelectItem value="ai_calling_agent">AI calling agents</SelectItem>
                    <SelectItem value="ui/ux_design">UI/UX Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="country">Country / Region</Label>
                <Input onChange={handleChange} type="text" id="country" value={form.country} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea onChange={handleChange} id="message" rows={3} value={form.message} />
              </div>
              <Button disabled={loading} type="submit">
                {loading ? "Submitting..." : "Submit"}
              </Button>
              {status && <p className="text-center mt-2">{status}</p>}
            </div>
          </Card>
        </form>
      </div>
    </section>
  );
}
