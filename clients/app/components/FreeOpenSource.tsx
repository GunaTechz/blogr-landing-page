"use client";
import { artInfrastructureData } from '@/utils/Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function FreeOpenSource() {
  return (
    <div className='py-8 md:pb-24 mx-10'>
      <div className='mt-10'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='w-full md:w-1/2 overflow-hidden'>
            <div className='relative'>
              <AnimationOnScroll animateOnce animateIn='animate__fadeInLeft'>
                <img
                  src='/images/illustration-laptop-desktop.svg'
                  alt=''
                  className='h-auto w-full lg:w-[150%] left-[-15%] object-contain'
                />
              </AnimationOnScroll>
            </div>
          </div>
          <div className='w-full md:w-1/2 max-w-md md:max-w-none mx-auto md:pl-8 pr-4 md:pr-8 items-start'>
            {artInfrastructureData.map((item, index) => (
              <div className='py-5' key={index}>
                <AnimationOnScroll animateOnce animateIn='animate__fadeInRight'>
                  <h1 className='text-lg md:text-2xl font-bold text-start font-overpass text-very-dark-blue'>{item.title}</h1>
                  <p className='text-base md:text-lg font-overpass text-justify text-grayish-blue pt-3 md:pt-5'>{item.desc}</p>
                </AnimationOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
