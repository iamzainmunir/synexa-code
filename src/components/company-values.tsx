"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  // Lightbulb,
  PhoneCall,
  MessageCircle,
  BarChart2,
  Globe,
  Smartphone,
  ArrowUpRightIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
type CompanyValue = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  principles: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  image?: string;
};

const companyValues: CompanyValue[] = [
  {
    id: "calling-agent",
    name: "AI Calling Agent",
    description:
      "Boost your customer outreach with automated calling solutions, appointment reminders, and follow-up services powered by smart voice technology.",
    icon: PhoneCall,
    color: "text-purple-600",
    principles: [
      "24/7 call handling for customer support",
      "Automated lead generation and qualification",
      "Natural conversational experience",
      "CRM integration and performance analytics",
    ],
    testimonial: {
      quote:
        "Our customer engagement improved drastically using the AI Calling Agent — more calls, better follow-ups, less workload.",
      author: "Bilal Ahmed",
      role: "Sales Lead, Retail Sector",
      image: "/images/testimonials/1.png",
    },
    image: "/images/core-features/3.png",
  },
  {
    id: "chatbot",
    name: "AI Chatbot",
    description:
      "Streamline your customer interactions across WhatsApp, Facebook, and Instagram with advanced chat automation and instant responses.",
    icon: MessageCircle,
    color: "text-pink-500",
    principles: [
      "Respond instantly across social platforms",
      "Automate FAQs, bookings, and lead capture",
      "Personalize messages based on user queries",
      "Reduce response time and increase satisfaction",
    ],
    testimonial: {
      quote:
        "The AI Chatbot reduced our customer query load by 70%, freeing up our team for high-value tasks.",
      author: "Sarah Khan",
      role: "Customer Support Manager",
      image: "/images/testimonials/2.png",
    },
    image: "/images/core-features/4.png",
  },
  {
    id: "powerbi",
    name: "Power BI Solutions",
    description:
      "Transform raw data into insightful dashboards and reports. Empower your team with visual data storytelling and easy-to-read analytics.",
    icon: BarChart2,
    color: "text-yellow-500",
    principles: [
      "Build custom dashboards for KPIs",
      "Interactive reporting with real-time data",
      "Secure data access and sharing",
      "Advanced visualizations for business intelligence",
    ],
    testimonial: {
      quote:
        "Our decision-making became faster and more accurate with MCC’s Power BI dashboards.",
      author: "Ali Raza",
      role: "Business Analyst",
      image: "/images/testimonials/3.png",
    },
    image: "/images/core-features/1.png",
  },
  {
    id: "website-development",
    name: "Website Development",
    description:
      "Get a responsive, fast, and modern website designed to showcase your brand, generate leads, and convert visitors effortlessly.",
    icon: Globe,
    color: "text-blue-500",
    principles: [
      "Responsive design for all devices",
      "SEO-optimized development",
      "High performance and fast loading",
      "Custom features based on business goals",
    ],
    testimonial: {
      quote:
        "The website MCC built for us loads fast, ranks well, and helps us get leads every day.",
      author: "Amna Sheikh",
      role: "Marketing Manager",
      image: "/images/testimonials/4.png",
    },
    image: "/images/core-features/2.png",
  },
  {
    id: "app-development",
    name: "App Development",
    description:
      "Launch high-quality Android and iOS apps with user-friendly design, scalable architecture, and seamless functionality for your business.",
    icon: Smartphone,
    color: "text-green-500",
    principles: [
      "Native and cross-platform solutions",
      "User-centric UI/UX design",
      "Smooth performance and scalability",
      "App store deployment and support",
    ],
    testimonial: {
      quote:
        "Our mobile app was delivered quickly with zero bugs and a fantastic user interface — highly recommend MCC!",
      author: "Fahad Aslam",
      role: "Founder, Tech Startup",
      image: "/images/testimonials/5.png",
    },
    image: "/images/core-features/5.png",
  },
];

export default function AboutSectionCompanyValues() {
  const [activeValue, setActiveValue] = useState<string>(companyValues[0].id);

  // Get active value object
  const currentValue =
    companyValues.find((value) => value.id === activeValue) || companyValues[0];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">
            Core Values
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Guides Our Decisions
          </h2>
          <p className="text-muted-foreground">
            Our values aren&apos;t just words on a wall—they&apos;re the
            principles that guide our daily actions and long-term vision,
            shaping our culture and driving our success.
          </p>
        </div>

        <Tabs
          value={activeValue}
          onValueChange={setActiveValue}
          className="space-y-8"
        >
          {/* Value selection - Tabs for md+ screens, Dropdown for smaller screens */}
          <div className="mb-8 flex justify-center">
            {/* Dropdown for small screens */}
            <div className="w-full md:hidden">
              <Select value={activeValue} onValueChange={setActiveValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent>
                  {companyValues.map((value) => (
                    <SelectItem key={value.id} value={value.id}>
                      <div className="flex items-center gap-2">
                        <value.icon className={cn("h-4 w-4", value.color)} />
                        <span>{value.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tabs for medium screens and above */}
            <TabsList className="hidden h-auto bg-transparent p-1 md:flex">
              {companyValues.map((value) => (
                <TabsTrigger
                  key={value.id}
                  value={value.id}
                  className={cn(
                    "data-[state=active]:bg-muted gap-2",
                    "data-[state=active]:border-border border border-transparent"
                  )}
                >
                  <value.icon className={cn("h-4 w-4", value.color)} />
                  <span>{value.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Value content */}
          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* Left column: Value details */}
            <div className="space-y-6 md:col-span-6">
              <div className="mb-4 flex items-center gap-4">
                <div className={cn("rounded-xl p-2.5", "bg-muted")}>
                  <currentValue.icon
                    className={cn("h-7 w-7", currentValue.color)}
                  />
                </div>
                <h3 className="text-2xl font-bold">{currentValue.name}</h3>
              </div>

              <p className="text-muted-foreground text-lg">
                {currentValue.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-medium">Key Principles:</h4>
                <ul className="space-y-2">
                  {currentValue.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowUpRightIcon
                        className={cn("mt-0.5 h-5 w-5", currentValue.color)}
                      />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentValue.testimonial && (
                <Card className="bg-muted/30 mt-6 p-0">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={currentValue.testimonial.image}
                          alt={currentValue.testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {currentValue.testimonial.author}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {currentValue.testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;{currentValue.testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right column: Value image */}
            <div className="md:col-span-6">
              {currentValue.image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={currentValue.image}
                    alt={`Illustration of our ${currentValue.name} value`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <div
                      className={cn(
                        "inline-block rounded-lg px-3 py-1 text-sm text-white",
                        "bg-black/30 backdrop-blur-sm"
                      )}
                    >
                      {currentValue.name}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted flex aspect-[4/3] items-center justify-center rounded-xl">
                  <currentValue.icon
                    className={cn(
                      "h-24 w-24",
                      currentValue.color,
                      "opacity-25"
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </Tabs>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            These values guide every aspect of our work. Want to be part of a
            team that lives these values every day?
          </p>
          <Button asChild size="lg">
            <Link href="/careers">Join Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
