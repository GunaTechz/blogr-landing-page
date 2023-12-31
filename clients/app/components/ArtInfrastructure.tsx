import React from 'react';

export default function ArtInfrastructure() {
  return (
    <div
      className='mb-24'
      style={{
        backgroundImage:
          "url('./images/bg-pattern-circles.svg'), linear-gradient(135deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
        backgroundRepeat: 'no-repeat',
        borderBottomLeftRadius: '6rem',
        height: '25rem',
        borderTopRightRadius: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='max-w-6xl mx-auto grid grid-cols-2'>
        <div className='flex items-center justify-end'>
          <img src="./images/illustration-phones.svg" alt="" className='max-w-full' style={{ height: 'auto' }} />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-bold font-overpass text-white text-start'>
            State of the Art Infrastructure
          </h1>
          <p className='text-[18px] font-overpass text-grayish-blue pt-5 text-justify'>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
    </div>
  );
}
