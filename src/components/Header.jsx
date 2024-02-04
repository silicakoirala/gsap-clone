import React from 'react';
import Navbar from './Navbar.jsx';
import NavMenu from './NavMenu.jsx';
import HeaderText from './HeaderText.jsx';

const Header = () => {
  return (
    <div className="border-bottom-2 fixed w-full top-0 left-0">
      <header className='flex justify-between align-center py-3 px-4 mx-6 my-2 border-b-[1px] border-gray-600'>
        <Navbar />
        <NavMenu />
      </header>
      <HeaderText />
    </div>
  )
}

export default Header;