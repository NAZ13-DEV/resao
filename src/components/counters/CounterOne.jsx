import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



const CounterOne = (props) => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const handleChange = (isVisible) => {
        if (isVisible && !didViewCountUp) {
            setDidViewCountUp(true);
        }
    };

let CounterData = [
  {
    countNum: 199,
    countTitle: "Tailored financial strategies deployed for affluent clients seeking sustainable growth.",
  },
  {
    countNum: 575,
    countTitle: "High-impact advisory sessions delivered to elevate portfolios and protect generational wealth.",
  },
  {
    countNum: 69,
    countTitle: "Institutional and private investors empowered through elite financial mentorship and planning.",
  },
];


    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='flex flex-col items-center justify-center px-2 pb-24 md:text-center text-start'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {CounterData.map((item, index) => {
                    return (
                        <div key={index} className='relative p-4 m-2 text-center  md:p-12 group'>
                            <h2 className='flex items-start justify-center pb-4 text-5xl font-semibold text-red-500 duration-500 md:text-6xl'>
                                <VisibilitySensor onChange={handleChange}>
                                    <CountUp
                                        start={0}
                                        end={didViewCountUp ? item.countNum : 0}
                                        duration={5}
                                    ></CountUp>
                                </VisibilitySensor>
                                <span className='text-lg md:text-4xl'>+</span>
                            </h2>
                            <p className='text-gray-600 duration-500 text-md md:text-lg'>{item.countTitle}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CounterOne;
