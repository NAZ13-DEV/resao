import React from 'react'
import { Link } from 'react-router-dom';

const PortfolioCardTwo = (props) => {
const DataPortfolio = [
  {
    img: "/images/personal/group1.jpg",
    text: "Designed personalized wealth strategies for high-net-worth clients across 3 continents.",
    url: "/portfolio-details"
  },
  {
    img: "/images/personal/multiple.jpg",
    text: "Helped families achieve financial independence through long-term investment planning.",
    url: "/portfolio-details"
  },
  {
    img: "/images/personal/red.jpg",
    text: "Hosted executive coaching sessions on retirement planning, tax optimization, and wealth preservation.",
    url: "/portfolio-details"
  }
];


    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='flex flex-col items-center justify-center px-2 pb-24 md:text-center text-start'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 gap-x-6">
                    {DataPortfolio.map((item, index) => {
                        return (
                            <Link to={item.url} key={index}>
                                <div className="duration-500 md:px-4 lg:px-10 hover:-mt-4 hover:mb-4">
                                    <img className="duration-200 rounded-xl hover:rounded-none" src={`${item.img}`} alt="" />
                                    <h3 className="relative px-4 mt-8 text-xl font-medium leading-tight text-center text-black uppercase">
                                        <span className="before:block before:top-3 before:content-[''] before:absolute before:inset-0 before:w-6 before:h-1 before:bg-red-500"></span>
                                        {item.text}
                                    </h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default PortfolioCardTwo