import React from 'react';

const Contact = () => {
  const inputBorderStyle = 'border-2 border-blue-600'; // Define the border style for inputs

  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/496614c7-615b-48a5-bd6a-faaabae87f1f" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
          <p className='text-blue-600 py-4'></p>
        </div>
        {/* Apply the border style to each form field */}
        <input className={`bg-[#ccd6f6] p-2 ${inputBorderStyle}`} type="text" placeholder='Name' name='name' />
        <input className={`my-4 p-2 bg-[#ccd6f6] ${inputBorderStyle}`} type="email" placeholder='Email' name='email' />
        <textarea className={`bg-[#ccd6f6] p-2 ${inputBorderStyle}`} name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  );
};

export default Contact;

