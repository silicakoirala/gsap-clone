import React from 'react'
import BrandsUsingGSAP from './BrandsUsingGSAP';

const BrandsUsingGSAPWrap = () => {
  return (
    <div>
      <div className='text-[#fffce1] flex flex-row items-center container pb-20'>
        <div className='text-[50px]'>{"{"}</div>
          <div className='text-l font-medium px-2 pt-3'>Brands using GSAP®</div>
        <div className='text-[50px]'>{"}"}</div>
      </div>
      <BrandsUsingGSAP />
    </div>
  )
}

export default BrandsUsingGSAPWrap;