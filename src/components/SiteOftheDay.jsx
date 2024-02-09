import React from 'react';

const SiteOftheDay = () => {
  return (
    <div className='flex flex-col p-1 bg-black text-[#fffce1] fixed left-0 translate-y-[-50%] top-[50%] w-[55px] align-items-center'>
      <div className='font-bold text-xl self-center'>W.</div>
      <div className='rotate-[-90deg] mt-[5rem] mb-[1.8rem] text-nowrap text-sm font-medium'>Site of the Day</div>
    </div>
  )
}

export default SiteOftheDay;