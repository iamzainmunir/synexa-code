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
import {useWindowSize} from "@/utils/window-width";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {

  const  {width} = useWindowSize()

  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-10">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring" as const,
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <span></span>
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl sm:px-6 ">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <HoverBorderGradient
                    containerClassName="rounded-full hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1  shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Support for AI Models
                    </span>
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </HoverBorderGradient>
                </AnimatedGroup>

                <h2
                  className={clsx(
                    "mt-8  text-balance text-[32px] font-bold leading-tight sm:text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem]",
                    intergralCF_Bold.className
                  )}
                >
                  REVOLUTIONIZING WORKFLOWS WITH SMART SOLUTIONS
                  <br />
                  {
                    <span
                      className={clsx(
                        "text-primary text-[35px] sm:text-4xl md:text-6xl lg:mt-16 xl:text-[4.25rem]",
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
                  }
                </h2>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className={clsx(
                    "mx-auto mt-8 font-medium max-w-3xl text-balance text-sm sm:text-lg px-2",
                    syne.className
                  )}
                >
                  At SyenxaTech, we deliver smart, scalable, and
                  high-performance AI solutions designed to streamline your
                  business operations. From intelligent AI chatbots to advanced
                  calling agents, from process automation to custom dashboards —
                  we help businesses grow faster with the power of artificial
                  intelligence and technology.
                </TextEffect>
                <span className="font-extrabold text-primary text-lg">
                  Our mission is simple: Automation that saves time, technology
                  that drives growth, and AI that empowers you to do more.
                </span>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Building</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                {/* For desktop -> Light and Dark theme  */}
                  {
                    width > 680 ?
                    (<>
                      <Image
                          className="bg-background aspect-15/8 object-cover relative hidden rounded-2xl dark:block"
                          src="/images/hero/hero-desktop.png"
                          alt="app screen"
                          width="2700"
                          height="1440"
                      />
                      <Image
                          className="z-2 border-border/25 aspect-15/8  object-cover relative rounded-2xl border dark:hidden"
                          src="/images/hero/hero-desktop.png"
                          alt="app screen"
                          width="2700"
                          height="1440"
                      />
                    </>)
                        :
                        (
                            <>
                              <Image
                              className="bg-background w-[400px]  h-[500px] object-cover relative hidden rounded-2xl dark:block"
                              src="/images/hero/hero-mobile.png"
                              alt="app screen"
                              width="2700"
                              height="1440"
                              />
                              <Image
                                  className="z-2 border-border/25 w-[400px] h-[500px]  object-cover relative rounded-2xl border dark:hidden"
                                  src="/images/hero/hero-mobile.png"
                                  alt="app screen"
                                  width="2700"
                                  height="1440"
                              />
                            </>


                        )
                  }
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
