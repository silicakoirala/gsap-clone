import React from 'react'
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Navbar = () => {

  return (
    <nav className='flex items-center justify-between'>
      <Logo />
      <div className='max-xl:hidden text-[18px] align-center float-left mr-auto flex gap-[2vw] bg-[#0e100f]  text-neutral-400	font-medium'>
        <NavLinks />
      </div>
    </nav>
  )
}

export default Navbar;