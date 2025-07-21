import React from "react";
import HeroSection from "@/components/hero-section";
import { InfiniteSlider } from "../components/infinite-slider";
import Image from "next/image";
import Slider from "@/components/slider";
import { HeroHeader } from "@/components/header";
import CoursesAndCertificates from "@/components/courses-and-certificates";
import CountUpOnScroll from "@/components/CountUp";
import AboutSectionCompanyValues from "@/components/company-values";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import { Testimonials } from "@/components/animated-testimonials";
import SmokeyCursor from "@/components/ui/smoky-cursor";
import ContactSection from "@/components/contact";

const page = () => {
  return (
    <>
      <SmokeyCursor />
      <HeroHeader />
      <div className="pt-[60px] lg:pt-[100px]">
        <Slider />
      </div>
      <HeroSection />
      <InfiniteSlider className="container" speedOnHover={20} gap={35}>
        <Image
          src="/images/working-brands/img1.webp"
          alt="Yung Lean - Stardust"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
        <Image
          src="/images/working-brands/img2.webp"
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
        <Image
          src="/images/working-brands/img3.webp"
          alt="A$AP Rocky - Tailor Swif"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
        <Image
          src="/images/working-brands/img4.webp"
          alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
        <Image
          src="/images/working-brands/img1.webp"
          alt="Yung Lean - Stardust"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
        <Image
          src="/images/working-brands/img2.webp"
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
        <Image
          src="/images/working-brands/img3.webp"
          alt="A$AP Rocky - Tailor Swif"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
        <Image
          src="/images/working-brands/img4.webp"
          alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
          className="aspect-square w-[120px] rounded-[4px]"
          width={120}
          height={120}
        />
      </InfiniteSlider>
      <CoursesAndCertificates />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24 container">
        <div>
          <CountUpOnScroll
            to={300}
            suffix="+"
            className="text-4xl font-bold text-primary"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">
            Projects Delivered
          </p>
        </div>
        <div>
          <CountUpOnScroll
            to={95}
            suffix="%"
            className="text-4xl font-bold text-green-600"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">
            {" "}
            Client Retention Rate
          </p>
        </div>
        <div>
          <CountUpOnScroll
            to={25}
            suffix="+"
            className="text-4xl font-bold text-blue-600"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">
            Ongoing Clients
          </p>
        </div>
        <div>
          <CountUpOnScroll
            to={4}
            suffix="+"
            className="text-4xl font-bold text-purple-600"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">
            Countries Served
          </p>
        </div>
      </div>
      <AboutSectionCompanyValues />
      <Testimonials />
      <ContactSection />
      <Faqs />
      <footer className="text-white py-6 bg-border bg-bottom ">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div>
            <h2 className="text-lg font-bold">SyenxaTech</h2>
            <p className="text-sm">AI Chatbots | Automation | Digital Tools</p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Quantum Ltd (UK)</h2>
            <p className="text-sm">UK Registered Company</p>
          </div>

          <div className="text-xs">
            &copy; 2025 SyenxaTech & Quantum Ltd. All rights reserved.
          </div>
        </div>
      </footer>
      <Footer />
    </>
  );
};

export default page;
