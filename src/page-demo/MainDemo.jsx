import React from "react";
import Helmet from "../components/common/HelmetTitle";

import AboutThree from "../components/about/AboutThree";
import ServiceListFour from "../components/service/ServiceListFour";
import PortfolioCardTwo from "../components/portfolio/PortfolioCardTwo";
import CounterOne from "../components/counters/CounterOne";
import TeamThere from "../components/team/TeamThree";
// import BlogListThree from "../components/blog/BlogListThree";
import BrandOne from "../components/brand/BrandOne";
import ContactForm from "../components/contact/ContactFormThree";
// import PricingTable from "../components/PricingTable/PricingTable";
import MainHeader from "../components/header/MainHeader";
import {
  Name,
  Experience,
  Occupation,
  OccupationOne,
  OccupationFour,
  About,
  Service,
  Works,
  Team,
} from "../components/Constant/constant";

import styled from "styled-components";
import { Link } from "react-router-dom";

const AppContainer = styled.div`
  max-width: 100%;
`;

const MainDemo = () => {
  return (
    <div>
      <Helmet pageTitle="Main Demo" />
      <AppContainer>
        <MainHeader subHeader={false} />
      </AppContainer>


<section className="bg-[#eee3da] bg-opacity-30 h-screen flex items-center">
  <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid items-center grid-cols-1 gap-12 pt-16 lg:grid-cols-2 lg:pt-28">
      {/* Left Content */}
      <div className="text-start lg:pr-8">
        <p
          className="hidden text-base font-semibold tracking-widest text-red-600 uppercase lg:text-xl xl:flex wow animate__fadeInDown"
          data-wow-duration="1s"
        >
          {`${Occupation}, ${OccupationOne} & ${OccupationFour}`}
        </p>

        <h1
          className="mt-4 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl wow animate__fadeIn"
          data-wow-duration="1s"
        >
          Build Wealth. Invest Smart. Live Free.
        </h1>

        <p
          className="mt-6 text-base text-black sm:text-lg lg:text-xl text-balance wow animate__fadeInDown"
          data-wow-duration="1s"
        >
          Learn directly from <strong>{Name}</strong> — {Occupation}, {OccupationOne}, and {OccupationFour} with {Experience} of elite financial leadership.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-red-500 rounded-full hover:bg-red-400 focus:bg-red-400 wow animate__fadeInDown"
          data-wow-duration="1s"
        >
          Book a Consultation
          <svg
            className="w-6 h-6 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 9l3 3m0 0l-3 3m3-3H8"
            />
          </svg>
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          className="hidden w-[800px] h-[550px] object-contain shadow-xl rounded-xl lg:block wow animate__fadeInRight"
          data-wow-duration="1s"
          src="/images/personal/beauty.png"
          alt={Name}
        />
      </div>
    </div>
  </div>
</section>


     <AboutThree
  animate={true}
  bgColor="bg-white"
  title="About"
  subTitle={About}
/>


     <ServiceListFour
  animate={true}
  bgColor="bg-gray-50"
  title="Services"
  subTitle={Service}
/>


      <PortfolioCardTwo
        animate={true}
        bgColor="bg-white"
        title="Works"
        subTitle={Works}
      />

      <CounterOne animate={true} bgColor="bg-white" />

      <TeamThere
        animate={true}
        bgColor="bg-gray-50"
        title="Team"
        subTitle={Team}
      />

      {/* <BlogListThree animate={true} title="Blogs" /> */}

      <BrandOne animate={true} bgColor="bg-white" />

      {/* <PricingTable
        animate={true}
        bgColor="bg-gray-50"
        title="Pricing"
        subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
      /> */}

      <ContactForm animate={true} bgColor="bg-white" />
    </div>
  );
};

export default MainDemo;
