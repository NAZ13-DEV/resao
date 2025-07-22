import React from 'react'

const BrandThree = (props) => {
    const BrandList = [
        {
            img: "/images/personal/google.png"
        }, {
            img: "/images/personal/forbes.png"
        }, {
            img: "/images/personal/coin.png"
        }, {
            img: "/images/personal/euro.png"
        }, {
            img: "/images/personal/fedex.jpg"
        }, {
            img: "/images/personal/visa.png"
        }, {
            img: "/images/personal/apple.jpg"
        }, {
            img: "/images/personal/amazon.png"
        }
    ]
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-24`}>
            <div className="grid items-center max-w-lg grid-cols-1 gap-12 mx-auto lg:grid-cols-3 lg:gap-8 md:max-w-7xl">
                <div>
                    <h2 className={`mb-6 md:text-7xl uppercase text-center lg:text-start text-5xl font-medium md:font-extralight py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title ? props.title : 'Brands'}</h2> 
                </div>
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 lg:col-span-2 place-items-center ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                    {
                        BrandList.map((item, index) => {
                            return (
                                <div key={index} className="py-6 rounded cursor-pointer">
                                    <img src={`${item.img}`} alt={`Brands ${index}`} className="transition-transform duration-300 cursor-pointer opacity-70 lg:max-h-52 lg:max-w-150 max-h-12 max-w-100 hover:transform hover:scale-90 hover:rotate-12 hover:opacity-100" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BrandThree