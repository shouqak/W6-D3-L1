import React from "react"
import { FaArrowLeftLong } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"

function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-4 m-4 md:m-7 items-center justify-center">
      <div className="flex border h-auto md:h-45 gap-4 justify-center items-center w-full md:w-auto p-4">
        <FaArrowLeftLong className=" md:block" />
        <div className="flex flex-col justify-center text-center flex-1">
          <h1 className="text-base md:text-lg font-semibold">WOODEN MINIMALISTIC CHAIRS</h1>
          <p className="text-xs">SALE UP TO</p>
          <p className="text-green-400 text-sm md:text-base">40% OFF</p>
          <button className="bg-amber-500 w-24 md:w-28 mx-auto rounded-2xl mt-2 py-1 text-white text-xs md:text-sm">
            Shop Now
          </button>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61mLjE4u2+L._AC_UL960_FMwebp_QL65_.jpg"
            alt=""
            width={80}
         
          />
        </div>
        <FaArrowRight className="md:block" />
      </div>
      <div className="flex flex-col border justify-between items-center w-full md:w-52 h-auto md:h-45 p-4">
        <h2 className="text-base md:text-lg font-semibold text-center">pack 5 T-shirts for summer</h2>
        <p className="text-sm md:text-base text-center">
          starting at <span className="text-amber-500 font-bold">$9.99</span>
        </p>
        <img
          src="https://m.media-amazon.com/images/I/61EFBX2dZuL._AC_UL480_FMwebp_QL65_.jpg"
          alt=""
          width={60}
        />
      </div>
    </div>
  )
}

export default Hero
