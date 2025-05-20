import React from 'react'

function Footer() {
    return (
        <div className="flex flex-col lg:flex-row border m-10 justify-around items-center gap-6 md:gap-0 p-4">
            <div className=" text-center md:text-left">
                <p className="text-2xl">Bose Bluetooth Wireless Headphones</p>
                <p className="text-gray-400">
                    Crisp powerful sound from the best sounding wireless headphone in its class
                </p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
                <p className="text-xs line-through">$260.50</p>
                <p className="text-green-300 font-bold"> $219.05</p>
                <button className="bg-amber-400 rounded p-1 mt-2 w-full md:w-auto">Shop Now</button>
            </div>
            <div>
                <img
                    src="https://m.media-amazon.com/images/I/5129vi0lZkL._AC_UL480_FMwebp_QL65_.jpg"
                    alt=""
                    className="w-48 md:w-72 mx-auto"
                />
            </div>
        </div>
    )
}

export default Footer