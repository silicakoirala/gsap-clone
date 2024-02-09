import React from 'react'

const ShowcaseMenu = () => {
  return (
    <div className='flex flex-wrap justify-start pt-0 container text-[#fffce1] gap-20 pb-20'>
      <div className='flex flex-col'>
        <h6 className='pb-5 font-medium text-green-400'>GSAP</h6>
        <ul className='flex flex-col font-medium text-[1.2rem]'>
          <li>Core</li>
          <li>Docs</li>
          <li>All Plugins</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h6 className='pb-5 font-medium text-[#febcf4]'>Scroll</h6>
        <ul className='flex flex-col font-medium text-[1.2rem]'>
          <li>ScrollTrigger</li>
          <li>ScrollSmoother</li>
          <li>ScrollTo</li>
          <li>Observer</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h6 className='pb-5 font-medium text-orange-400'>SVG</h6>
        <ul className='flex flex-col font-medium text-[1.2rem]'>
          <li>MorphSVG</li>
          <li>DrawSVG</li>
          <li>MotionPath</li>
          <li>MotionPathHelper</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h6 className='pb-5 font-medium text-[#00bae2]'>UI</h6>
        <ul className='flex flex-col font-medium text-[1.2rem]'>
          <li>Flip</li>
          <li>SplitTextText</li>
          <li>Draggable</li>
          <li>Inertia</li>
          <li>Observer</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h6 className='pb-5 font-medium text-purple-400'>Text</h6>
        <ul className='flex flex-col font-medium text-[1.2rem]'>
          <li>SplitText</li>
          <li>ScrambleText</li>
          <li>Text</li>
        </ul>
      </div>
    </div>
  )
}

export default ShowcaseMenu;