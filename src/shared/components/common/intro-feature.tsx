"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { IconHeart, IconStar } from "../icons";

export default function IntroFeature() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        navigation={true} // prev/next
        pagination={{ clickable: true }} // dots có thể click
        breakpoints={{
          0: { pagination: { enabled: true } }, // mobile: dots bật
          768: { pagination: { enabled: false } }, // desktop: dots tắt
        }}
        className="z-50" // z-index cao tránh bị che
      >
        <SwiperSlide>
          <div className="rounded-lg group bgDarkMode borderDarkMode">
            <figure className="relative block">
              <a href="product-detail.html">
                <img
                  src="http://127.0.0.1:5500/assets/images/demos/demo-3/products/product-1.jpg"
                  alt="Product image"
                  className="product-image"
                />
              </a>
              <span className="py-1 px-3 rounded-lg bg-secondary text-white text-sm font-semibold absolute top-5 left-5">
                New
              </span>
              <div className="absolute top-5 right-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <a href="#" className="opacity-0 group-hover:opacity-100">
                  <span className="">add to wishlist</span>
                </a>
                <IconHeart className="group size-8 p-2 bg-primary rounded-full cursor-pointer" />
              </div>
              <div
                className="absolute w-full flex items-center justify-center h-10 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-grayDarkest -bottom-3 group-hover:bottom-0 cursor-pointer"
                title="Add to cart"
              >
                <span className="font-medium text-sm text-white">
                  Add to cart
                </span>
              </div>
            </figure>
            <div className="px-5 pt-3 pb-1">
              <h3 className="font-bold text-base">
                <a href="product-detail.html">
                  GoPro - HERO7 Black HD Waterproof Action
                </a>
              </h3>
              <div className="text-primary text-base mb-2">$349.99</div>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center">
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                </div>
                <span className="text-sm text-gray-500">( 2 Reviews )</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg group bgDarkMode borderDarkMode">
            <figure className="relative block">
              <a href="product-detail.html">
                <img
                  src="http://127.0.0.1:5500/assets/images/demos/demo-3/products/product-2-2.jpg"
                  alt="Product image"
                  className="product-image"
                />
              </a>
              <div className="absolute top-5 right-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <a href="#" className="opacity-0 group-hover:opacity-100">
                  <span className="">add to wishlist</span>
                </a>
                <IconHeart className="group size-8 p-2 bg-primary rounded-full cursor-pointer" />
              </div>
              <div
                className="absolute w-full flex items-center justify-center h-10 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-grayDarkest -bottom-3 group-hover:bottom-0 cursor-pointer"
                title="Add to cart"
              >
                <span className="font-medium text-sm text-white">
                  Add to cart
                </span>
              </div>
            </figure>
            <div className="px-5 pt-3 pb-1">
              <h3 className="font-bold text-base">
                <a href="product-detail.html">
                  GoPro - HERO7 Black HD Waterproof Action
                </a>
              </h3>
              <div className="text-primary text-base mb-2">$349.99</div>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center">
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                </div>
                <span className="text-sm text-gray-500">( 2 Reviews )</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg group bgDarkMode borderDarkMode">
            <figure className="relative block">
              <a href="product-detail.html">
                <img
                  src="http://127.0.0.1:5500/assets/images/demos/demo-3/products/product-3.jpg"
                  alt="Product image"
                  className="product-image"
                />
              </a>
              <span className="py-1 px-3 rounded-lg bg-secondary text-white text-sm font-semibold absolute top-5 left-5">
                New
              </span>
              <div className="absolute top-5 right-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <a href="#" className="opacity-0 group-hover:opacity-100">
                  <span className="">add to wishlist</span>
                </a>
                <IconHeart className="group size-8 p-2 bg-primary rounded-full cursor-pointer" />
              </div>
              <div
                className="absolute w-full flex items-center justify-center h-10 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-grayDarkest -bottom-3 group-hover:bottom-0 cursor-pointer"
                title="Add to cart"
              >
                <span className="font-medium text-sm text-white">
                  Add to cart
                </span>
              </div>
            </figure>
            <div className="px-5 pt-3 pb-1">
              <h3 className="font-bold text-base">
                <a href="product-detail.html">
                  GoPro - HERO7 Black HD Waterproof Action
                </a>
              </h3>
              <div className="text-primary text-base mb-2">$349.99</div>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center">
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                </div>
                <span className="text-sm text-gray-500">( 2 Reviews )</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg group bgDarkMode borderDarkMode">
            <figure className="relative block">
              <a href="product-detail.html">
                <img
                  src="http://127.0.0.1:5500/assets/images/demos/demo-3/products/product-4.jpg"
                  alt="Product image"
                  className="product-image"
                />
              </a>
              <div className="absolute top-5 right-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <a href="#" className="opacity-0 group-hover:opacity-100">
                  <span className="">add to wishlist</span>
                </a>
                <IconHeart className="group size-8 p-2 bg-primary rounded-full cursor-pointer" />
              </div>
              <div
                className="absolute w-full flex items-center justify-center h-10 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-grayDarkest -bottom-3 group-hover:bottom-0 cursor-pointer"
                title="Add to cart"
              >
                <span className="font-medium text-sm text-white">
                  Add to cart
                </span>
              </div>
            </figure>
            <div className="px-5 pt-3 pb-1">
              <h3 className="font-bold text-base">
                <a href="product-detail.html">
                  GoPro - HERO7 Black HD Waterproof Action
                </a>
              </h3>
              <div className="text-primary text-base mb-2">$349.99</div>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center">
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                </div>
                <span className="text-sm text-gray-500">( 2 Reviews )</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg group bgDarkMode borderDarkMode">
            <figure className="relative block">
              <a href="product-detail.html">
                <img
                  src="http://127.0.0.1:5500/assets/images/demos/demo-3/products/product-1.jpg"
                  alt="Product image"
                  className="product-image"
                />
              </a>
              <span className="py-1 px-3 rounded-lg bg-secondary text-white text-sm font-semibold absolute top-5 left-5">
                New
              </span>
              <div className="absolute top-5 right-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <a href="#" className="opacity-0 group-hover:opacity-100">
                  <span className="">add to wishlist</span>
                </a>
                <IconHeart className="group size-8 p-2 bg-primary rounded-full cursor-pointer" />
              </div>
              <div
                className="absolute w-full flex items-center justify-center h-10 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-grayDarkest -bottom-3 group-hover:bottom-0 cursor-pointer"
                title="Add to cart"
              >
                <span className="font-medium text-sm text-white">
                  Add to cart
                </span>
              </div>
            </figure>
            <div className="px-5 pt-3 pb-1">
              <h3 className="font-bold text-base">
                <a href="product-detail.html">
                  GoPro - HERO7 Black HD Waterproof Action
                </a>
              </h3>
              <div className="text-primary text-base mb-2">$349.99</div>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center">
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4 text-primary fill-primary" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                  <IconStar className="size-4" />
                </div>
                <span className="text-sm text-gray-500">( 2 Reviews )</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
