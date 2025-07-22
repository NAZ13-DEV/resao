import React from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const serviceList = [
  {
    icon: <FiCast />,
    title: "Wealth Planning & Strategy",
    description: `Customized financial blueprints to help you grow, protect, and pass on your wealth with confidence.`,
    url: "/service-details",
  },
  {
    icon: <FiLayers />,
    title: "Real Estate Investment Consulting",
    description: `Expert insights into profitable property investments — from residential flips to commercial acquisitions.`,
    url: "/service-details",
  },
  {
    icon: <FiUsers />,
    title: "Financial Coaching & Mentorship",
    description: `One-on-one guidance designed to turn professionals into financially empowered decision-makers.`,
    url: "/service-details",
  },
  {
    icon: <FiMonitor />,
    title: "Retirement & Estate Planning",
    description: `Secure your legacy with comprehensive planning that ensures wealth transfer and peace of mind.`,
    url: "/service-details",
  },
  {
    icon: <FiLink />,
    title: "Tax Optimization Strategies",
    description: `Legally reduce tax burdens through intelligent structuring of income, assets, and investments.`,
    url: "/service-details",
  },
  {
    icon: <FiUsers />,
    title: "Women's Wealth Empowerment",
    description: `Helping ambitious women build financial independence and long-term security through targeted coaching.`,
    url: "/service-details",
  },
];

const ServiceListFour = (props) => {
  return (
    <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
      {props.title ? (
        <div className="flex flex-col items-center justify-center px-2 pb-24 md:text-center text-start">
          <h2
            className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-center text-[#1f1f25] ${
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
            {props.subTitle}
          </p>
        </div>
      ) : (
        ""
      )}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto ${
          props.animate ? "wow animate__fadeIn" : ""
        }`}
        data-wow-duration="3.5s"
      >
        {serviceList.map((item, index) => {
          return (
            <Link >
              <div
                key={index}
                className="relative overflow-hidden group bg-gradient-to-r"
              >
                <div className="relative z-10 p-4">
                  <span className="relative inline-block text-4xl text-red-600">
                    {item.icon}
                  </span>
                  <h2 className="py-4 text-2xl">{item.title}</h2>
                  <p className="text-[#1d1d24bf]">{item.description}</p>
                </div>
                <div className="absolute top-0 right-0 w-0 h-0 transform translate-x-2 -translate-y-2 group-hover:w-14 group-hover:h-14 transition-all duration-200 bg-gradient-to-b from-[#DC2828] to-[#EC0D4D] group-hover:rounded-bl-full"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceListFour;
