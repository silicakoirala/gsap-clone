import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='pr-12'>
      <NavLink to="/" className='py-3 px-4 text-4xl font-extrabold italic text-white'>GSAP</NavLink>
    </div>
  )
}

export default Logo;