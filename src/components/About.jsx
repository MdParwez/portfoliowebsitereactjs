import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Md Parwez, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a full-stack developer who loves making websites better! Whenever I come across a site, I can't resist tweaking things to improve how it works and feels for users. My goal is to create software that makes people's lives easier and more enjoyable. I'm all about enhancing features and experiences to give users something awesome to interact with! </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
