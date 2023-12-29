import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [text, setText] = useState('');
  const phrases = [
    "I'm a Full Stack Developer.",
    "I'm a Software Development Engineer.",
    "I'm a Frontend Developer.",
    "I'm a Backend Developer",
    "I'm a Java Developer.",
    "I'm a Data Scientist."
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentPhrase = phrases[currentPhraseIndex];

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < currentPhrase.length) {
        currentText += currentPhrase[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        setTimeout(() => {
          eraseText();
        }, 1500); // Wait for 1.5 seconds before erasing the text
        clearInterval(interval);
      }
    }, 100); // Type speed: 100 milliseconds per character

    return () => clearInterval(interval);
  }, [currentPhrase]);

  const eraseText = () => {
    let currentText = text;
    const interval = setInterval(() => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setText(currentText);
      } else {
        clearInterval(interval);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, 50); // Erase speed: 50 milliseconds per character
  };

  return (
    <div name='home' className='w-full h-screen bg-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600'>Hi, My Name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Md Parwez
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-blue-600'>
          {text}
        </h2>
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

