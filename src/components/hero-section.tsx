"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import clsx from "clsx";
import { intergralCF_Bold, syne, unbounded } from "../../public/fonts/font";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Typewriter from "typewriter-effect";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
};

export default function HeroSection() {
  return (
    <main className="overflow-hidden">
      <section>
        <div className="relative pt-10">
          {/* ✅ Gradient Background */}
          <div
            aria-hidden
            className="absolute inset-0 isolate hidden opacity-65 lg:block"
          >
            <div className="w-140 h-320 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          </div>

          {/* ✅ Hero Text Section */}
          <div className="mx-auto max-w-7xl sm:px-6 text-center">
            <AnimatedGroup variants={transitionVariants}>
              <HoverBorderGradient
                containerClassName="group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 shadow-md hover:bg-background transition-colors duration-300"
                as="button"
                className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2"
              >
                <span className="text-foreground text-sm">
                  Introducing Support for AI Models
                </span>
                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 group-hover:translate-x-0">
                    <ArrowRight className="m-auto size-3" />
                    <ArrowRight className="m-auto size-3" />
                  </div>
                </div>
              </HoverBorderGradient>
            </AnimatedGroup>

            <h2
              className={clsx(
                "mt-8 text-[32px] font-bold leading-tight sm:text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem]",
                intergralCF_Bold.className
              )}
            >
              REVOLUTIONIZING WORKFLOWS WITH SMART SOLUTIONS
              <br />
              <span
                className={clsx(
                  "text-primary text-[28px] sm:text-4xl md:text-6xl xl:text-[4.25rem]",
                  unbounded.className
                )}
              >
                <Typewriter
                  options={{
                    strings: [
                      "AI Chat Bot",
                      "AI Calling Agent",
                      "AI Automation",
                      "Power BI",
                      "Website Creation",
                      "UI/UX",
                      "App Development",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className={clsx(
                "mx-auto mt-8 max-w-3xl text-sm sm:text-lg px-2 font-medium",
                syne.className
              )}
            >
              At SyenxaTech, we deliver smart, scalable, and high-performance AI
              solutions designed to streamline your business operations...
            </TextEffect>

            <span className="font-extrabold text-primary text-base sm:text-lg">
              Automation that saves time. Technology that drives growth.
            </span>

            {/* ✅ Buttons */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.75 },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-8 mx-auto flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="rounded-xl px-5 text-base w-full sm:w-auto"
              >
                <Link href="#link">Start Building</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-xl px-5 w-full sm:w-auto"
              >
                <Link href="#link">Request a demo</Link>
              </Button>
            </AnimatedGroup>
          </div>

          {/* ✅ Responsive Image Section */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.75 },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative -mr-0 mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg">
                <>
                  {/* Desktop Dark */}
                  <Image
                    className="aspect-15/8 object-cover hidden rounded-2xl dark:block"
                    src="/images/hero/hero-desktop.png"
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                  {/* Desktop Light */}
                  <Image
                    className="aspect-15/8 object-cover rounded-2xl border dark:hidden"
                    src="/images/hero/hero-desktop.png"
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                </>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
}
