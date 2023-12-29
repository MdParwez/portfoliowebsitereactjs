import React from 'react';

import duke from '../assets/duke.png';
import infosys from '../assets/infosys.png';
import javascript1 from '../assets/javascript1.png';
import fronendmeta from '../assets/fronendmeta.png';
import gfg from '../assets/gfg.png';
import metafront from '../assets/metafront.png';
import metajava from '../assets/metajava.jpeg';
import data from '../assets/data.png';
import deepai from '../assets/deepai.jpeg';

const Certificates = () => {
  return (
    <div name='certificates' className='w-full min-h-screen bg-black text-gray-300'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='border border-blue-600 rounded-lg p-6'>
          <p className='text-6xl font-bold mb-8 text-center'>Certificates</p>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {[
              infosys,
              duke,
              javascript1,
              fronendmeta,
              gfg,
              metafront,
              metajava,
              data,
              deepai
            ].map((certificate, index) => (
              <div
                key={index}
                className='transform hover:scale-110 duration-500 rounded-lg overflow-hidden border-4 border-blue-600'
              >
                <img
                  className='w-full h-auto object-cover'
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;





