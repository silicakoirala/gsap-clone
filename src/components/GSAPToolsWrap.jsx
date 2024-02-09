import React from 'react'
import GSAPTools from './GSAPTools';
import GSAPToolsList from './GSAPToolsList';

const GSAPToolsWrap = () => {
  return (
    <>
     <div className='text-[#fffce1] flex flex-row items-center container'>
        <div className='text-[50px]'>{"{"}</div>
          <div className='text-l font-medium px-2 pt-3'>GSAP® Tools</div>
        <div className='text-[50px]'>{"}"}</div>
      </div>
      <GSAPToolsList />
    </>
  )
}

export default GSAPToolsWrap;