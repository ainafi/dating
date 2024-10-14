// src/Step2.js
import React from 'react';
import Gif5 from '../assets/cant.gif';


interface StepProps {
  nextStep: () => void;
}

const Final: React.FC<StepProps> = () => (
  <div className='w-full h-screen mx-auto max-w-7xl'>
    <div className='flex flex-col items-center justify-center px-4 py-20'>
      <img className='w-[400px] rounded-md' src={Gif5} alt="Step 2" />
      <h1 className='py-10 text-3xl text-center font-love text-primary'>n'oubliez pas notre rendez vous </h1>
      
    </div>
  </div>
);

export default Final;
