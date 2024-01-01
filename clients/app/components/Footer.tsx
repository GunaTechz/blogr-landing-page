"use client";
import { useState } from 'react';
import Link from 'next/link';
import { footerData } from '@/utils/Footer';

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-br from-body-gradient-start to-body-gradient-end">
      <nav className="max-w-6xl mx-auto py-6 md:py-12 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <a>
              <img src="/images/logo.svg" alt="Logo" className="h-12" />
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {footerData.map((section, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => handleDropdownToggle(index)}
                className="text-white font-semibold hover:underline"
              >
                {section.title}
              </button>
              {openIndex === index && (
                <div className="absolute bg-white top-full left-0 mt-1 py-2 px-4 rounded shadow-md">
                  {section.links.map((item, linkIndex) => (
                    <Link href={item.link} key={linkIndex}>
                      <a className="block py-1 text-gray-800 hover:underline">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={openModal}
            className="text-white font-semibold hover:underline"
          >
            Login
          </button>
          <button
            onClick={openModal}
            className="text-white font-semibold bg-white bg-opacity-10 rounded-md px-4 py-2 hover:bg-opacity-20 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          {footerData.map((section, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => handleDropdownToggle(index)}
                className="text-gray-800 font-semibold w-full flex justify-between items-center"
              >
                {section.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pl-4">
                  {section.links.map((item, linkIndex) => (
                    <Link href={item.link} key={linkIndex}>
                      <a className="block py-1 text-gray-800 hover:underline">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={openModal}
            className="text-gray-800 font-semibold w-full text-left"
          >
            Login
          </button>
          <button
            onClick={openModal}
            className="text-gray-800 font-semibold bg-white bg-opacity-10 rounded-md px-4 py-2 hover:bg-opacity-20 transition duration-300 w-full mt-2"
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login/Register</h2>
            {/* Add your login/register form or content here */}
            <button
              onClick={closeModal}
              className="text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
