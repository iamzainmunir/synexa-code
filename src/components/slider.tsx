"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default function App() {
  const width = useWindowWidth();
  const isMobile = width && width < 768;

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* ✅ Banner 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px] xl:h-[900px] bg-green-500">
            <Image
              src={
                isMobile
                  ? "/images/banners/img4-mobile.png"
                  : "/images/banners/img4-desktop.png"
              }
              alt="Banner 1"
              className="absolute inset-0 cursor-grab w-full h-full object-cover object-center"
              width={1920}
              height={1080}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[600px] xl:h-[900px] bg-green-500">
            <Image
              src={
                isMobile
                  ? "/images/banners/img1-mobile.jpeg"
                  : "/images/banners/img1-desktop.png"
              }
              alt="Banner 1"
              className="absolute inset-0 cursor-grab w-full h-full object-cover object-center"
              width={1920}
              height={1080}
            />
          </div>
        </SwiperSlide>

        {/* ✅ Banner 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px] xl:h-[900px] bg-blue-500">
            <Image
              src={
                isMobile
                  ? "/images/banners/img3-mobile.png"
                  : "/images/banners/img2-desktop.png"
              }
              alt="Banner 2"
              className="absolute inset-0 cursor-grab w-full h-full object-cover object-center"
              width={1920}
              height={1080}
            />
          </div>
        </SwiperSlide>

        {/* ✅ Banner 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px] xl:h-[900px] bg-orange-500">
            <Image
              src={
                isMobile
                  ? "/images/banners/img3-mobile_.png"
                  : "/images/banners/img3-desktop.png"
              }
              alt="Banner 3"
              className="absolute inset-0 cursor-grab w-full h-full object-cover object-center"
              width={1920}
              height={900}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
