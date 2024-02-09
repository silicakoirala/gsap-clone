import React from 'react';
import Navbar from './Navbar.jsx';
import NavMenu from './NavMenu.jsx';
import AnimateAnything from './AnimateAnything.jsx';

const Header = () => {
  return (
    <div className="w-full top-0 fixed mx-3 container--wide ">
      <header className=' bg-[#0e100f] flex justify-between align-center py-3 border-b-[1px] border-gray-600'>
        <Navbar />
        <NavMenu />
      </header>
    </div>
  )
}

export default Header;