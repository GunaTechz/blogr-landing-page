"use client";
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ArtInfraStyles } from './styles';

export default function ArtInfrastructure() {
  return (
    <ArtInfraStyles>
    <div className='my-2 md:mb-24'>
      <div className='absolute top-[-10%] lg:top-[-20%] left-10 lg:left-40 max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center md:justify-end'>
          <AnimationOnScroll animateOnce animateIn='animate__fadeInLeft'>
            <img src='./images/illustration-phones.svg' alt='' className='object-contain max-w-64 lg:max-w-none' style={{ height: 'auto' }} />
          </AnimationOnScroll>
        </div>
        <div className='flex flex-col justify-center md:px-8 lg:px-16'>
          <AnimationOnScroll animateOnce animateIn='animate__fadeInRight'>
            <h1 className='text-xl md:text-3xl whitespace-nowrap
             lg:text-4xl font-bold font-overpass text-white text-center md:text-start'>
              State of the Art Infrastructure
            </h1>
            <p className='text-sm md:text-lg lg:text-xl font-overpass text-grayish-blue lg:pt-5  text-center lg:text-justify'>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
    </ArtInfraStyles>
  );
}
