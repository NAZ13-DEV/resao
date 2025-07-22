import React from "react";
import { SiBuildkite } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const AboutFive = (props) => {
  return (
    <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
      {props.title ? (
        <div className="flex flex-col items-center justify-center px-2 py-24 md:text-center text-start">
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
            Every success story starts with a strategy. Discover how we
            transform financial goals into generational legacies.
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div
            className={`flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg ${
              props.animate ? "wow animate__fadeInDown" : ""
            }`}
            data-wow-duration="1s"
          >
            <span className="py-4 text-6xl text-gray-700">
              <SiBuildkite />
            </span>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Building Financial Futures
                <br className="hidden md:block" />
                with Strategy & Vision
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                From personalized wealth planning to elite real estate
                investments, we help clients elevate their financial standing
                and create lasting impact. Let us show you what’s possible when
                experience meets excellence.
              </p>
            </div>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center font-semibold text-red-600 hover:text-red-700"
              >
                Learn more <IoIosArrowForward className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className={`object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 ${
                  props.animate ? "wow animate__fadeInDown" : ""
                }`}
                data-wow-duration="1s"
                src="/images/personal/group4.jpg"
                alt=""
              />
              <img
                className={`object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 ${
                  props.animate ? "wow animate__fadeInUp" : ""
                }`}
                data-wow-duration="1s"
                src="/images/personal/multiple.png"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className={`object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 ${
                  props.animate ? "wow animate__fadeInRight" : ""
                }`}
                data-wow-duration="1s"
                src="/images/personal/four.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
