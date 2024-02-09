import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='mr-12'>
      <NavLink to="/" className='py-3 pr-4 text-4xl font-extrabold italic text-[#fffce1]'>GSAP</NavLink>
    </div>
  )
}

export default Logo;