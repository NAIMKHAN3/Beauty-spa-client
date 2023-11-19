"use client"
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};

const HomePageBanner = () => {
  const swiperRef = useRef<SwiperRef>(null); // Use a single useRef for Swiper instance

  // Function to slide to the previous slide
  const goPrevButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to slide to the next slide
  const goNextButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 mt-1">
        <div className="group col-span-2">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper mx-auto w-[100%]"
            speed={1500}
          >
            {/* slider one */}
            <SwiperSlide className="bg-[#EEEEEE] ">
              <div className="relative text-white">
                <img
                  src={"https://res.cloudinary.com/droyjiqwf/image/upload/v1700403290/uploads/coe9ecuxvajskmammfn5.png"}
                  alt=""
                  className="h-[50vh] md:h-[100vh] w-full"
                />
                <span className="absolute top-0 bg-black left-0 opacity-10 inset-0"></span>
                <div className="absolute left-5 top-[30%] ml-14 w-[65%]">
              
                  <div className="flex gap-5">
                    {/* <BrandButton text="Click Collection" icon="" />
                    <WhiteButton text="Buy Now" /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* slider two */}
            <SwiperSlide className="tranp bg-[#EEEEEE]">
              <div className="relative text-white">
                <img
                  src={"https://res.cloudinary.com/droyjiqwf/image/upload/v1700403328/uploads/tkyxcm604gsjfnege6r4.png"}
                  alt=""
                  className="h-[50vh] md:h-[100vh] w-full"
                />
                <span className="absolute top-0 bg-black left-0 opacity-10 inset-0"></span>
                <div className="absolute left-5 top-[30%] ml-14 w-[65%]">
                  <div className="flex gap-5">
                    {/* <BrandButton text="Click Collection" icon="" />
                    <WhiteButton text="Buy Now" /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* slider three */}
            <SwiperSlide className="tranp bg-[#EEEEEE]">
              <div className="relative text-white">
                <img
                  src={"https://res.cloudinary.com/droyjiqwf/image/upload/v1700403358/uploads/h8ajyz9oeohveiaosut8.png"}
                  alt=""
                  className="h-[50vh] md:h-[100vh] w-full"
                  width={undefined}
                />
                <span className="absolute top-0 bg-black left-0 opacity-10 inset-0"></span>
                <div className="absolute left-5 top-[30%] ml-14 w-[65%]">
                  <div className="flex gap-5">
                    {/* <BrandButton text="Click Collection" icon="" />
                    <WhiteButton text="Buy Now" /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* slider four */}
            <SwiperSlide className="tranp bg-[#EEEEEE]">
              <div className="relative text-white">
                <img
                  src={"https://res.cloudinary.com/droyjiqwf/image/upload/v1700389601/uploads/zsynmuiirckzwqgssllo.jpg"}
                  alt=""
                  className="h-[50vh] md:h-[100vh] w-full"
                />
                <span className="absolute top-0 bg-black left-0 opacity-10 inset-0"></span>
                <div className="absolute left-5 top-[30%] ml-14 w-[65%]">
                  <div className="flex gap-5">
                    {/* <BrandButton text="Click Collection" icon="" />
                    <WhiteButton text="Buy Now" /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* slider button */}
            <div className="mt-5 flex items-center justify-center gap-3 text-center">
              <button
                className="prev-button absolute left-0 top-[35%] md:top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goPrevButton}
              >
                 <MdOutlineArrowCircleLeft />
              </button>
              <button
                className="next-button absolute right-0 top-[35%] md:top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goNextButton}
              >
               
                <MdOutlineArrowCircleRight />
              </button>
            </div>
          </Swiper>
        </div>

        <div className="relative">
          <img
            src={"https://res.cloudinary.com/droyjiqwf/image/upload/v1700403181/uploads/blij86557siwggtjl8ms.png"}
            alt=""
            className="hidden w-full md:block md:h-[100vh] lg:block lg:h-[100vh]"
          />
          <img
            src={"https://res.cloudinary.com/droyjiqwf/image/upload/v1700403181/uploads/blij86557siwggtjl8ms.png"}
            alt=""
            className="h-[50vh] w-full block md:hidden"
          />
          <div className="absolute  bottom-0 flex h-full w-full items-end justify-center  pb-14 opacity-100 transition-all">
            <div className="flex items-center justify-center text-center text-white">
              <div className="mx-auto">
                <h3 className="text-[12px] font-bold uppercase">
                  Sale Product
                </h3>
                <h1 className="font-smeibold my-2 text-[26px] uppercase">
                  Product sale
                </h1>
                <h4>15 NOV - 25 NOV</h4>
                <Link href="/" className="mt-3 underline">
                  See More Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
