import React from 'react';
import EASports from "../assets/svgexport-56.svg";
import Nike from "../assets/svgexport-59.svg";
import Aol from "../assets/svgexport-62.svg";
import Gucci from "../assets/svgexport-65.svg";
import McDonalds from "../assets/svgexport-68.svg";
import Samsung from "../assets/svgexport-72.svg";

const BrandsUsingGSAP= ({}) => {
  return (
    <div>
      <div className='flex flex-row text-white container mb-40 gap-40'>
        <div className=''> 
          <img src={EASports} />
        </div>
        <div className=''>
          <img src={Nike} />
        </div>
        <div className=''>
          <img src={Aol} />
        </div>
        <div className=''>
          <img src={Gucci} />
        </div>
        <div className=''>
          <img src={McDonalds} />
        </div>
        <div className=''>
          <img src={Samsung} />
        </div>
      </div>
    </div>
  )
}

export default BrandsUsingGSAP;