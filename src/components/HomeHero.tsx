"use client"
import { MdOutlineArrowRight } from "react-icons/md";

const HomeSectionComponent = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/droyjiqwf/image/upload/v1700395418/uploads/chlorh2hj4pplgdchpgi.webp")',
      }}
      className="relative h-[600px] bg-cover bg-center my-10"
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <div className="flex w-[100%] items-center justify-center text-[#e7e7e7] ">
          <div className="mx-4">
            <div className="flex items-center justify-center">
              <h3 className="mt-20 w-32 rounded-full bg-[#FAC213] p-1 text-center  text-[12px] font-semibold text-black md:mt-12 lg:mt-20">
                NEW SEASON
              </h3>
            </div>
            <h1 className="my-3 text-center text-[25px] font-bold">
              Back to the past: Earrings
            </h1>
            <p className="text-[13px]">
              You can hide so much behind theatrics, and I dont need to do that
              any more. My relationships <br /> with producers or photographers
              - these are relationships that took years.
            </p>
            <div className="flex items-center justify-center">
              <button>
                <h3 className="mb-10 mt-7 flex w-64 items-center justify-center border-2  px-1 py-2 text-center text-[12px] font-bold text-white duration-200 hover:bg-primary-100  hover:text-black">
                  View all  products{" "}
                  <MdOutlineArrowRight />
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionComponent;
