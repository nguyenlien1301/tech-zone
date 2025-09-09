"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconArrowRight } from "../icons";

export default function IntroSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={true} // prev/next
        pagination={{ clickable: true }} // dots có thể click
        breakpoints={{
          0: { pagination: { enabled: true } }, // mobile: dots bật
          768: { pagination: { enabled: false } }, // desktop: dots tắt
        }}
        className="z-50" // z-index cao tránh bị che
      >
        <SwiperSlide>
          <div className="intro-slide">
            <div className="relative w-full h-[400px]">
              <Image
                src="http://127.0.0.1:5500/assets/images/demos/demo-3/slider/slide-1.jpg"
                alt="slider-1"
                fill
                className="object-cover size-full"
              />
            </div>
            <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10 md:left-[70px] xl:left-[100px]">
              <h3 className="text-primary font-semibold mb-1 text-lg md:text-xl lg:text-2xl">
                Daily Deals
              </h3>
              <h1 className="font-black leading-8 text-3xl mb-2 md:text-4xl md:leading-10 lg:text-5xl lg:leading-12">
                AirPods <br />
                Earphones
              </h1>
              <div className="text-gray-500 font-semibold text-xl mb-2 md:text-2xl mt-2">
                <sup>Today:</sup>
                <span className="font-black leading-8 text-3xl mb-2 md:text-4xl md:leading-10 lg:text-5xl lg:leading-12 text-primary">
                  $247 <sup className="font-semibold">.99</sup>
                </span>
              </div>
              <Link
                href="product-detail.html"
                className="btn-primary w-[160px] h-8 gap-2 mt-4"
              >
                <span className="text-sm">Click Here</span>
                <IconArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro-slide">
            <div className="relative w-full h-[400px]">
              <Image
                src="http://127.0.0.1:5500/assets/images/demos/demo-3/slider/slide-2.jpg"
                alt="slider-1"
                fill
                className="object-cover size-full"
              />
            </div>
            <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10 md:left-[70px] xl:left-[100px]">
              <h3 className="text-primary font-semibold mb-1 text-lg md:text-xl lg:text-2xl">
                Deals and Promotions
              </h3>
              <h1 className="font-black leading-8 text-3xl mb-2 md:text-4xl md:leading-10 lg:text-5xl lg:leading-12">
                Echo Dot <br />
                3rd Gen
              </h1>
              <div className="text-gray-500 font-semibold text-xl mb-2 md:text-2xl mt-2">
                <sup className="intro-old-price">$49,99</sup>
                <span className="font-black leading-8 text-3xl mb-2 md:text-4xl md:leading-10 lg:text-5xl lg:leading-12 text-primary">
                  $29 <sup className="font-semibold">.99</sup>
                </span>
              </div>
              <Link
                href="product-detail.html"
                className="btn-primary w-[160px] h-8 gap-2 mt-4"
              >
                <span className="text-sm">Click Here</span>
                <IconArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
