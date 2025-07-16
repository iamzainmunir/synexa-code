import React from "react";
import HeroSection from "@/components/hero-section";
import { InfiniteSlider } from "../components/infinite-slider";
import Image from "next/image";
import Slider from "@/components/slider";
import { HeroHeader } from "@/components/header";
import CoursesAndCertificates from "@/components/courses-and-certificates";
import CountUpOnScroll from "@/components/CountUp";
import AboutSectionCompanyValues from "@/components/company-values";

const page = () => {
  return (
    <div>
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
            to={5000}
            suffix="+"
            className="text-4xl font-bold text-primary"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">
            Professionals Trained
          </p>
        </div>
        <div>
          <CountUpOnScroll
            to={98}
            suffix="%"
            className="text-4xl font-bold text-green-600"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">Success Rate</p>
        </div>
        <div>
          <CountUpOnScroll
            to={25}
            suffix="+"
            className="text-4xl font-bold text-blue-600"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">
            Corporate Partners
          </p>
        </div>
        <div>
          <CountUpOnScroll
            to={3}
            suffix="+"
            className="text-4xl font-bold text-purple-600"
          />
          <p className="mt-2 text-lg text-gray-700 font-bold">
            Countries Served
          </p>
        </div>
      </div>
      <AboutSectionCompanyValues />
    </div>
  );
};

export default page;
