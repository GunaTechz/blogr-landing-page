"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { footerData } from '@/utils/Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { NavbarContainer } from './styles';

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);

  const handleDropdownToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const closeModalOnOutsideClick = (event: any) => {
    if (modalRef.current) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    if (openModal) {
      window.addEventListener('click', closeModalOnOutsideClick);
    } else {
      window.removeEventListener('click', closeModalOnOutsideClick);
    }
  }, [openModal]);
  return (
    <NavbarContainer>
    <div className="w-full h-auto">
      <div className='max-w-6xl mx-auto py-12 flex items-center justify-between'>
       {/* Desktop Navbar */}
        <div className='hidden md:flex items-center mx-10 md:px-0'>
          <img src="/images/logo.svg" alt="" width={100} height={100} className='text-white' />

          <div className='flex items-center '>
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

        <div className='hidden md:flex items-center'>
          <button className="text-xl font-overpass font-bold text-white px-6 hover:underline">Login</button>
          <button className="text-xl font-bold font-overpass px-6 py-3 rounded-full bg-white text-intro-gradient-end shadow-md hover:bg-grayish-blue hover:text-white hover:shadow-lg">sign up</button>
        </div>
      </div>

      {/* mobile Navbar */}
      <div className='md:hidden flex justify-between mx-10'>
        <img src="/images/logo.svg" alt="" width={100} height={100} className='text-white' />
        <div className='flex items-center cursor-pointer' onClick={() => setOpenModal(!openModal)}>
          {openModal ?
            <button onClick={() => setOpenModal(false)} className='rounded-full'>
                <img src="/images/icon-close.svg" alt="Close" width={40} className='text-white'/>
            </button>
          :
            <img src="/images/icon-hamburger.svg" alt="" width={50} className='text-white' />
          }
        </div>
        
        {openModal && (
        <div className="fixed mt-44 h-auto mx-10 rounded-lg inset-0 z-50 flex py-10 justify-center bg-white bg-opacity-100">
          <div className="w-full h-auto px-3">

            {/* Mobile Navbar Items */}
            {footerData.map((section, index) => (
              <div key={index} className='mb-4'>
                <button 
                  onClick={() => handleDropdownToggle(index)}
                  className="text-xl font-bold text-gray-800 flex items-center hover:text-gray-300 w-full justify-evenly"
                >
                  {section?.title}
                  <img src="/images/icon-arrow-dark.svg" alt="" width={20} height={20} className='transform transition-transform' style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {openIndex === index &&
                  <div className="pl-4 flex flex-col justify-center items-center p-2 bg-slate-200">
                    {section?.links?.map((item, linkIndex) => (
                      <Link href={item.link} key={linkIndex} className='block py-1 text-gray-800 hover:underline'>{item.name}</Link>
                    ))}
                  </div>
                }
              </div>
            ))}
            <hr className='w-full border-gray-300 py-2' />
            {/* Login and Sign Up Buttons */}
            <div className='w-[100%] flex flex-col items-center justify-center md:hidden'>
            <button className="text-xl font-overpass font-bold text-very-dark-blue px-6 pb-3 hover:underline">Login</button>
            <button className="text-xl font-bold font-overpass px-6 py-3 rounded-full bg-intro-gradient-end text-white shadow-md hover:bg-white hover:text-intro-gradient-end hover:shadow-lg">sign up</button>
            </div>
          </div>
        </div>
      )}

      </div>


      <div className='text-center py-16'>
        <h1 className='text-4xl lg:text-6xl font-overpass font-bold text-white'>
        A modern publishing platform
        </h1>
        <p className='text-sm md:text-md lg:text-lg font-ubuntu font-bold text-white py-8'>
        Grow your audience and build your online brand
        </p>
        <div className='p-11'>
        <button className="text-xl font-ubuntu font-bold px-6 py-3 mb-3 md:mb-0 rounded-full bg-white text-intro-gradient-end shadow-md hover:bg-grayish-blue hover:text-white hover:shadow-lg mr-2">Start for Free</button>
        <button className="text-xl font-bold font-ubuntu px-6 py-3 rounded-full bg-greyish-blue hover:text-intro-gradient-end shadow-md hover:bg-grayish-blue text-white hover:shadow-lg">Learn More</button>
        </div>
      </div>
    </div>
    </NavbarContainer>
  );
}
