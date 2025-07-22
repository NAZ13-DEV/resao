import React from "react";

const BrandOne = (props) => {
  const BrandData = [
    {
      img: "/images/personal/google.png",
    },
    {
      img: "/images/personal/bloomberg.png",
    },
    {
      img: "/images/personal/coin.png",
    },

    {
      img: "/images/personal/euro.png",
    },
    {
      img: "/images/personal/forbes.png",
    },

  ];
  return (
    <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
      <ul
        className={`flex justify-center items-center flex-wrap lg:px-40 px-4 ${
          props.animate ? "wow animate__fadeIn" : ""
        }`}
        data-wow-duration="3.5s"
      >
        {BrandData.map((item, index) => {
          return (
            <li key={index} className="p-4 text-center lg:p-12 flex-basis-20">
              <img
                src={`${item.img}`}
                alt="Logo Images"
                className="object-contain m-2 transition-transform duration-300 cursor-pointer lg:max-h-52 w-36 max-h-12 max-w-100 hover:transform hover:rotate-12 hover:scale-95 hover:opacity-100"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandOne;
