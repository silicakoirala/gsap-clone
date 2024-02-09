import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger separately

const HorizontalScrollComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".massiveImage", { innerHTML: "Your text content here" }); // Set text content directly

    gsap.to(".text", {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".text",
        start: "top top",
        end: () => window.innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  }, []); // Empty dependency array for useEffect, so it runs once on mount

  return (
    <div className='text-white'>
      <h1 className="pb-50vh mb-0">Scroll down to see a horizontal scroll section</h1>

     

      <h1 className="pb-50vh mb-0">Now we're back to regular scrolling</h1>

      <header>
        <a href="https://greensock.com/scrolltrigger">
        </a>
      </header>
    </div>
  );
}

export default HorizontalScrollComponent;
