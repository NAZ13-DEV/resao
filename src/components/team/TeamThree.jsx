import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { Link } from "react-router-dom";

const TeamContent = [
  {
    images:
      "/images/personal/michelle.jpg",
    title: "Michelle Miles",
    designation: "Chief Investment Strategist",
    description:
      "Jonathan crafts bespoke investment strategies for high-net-worth clients, ensuring optimal portfolio performance across market cycles.",
    socialNetwork: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <GrInstagram />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
    ],
  },
  {
    images:
      "/images/personal/charlton.webp",
    title: "Diana Charlton",
    designation: "Wealth Planning Director",
    description:
      "Diana leads the wealth advisory team, helping clients build and preserve wealth through strategic planning and risk management.",
    socialNetwork: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <GrInstagram />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
    ],
  },
  {
    images:
      "/Images/personal/riley.jpeg",
    title: "Riley Chen",
    designation: "Real Estate Portfolio Manager",
    description:
      "James oversees multi-million dollar real estate assets, ensuring returns and scalability for our property investors and partners.",
    socialNetwork: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <GrInstagram />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
    ],
  },
  {
    images:
      "/Images/personal/vanessa.webp",
    title: "Vanessa Brooks",
    designation: "Client Success Lead",
    description:
      "Vanessa ensures top-tier support and personalized service for every client, making each financial journey seamless and rewarding.",
    socialNetwork: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <GrInstagram />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
    ],
  },
];

const TeamThere = (props) => {
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
        className={`py-2 px-4 mx-auto max-w-screen-xl lg:px-6 ${
          props.animate ? "wow animate__fadeIn" : ""
        }`}
        data-wow-duration="3.5s"
      >
        <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-2 md:grid-cols-4">
          {TeamContent.map((item, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group">
              <div className="bg-[#fdfdfd] shadow group">
                <div className="relative block overflow-hidden transition-opacity group-hover:opacity-80">
                  <img
                    className="w-full h-[380px] transition-transform duration-700 ease-in-out transform scale-100 group-hover:scale-125 object-cover"
                    src={`${item.images}`}
                    alt="Team Member"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 "></div>
                  <span className="absolute flex flex-col items-start justify-start font-medium text-gray-300 top-5 left-5">
                    {item.designation}
                  </span>
                  <div className="absolute left-0 right-0 flex flex-col items-center justify-center bottom-2">
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <ul className="flex py-2 space-x-4 text-lg text-white duration-700 opacity-0 sm:mt-0 group-hover:opacity-100">
                      {item.socialNetwork.map((social, index) => (
                        <li
                          key={index}
                          className="z-50 duration-700 rotate-180 opacity-100 group-hover:rotate-0"
                        >
                          <Link to={`${social.url}`}>{social.icon}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute inset-0 opacity-0 bg-gradient-to-b from-red-500 to-black group-hover:opacity-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamThere;
