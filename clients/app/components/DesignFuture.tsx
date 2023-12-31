import { designForFutureData } from '@/utils/Footer';
import React from 'react';

export default function DesignFuture() {
  return (
    <div className='py-24'>
      <div className='max-w-6xl mx-auto mt-10'>
        <h1 className='text-4xl font-bold text-center font-overpass text-very-dark-blue'>Design for the future</h1>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 pr-8 items-start'>
            {designForFutureData.map((item, index) => (
              <div className='py-5' key={index}>
                <h1 className='text-2xl font-bold text-start font-overpass text-very-dark-blue'>{item.title}</h1>
                <p className='text-lg font-overpass text-justify text-grayish-blue pt-5'>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className='md:w-1/2'>
            <img src="/images/illustration-editor-desktop.svg" alt="" className='w-[130%] h-auto max-w-none' />
          </div>
        </div>
      </div>
    </div>
  );
}
