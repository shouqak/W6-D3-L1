import React from 'react'
import { IoMenuOutline } from "react-icons/io5";

function Nav() {
  return (
    <nav className="bg-amber-300 h-10 flex items-center justify-center relative">
      <ul className="lg:flex flex-wrap text-xs md:text-sm font-bold text-center justify-center gap-2 md:gap-4 px-2 hidden">
        <li>ALL CATEGORIES</li>
        <li className="text-amber-500">TODAY DEALS</li>
        <li>ELECTRONICS</li>
        <li>CLOTHINGS</li>
        <li>COMPUTERS</li>
        <li>FURITURES</li>
        <li>MOM & BABY</li>
        <li>BOOKS & MORE</li>
      </ul>
      <IoMenuOutline className="lg:hidden flex justify-center items-center absolute left-2" />
    </nav>
  )
}

export default Nav
