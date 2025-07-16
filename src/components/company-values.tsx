"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  // AreaChart,
  CheckCircle,
  ArrowUpRightIcon,
  Globe,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
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

// Company values data
const companyValues: CompanyValue[] = [
  {
    id: "innovation",
    name: "Innovation",
    description:
      "We constantly push boundaries and challenge the status quo, fostering a culture where creative thinking, continuous improvement, and experimentation are encouraged at every level of the organization.",
    icon: Lightbulb,
    color: "text-amber-500",
    principles: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge outdated assumptions and processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate rapidly",
    ],
    testimonial: {
      quote:
        "Working in an environment that truly values innovation isn't just about access to the latest tools—it's about being empowered to think differently, take risks, and explore ideas that challenge the norm.",
      author: "Alex Chen",
      role: "Lead Product Engineer",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "integrity",
    name: "Integrity",
    description:
      "We are committed to honesty, ethical conduct, and full transparency in every training session, assessment, and corporate engagement.",
    icon: ShieldCheck,
    color: "text-blue-600",
    principles: [
      "Always act with transparency and accountability",
      "Follow global HSE standards and ethical practices",
      "Uphold trust with clients and trainees alike",
      "Ensure compliance with zero compromise",
    ],
    testimonial: {
      quote:
        "Integrity is what sets MCC apart. You can rely on them to be honest, consistent, and fair — both in training and in professional partnerships.",
      author: "Sara Khan",
      role: "Corporate Compliance Advisor",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1607000975677-90533e4355fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW50ZWdyaXR5fGVufDB8fDB8fHww",
  },
  {
    id: "collaboration",
    name: "Collaboration",
    description:
      "We believe in working together — with clients, students, and industry experts — to design solutions that drive measurable safety outcomes.",
    icon: Users,
    color: "text-violet-500",
    principles: [
      "Encourage teamwork and shared learning",
      "Partner with clients to design training plans",
      "Actively engage with feedback and adapt",
      "Promote knowledge-sharing across industries",
    ],
    testimonial: {
      quote:
        "MCC doesn’t work in isolation. They truly collaborate, involving our team in every step to deliver impactful, customized training.",
      author: "Awais Raza",
      role: "HSE Manager – Energy Sector",
      image:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "customer-focus",
    name: "Customer Focus",
    description:
      "We place the needs of our clients and learners first, tailoring every training experience to deliver long-term value and satisfaction.",
    icon: Heart,
    color: "text-rose-500",
    principles: [
      "Understand and prioritize client objectives",
      "Provide tailored solutions for every industry",
      "Deliver ongoing support and guidance",
      "Continuously improve based on feedback",
    ],
    testimonial: {
      quote:
        "From the very first interaction, MCC made us feel heard and supported. Their team went above and beyond to make sure we got the training we needed.",
      author: "Fatima Siddiqui",
      role: "Operations Director – Logistics",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1611663671209-772c4073b5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZvY3VzfGVufDB8fDB8fHww",
  },
  {
    id: "excellence",
    name: "Excellence",
    description:
      "We strive to exceed expectations and set high standards in everything we do — from course design to trainer performance and client service.",
    icon: CheckCircle,
    color: "text-emerald-600",
    principles: [
      "Commit to delivering premium training outcomes",
      "Continuously raise the bar of performance",
      "Maintain top-quality certification standards",
      "Ensure client and trainee satisfaction at every step",
    ],
    testimonial: {
      quote:
        "MCC sets the benchmark for HSE training. Their attention to detail, content depth, and trainer quality are unmatched in the region.",
      author: "Zain Malik",
      role: "Training Quality Auditor",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1611075384322-731537ad7971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXhjZWxsZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "sustainability",
    name: "Sustainability",
    description:
      "We take a long-term view in everything we do — promoting safe behaviors, health-first policies, and environmental consciousness.",
    icon: Globe,
    color: "text-green-600",
    principles: [
      "Encourage eco-friendly and safe practices",
      "Reduce workplace hazards sustainably",
      "Promote long-term well-being of people and environments",
      "Integrate ESG values into safety culture",
    ],
    testimonial: {
      quote:
        "Safety isn’t short-term. MCC’s sustainability-first thinking helped us build a long-term HSE strategy that benefits both people and planet.",
      author: "Hamza Rehman",
      role: "ISO & ESG Consultant",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VzdGFpbmFiaWxpdHl8ZW58MHx8MHx8fDA%3D",
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
