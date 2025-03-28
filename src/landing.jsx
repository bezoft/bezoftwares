import React, { useState } from 'react';
import FluidDarkGradient from './fluidbg';
import ServiceSection from './services';
import { Link } from "react-scroll";
import ContactForm from './contact';

const GridBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    className="absolute inset-0 z-0"
  >
    {/* Radial Gradient Mask */}
    <defs>
      <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="70%" stopColor="white" stopOpacity="0.5" />
        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
      </radialGradient>

      {/* Grid Pattern */}
      <pattern
        id="grid"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
        />
        <path
          d="M 40 0 L 40 40 0 40"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      </pattern>

      {/* Mask to create circular fade */}
      <mask id="circleMask">
        <rect width="100%" height="100%" fill="url(#circleGradient)" />
      </mask>
    </defs>

    {/* Apply the grid with the circular mask */}
    <rect
      width="100%"
      height="100%"
      fill="url(#grid)"
      mask="url(#circleMask)"
      opacity="0.1"
    />
  </svg>
);


const Home = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <>
      <div className="md:min-h-screen flex flex-col text-white relative overflow-hidden">
        <nav className="flex justify-between items-center w-full p-4 md:p-6">
          <div className="flex items-center">
            <span className="font-bold text-3xl">Bezoft</span>
          </div>


          <div className="hidden md:flex space-x-6">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300 text-white"
            >
              Services
            </Link>

            <Link 
    to="contact" 
    smooth={true} 
    duration={500} 
    className="cursor-pointer hover:text-gray-300 text-white"
  >
    Contact
  </Link>
          </div>

<Link
  smooth={true} 
    duration={500} 
    className="cursor-pointer hover:text-gray-300 text-white"
    to="contact" 
  >
          <button className="bg-white text-black px-4 py-2 hover:cursor-pointer rounded-lg text-sm md:text-base">
            Get Started
          </button>
  </Link>
        </nav>


        <div className="flex-grow mt-28 md:mt-0 flex items-center justify-center text-center relative px-4">
          <GridBackground />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 metal-text text-center">
              Next-Gen Web & App Solutions,<br className="hidden md:block" />Tailored for You
            </h1>
            <p className="text-base md:text-xl mb-6 max-w-lg mx-auto text-gray-400">
              Grow by integrating modern platforms and applications to your business.
            </p>
          </div>
        </div>
      </div>
      <ServiceSection id={"services"} />
      <ContactForm id={"contact"} />

      <div className='w-full p-6 mt-12 flex flex-col justify-center items-center border'>
        <div className="flex space-x-6 justify-center items-center">
        <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300 text-white"
            >
              Services
            </Link>

            <Link 
    to="contact" 
    smooth={true} 
    duration={500} 
    className="cursor-pointer hover:text-gray-300 text-white"
  >
    Contact
  </Link>
        </div>

        <h1 className='text-white text-center mt-4'>
          Copyright &copy; {currentYear} Bezoft. All Rights Reserved.
        </h1>
      </div>
    </>

  );
};

export default Home;