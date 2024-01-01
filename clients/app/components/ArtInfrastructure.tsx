"use client";
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ArtInfrastructure() {
  return (
    <div
      className='my-20 md:mb-24'
      style={{
        position: 'relative',
        backgroundImage:
          "url('./images/bg-pattern-circles.svg'), linear-gradient(135deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
        backgroundRepeat: 'no-repeat',
        borderBottomLeftRadius: '6rem',
        height: '25rem',
        backgroundPosition: 'center',
        borderTopRightRadius: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className='absolute max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center md:justify-end'>
          <AnimationOnScroll animateOnce animateIn='animate__fadeInLeft'>
            <img src='./images/illustration-phones.svg' alt='' className='object-contain max-w-96 lg:max-w-none' style={{ height: 'auto' }} />
          </AnimationOnScroll>
        </div>
        <div className='flex flex-col justify-center md:px-8 lg:px-16'>
          <AnimationOnScroll animateOnce animateIn='animate__fadeInRight'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold font-overpass text-white text-center md:text-start'>
              State of the Art Infrastructure
            </h1>
            <p className='text-base md:text-lg lg:text-xl font-overpass text-grayish-blue pt-5  text-center md:text-justify'>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}
