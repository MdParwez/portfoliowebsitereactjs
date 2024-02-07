import React from 'react';
import Typed from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const phrases = [
    "I'm a Full Stack Developer.",
    "I'm a Software Development Engineer.",
    "I'm a Frontend Developer.",
    "I'm a Backend Developer",
    "I'm a Java Developer.",
    "I'm a Data Scientist."
  ];

  return (
    <div name='home' className='w-full h-screen bg-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600'>Hi, My Name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Md Parwez
        </h1>
        <Typed
          strings={phrases}
          typeSpeed={100}
          backSpeed={50}
          backDelay={1500}
          loop
          className='text-4xl sm:text-6xl font-bold text-blue-600'
        />
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I absolutely love being a full-stack developer! My passion is creating awesome digital experiences. I focus on building websites that not only look great but also work flawlessly on any device. I'm all about blending design and development to make top-notch solutions. Always eager to learn and create something amazing in the world of web development!.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


