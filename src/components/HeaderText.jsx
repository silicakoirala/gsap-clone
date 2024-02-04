import { IoIosDownload } from "react-icons/io"; 
import React from 'react';

const HeaderText = () => {
  return (
    <div >
      <div className='leading-[250px] text-white text-[290px] text-bold '>
        <div className='ml-32'>
          Animate
        </div>
        <div className='justify-self-end ml-auto'>
          anything
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='text-white flex flex-row ml-32'>
          <div className='text-[100px]'>{"{"}</div>
          <div className=' text-2xl'>
            <div className=''>GSAP – A wildly robust JavaScript animation</div>
            <div className="">library built for professionals</div>
          </div>
          <div className='text-[100px]'>{"}"}</div>
        </div>
        <div>
          <button
            className='flex max-xl:hidden px-20 py-4 rounded-full border-2  border-green-500 text-white text-xl align-center'
          > Get GSAP <IoIosDownload />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderText;