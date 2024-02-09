import React from 'react'
// import { AiOutlineClose } from "react-icons/ai";
// import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import HamburgerMenu from "../assets/svgexport-5.svg";
import HamburgerMenuClose from "../assets/svgexport-5 (1).svg";


const NavMenu = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNavbar = () => {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <div className="flex text-base justify-items-end text-[#fffce1] gap-[1rem]">
      <button className='max-xl:hidden m-2 font-medium text-[#7c7c6f] hover:text-[#fffce1] hover:transition-transform'>Login/Create Account</button>
      <button
        onClick={toggleNavbar}
        className='xl:hidden flex m-2 px-4 py-1 rounded-full border-2 text-[#fffce1] items-center text-sm'
      >Menu {navIsOpen ? <img src={HamburgerMenuClose} alt="svg" className='p-2'/> : <img src={HamburgerMenu} alt="svg" className='p-2'/> }
      </button>
      <button
        onClick={toggleNavbar}
        className='max-xl:hidden px-4 m-2 rounded-full border-2 text-[#fffce1] items-center font-medium py-1'
      > Get GSAP
      </button>
    </div>
  );
}

export default NavMenu;