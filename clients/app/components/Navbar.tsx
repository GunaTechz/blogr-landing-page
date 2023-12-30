"use client";
import { useState } from 'react';
import Link from 'next/link';
import { footerData } from '@/utils/Footer';

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto bg-gradient-to-br from-body-gradient-start to-body-gradient-end bg-no-repeat bg-cover bg-center" style={{
      backgroundImage: "url('./images/bg-pattern-intro-mobile.svg'), linear-gradient(135deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
      backgroundPosition: '34% 33%',
      borderBottomLeftRadius: '6rem',
    }}>
      <div className='max-w-6xl mx-auto py-12 flex items-center justify-between'>
        <div className='flex items-center'>
          <img src="/images/logo.svg" alt="" width={100} height={100} className='text-white' />

          <div className='flex items-center'>
            {footerData.map((section, index) => (
              <div key={index} className='ml-10'>
                <button 
                  onClick={() => handleDropdownToggle(index)}
                  className="text-xl font-bold text-white flex items-center"
                >
                  {section?.title}
                  <img src="/images/icon-arrow-light.svg" alt="" width={20} height={20} className='ml-2 transform transition-transform' style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {openIndex === index &&
                  <div className="absolute z-10 bg-white mt-2 py-2 px-6 rounded-lg shadow-md">
                    {section?.links?.map((item, linkIndex) => (
                      <Link href={item.link} key={linkIndex} className='text-md font-bold text-gray-800 block py-1 hover:underline'>{item.name}</Link>
                    ))}
                  </div>
                }
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center'>
          <button className="text-xl font-overpass font-bold text-white px-6 hover:underline">Login</button>
          <button className="text-xl font-bold font-overpass px-6 py-3 rounded-full bg-white text-intro-gradient-end shadow-md hover:bg-grayish-blue hover:text-white hover:shadow-lg">sign up</button>
        </div>
      </div>

      <div className='text-center p-14'>
        <h1 className='text-6xl font-overpass font-bold text-white'>
        A modern publishing platform
        </h1>
        <p className='text-lg font-ubuntu font-bold text-white py-4'>
        Grow your audience and build your online brand
        </p>

        <div className='p-11'>
        <button className="text-xl font-ubuntu font-bold px-6 py-3 rounded-full bg-white text-intro-gradient-end shadow-md hover:bg-grayish-blue hover:text-white hover:shadow-lg mr-2">Start for Free</button>
        <button className="text-xl font-bold font-ubuntu text-white px-6 py-3 rounded-full bg-greyish-blue hover:text-intro-gradient-end shadow-md hover:bg-grayish-blue text-white hover:shadow-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
}
