import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col text-black bg-[#fffce1] overflow-hidden container'>
      <div className='flex flex-wrap md:flex-row flex-col justify-evenly mt-20'>
        <div className='flex-1 flex flex-col justify-between'>
          <div className='text-[30px] leading-[40px] font-medium pr-10 pb-10 lg:text-[40px] lg:font-medium'>Subscribe to the GSAP® newsletter to stay up-to-date with the latest releases</div>
          <input className="bg-transparent border-b-[1px] border-black placeholder:text-black placeholder:font-normal placeholder:text-[18px]" placeholder="Email Address" type="email" />
        </div>
        <div className='flex-1 flex flex-row max-md:mt-20 justify-between pt-0 container'>
          <div className='flex flex-col'>
            <h6 className='pb-5 font-medium'>Company</h6>
            <ul className='flex flex-col font-medium text-[1.2rem]'>
              <li>About</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h6 className='pb-5 font-medium'>GSAP</h6>
            <ul className='flex flex-col font-medium text-[1.2rem]'>
              <li>Pricing</li>
              <li>Showcase</li>
              <li>Resources</li>
              <li>Community</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h6 className='pb-5 font-medium'>Connect</h6>
            <ul className='flex flex-col font-medium text-[1.2rem]'>
              <li>CodePen</li>
              <li>GitHub</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-sm my-10 mt-40 font-normal'>
        ©2023 GreenSock, Inc. All rights reserved.
        Privacy Policy.  Terms of Use.
      </div>
    </div>

  )
}

export default Footer;