import React from 'react'
import { PiBriefcaseThin, PiOfficeChairThin, PiHeadsetThin } from "react-icons/pi";
import { ClientEmail, RealEstateEmail, WealthEmail } from '../Constant/constant';


const ContactBoxes = (props) => {
    return (
        <div className={`container mx-auto pt-12 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
  <div className="flex flex-wrap justify-center">
    {/* Wealth Advisory */}
    <div className="flex flex-col items-center w-full px-4 mb-8 text-gray-600 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <span className="text-6xl"><PiOfficeChairThin /></span>
      <h2 className="py-2 font-semibold">Wealth Advisory</h2>
      <p className="py-2">{WealthEmail}</p>
    </div>

    {/* Client Services */}
    <div className="flex flex-col items-center w-full px-4 mb-8 text-gray-600 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <span className="text-6xl"><PiHeadsetThin /></span>
      <h2 className="py-2 font-semibold">Client Services</h2>
      <p className="py-2">{ClientEmail}</p>
    </div>

    {/* Real Estate Division */}
    <div className="flex flex-col items-center w-full px-4 mb-8 text-gray-600 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <span className="text-6xl"><PiBriefcaseThin /></span>
      <h2 className="py-2 font-semibold">Real Estate Division</h2>
      <p className="py-2">{RealEstateEmail}</p>
    </div>
  </div>
</div>


    )
}

export default ContactBoxes