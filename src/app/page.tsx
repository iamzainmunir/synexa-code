import React from "react";
import HeroSection from "@/components/hero-section";
import { InfiniteSlider } from "../components/infinite-slider";
import Image from "next/image";
import Slider from "@/components/slider";
import { HeroHeader } from "@/components/header";

const page = () => {
  return (
    <div>
      <HeroHeader />
      <div className="pt-[60px] lg:pt-[100px]">
        <Slider />
      </div>
      <HeroSection />
      <InfiniteSlider speedOnHover={20} gap={35}>
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
    </div>
  );
};

export default page;
