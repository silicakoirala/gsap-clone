import React from 'react';

const GSAPTools = ({ imgSrc, title, titleColor, text, buttonText }) => {
  return (
    <div className='flex flex-row justify-start max-lg:flex-wrap text-[50px] max-md:text-[32px] first:pt-0 border-gray-600 border-b-[1px] pb-20 pt-20 container'>
      <div className='flex w-350 h-350'>
        <img style={{ width: '350px', height: '350px' }} src={imgSrc} alt="svg" />
      </div>
      <div className='flex  sm:px-0 md:px-10 lg:px-20 flex-col justify-between'>
        <div className='font-medium' style={{ color: titleColor }}>{title}</div>
        <div className='flex text-[#fffce1]'>{text}</div>
        <div className='text-[50px] mt-10'>
          <button
            className='flex px-10 max-md:px-30 max-sm:justify-center	max-sm:w-full py-2 rounded-full border-2 border-[#fffce1] text-[#fffce1] text-xl max-md:text-sm font-medium align-center'
          > Explore {buttonText}
          </button>
        </div>
      </div>
    </div >
  )
}

// bbru ppru titiru

export default GSAPTools;

