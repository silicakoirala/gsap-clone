import { IoIosDownload } from "react-icons/io";
import React from 'react';

const AnimateAnything = () => {
  return (
    <div className=" border-b-[1px] border-gray-600 pb-40 container">
      <div className='leading-[250px] text-[#fffce1] text-[290px] mdfont-semibold flex flex-col mb-10 mt-[160px]'>
        <div className='heading-xl'>
          Animate
        </div>
        <div className='ml-auto heading-xl'>
          anything
        </div>
      </div>
      <div className='flex flex-row justify-between flex-wrap'>
        <div className='text-[#fffce1] flex flex-row items-center'>
          <div className='text-[100px]'>{"{"}</div>
          <div className='max-md:text-[20px] max-sm:text-[16px] max-md:leading-[20px]  text-2xl px-4 pt-6'>
            <div className=''>GSAP – A wildly robust JavaScript animation</div>
            <div className="">library built for professionals</div>
          </div>
          <div className='text-[100px]'>{"}"}</div>
        </div>
        <div>
          <button
            className='flex px-20 py-2 max-md:px-40 rounded-full border-2  border-green-500 text-[#fffce1] text-xl align-baseline mt-20'
          > Get GSAP <IoIosDownload />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnimateAnything;