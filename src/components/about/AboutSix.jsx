import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const AboutSix = (props) => {
  return (
    <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
      {props.title ? (
        <div className="flex flex-col items-center justify-center px-2 md:text-center text-start">
          <h2
            className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${
              props.animate ? "wow animate__fadeInDown" : ""
            }`}
            data-wow-duration="1s"
          >
            {props.title}
          </h2>
          <p
            className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${
              props.animate ? "wow animate__fadeInUp" : ""
            }`}
            data-wow-duration="1s"
          >
            Experience the power of strategic financial planning and real estate
            excellence crafted to elevate your future.
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              className={`object-cover w-full h-56 rounded shadow-lg sm:h-96 ${
                props.animate ? "wow animate__fadeInLeft" : ""
              }`}
              data-wow-duration="1s"
              src="/images/personal/face.png"
              alt="Sophia Daniels strategy"
            />
          </div>

          {/* Right Text */}
          <div
            className={`flex flex-col justify-center ${
              props.animate ? "wow animate__fadeInRight" : ""
            }`}
            data-wow-duration="1s"
          >
            <div className="max-w-xl pl-2 mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Results-Driven Strategy
                <br className="hidden md:block" />
                for
                <span className="relative px-1">
                  <span className="relative inline-block text-red-600">
                    Financial Growth
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                With over 17 years in the financial industry, we bring
                unparalleled insight into investment planning, risk management,
                and real estate development that delivers measurable results for
                our clients.
              </p>
            </div>

            <p className="pl-2 mb-4 text-sm font-bold tracking-widest text-red-700 uppercase">
              Core Strengths
            </p>

            <div className="grid pl-2 space-y-3 text-gray-600 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                <li className="flex">
                  <MdSubdirectoryArrowRight /> Wealth Planning & Preservation
                </li>
                <li className="flex">
                  <MdSubdirectoryArrowRight /> Strategic Real Estate Consulting
                </li>
                <li className="flex">
                  <MdSubdirectoryArrowRight /> Tax-Efficient Investment
                  Structuring
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <MdSubdirectoryArrowRight /> Private Client Advisory
                </li>
                <li className="flex">
                  <MdSubdirectoryArrowRight /> Generational Wealth Building
                </li>
                <li className="flex">
                  <MdSubdirectoryArrowRight /> Corporate Financial Seminars
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSix;
