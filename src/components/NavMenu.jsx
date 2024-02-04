import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const NavMenu = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNavbar = () => {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <div className="flex text-base justify-items-end">
      <button className='max-xl:hidden px-3 py-2 text-gray-400'>Login/Create Account </button>
      <button
        onClick={toggleNavbar}
        className='xl:hidden flex px-6 py-2 rounded-full border-2 text-gray-400 align-center text-sm'
      >  Menu {navIsOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>
      <button
        onClick={toggleNavbar}
        className='max-xl:hidden px-3 py-1 rounded-full border-2 text-white align-center'
      > Get GSAP
      </button>
    </div>
  );
}

export default NavMenu;