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
      "At MCC, we believe innovation drives safer futures. We integrate modern learning methods, digital tools, and scenario-based simulations to ensure HSE training stays relevant and impactful.",
    icon: Lightbulb,
    color: "text-amber-500",
    principles: [
      "Implement smart, tech-driven training modules",
      "Encourage out-of-the-box problem solving",
      "Adopt updated safety standards and case studies",
      "Continuously refine methods based on feedback",
    ],
    testimonial: {
      quote:
        "MCC’s creative approach helped us understand safety beyond theory — it became real, applicable, and memorable.",
      author: "Alex Chen",
      role: "Lead Product Engineer",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400",
    },
    image: "/images/core-features/1.png",
  },
  {
    id: "integrity",
    name: "Integrity",
    description:
      "We uphold the highest ethical standards in all our services. From registration to certification, every step at MCC is guided by transparency, honesty, and trust.",
    icon: ShieldCheck,
    color: "text-blue-600",
    principles: [
      "Stay true to international training ethics",
      "Ensure transparency in course delivery",
      "Protect student data and certification processes",
      "Build long-term trust with every partner",
    ],
    testimonial: {
      quote:
        "You can trust MCC with your career and your team's safety — they never overpromise, and always deliver what they commit.",
      author: "Sara Khan",
      role: "Corporate Compliance Advisor",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400",
    },
    image: "/images/core-features/2.png",
  },
  {
    id: "collaboration",
    name: "Collaboration",
    description:
      "We work closely with companies, government bodies, and individuals to build safety programs that match local and global operational realities.",
    icon: Users,
    color: "text-violet-500",
    principles: [
      "Design courses in partnership with client goals",
      "Stay aligned with site-specific requirements",
      "Promote teamwork during sessions and workshops",
      "Build knowledge together, not in silos",
    ],
    testimonial: {
      quote:
        "MCC involved our site supervisors, HR team, and safety leads in designing the perfect training experience for our team.",
      author: "Awais Raza",
      role: "HSE Manager – Energy Sector",
      image:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400",
    },
    image: "/images/core-features/3.png",
  },
  {
    id: "customer-focus",
    name: "Customer Focus",
    description:
      "Every MCC service is designed around the learner’s or client’s goals. Whether it's an individual course or a full corporate roadmap, our approach is human-centered and result-driven.",
    icon: Heart,
    color: "text-rose-500",
    principles: [
      "Offer personalized support to every trainee",
      "Adapt schedules and formats to client needs",
      "Follow up post-training to ensure success",
      "Handle each inquiry with professionalism and care",
    ],
    testimonial: {
      quote:
        "MCC isn’t just a training center — they treat you like a partner. Everything was tailored to our specific work environment.",
      author: "Fatima Siddiqui",
      role: "Operations Director – Logistics",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400",
    },
    image: "/images/core-features/4.png",
  },
  {
    id: "excellence",
    name: "Excellence",
    description:
      "We aim to lead the HSE training industry by maintaining superior quality in every program — through certified instructors, global standards, and impactful delivery.",
    icon: CheckCircle,
    color: "text-emerald-600",
    principles: [
      "Hire experienced, certified trainers",
      "Align every course with latest HSE frameworks",
      "Ensure high passing and satisfaction rates",
      "Push beyond basic compliance to real impact",
    ],
    testimonial: {
      quote:
        "What stood out about MCC was their commitment to detail and perfection — from training materials to assessments.",
      author: "Zain Malik",
      role: "Training Quality Auditor",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
    },
    image: "/images/core-features/5.png",
  },
  {
    id: "sustainability",
    name: "Sustainability",
    description:
      "We believe that long-term safety is rooted in sustainability. Our training encourages responsible actions that benefit both people and the planet.",
    icon: Globe,
    color: "text-green-600",
    principles: [
      "Encourage safe behaviors with environmental impact",
      "Reduce training waste via digital delivery",
      "Promote responsible site operations",
      "Educate teams on health-first long-term culture",
    ],
    testimonial: {
      quote:
        "MCC helped us build an HSE system that doesn’t just comply, but sustains — for years to come.",
      author: "Hamza Rehman",
      role: "ISO & ESG Consultant",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400",
    },
    image: "/images/core-features/6.png",
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
