// src/Step2.js
import React from 'react';
import Gif1 from '../assets/tenor (1).gif';
import BubbleButton from './BubbleButton';

interface StepProps {
  nextStep: () => void;
}

const Step2: React.FC<StepProps> = ({ nextStep }) => (
  <div className='w-full h-screen mx-auto max-w-7xl'>
    <div className='flex flex-col items-center justify-center px-4 py-20'>
      <img className='w-[400px]' src={Gif1} alt="Step 2" />
      <h1 className='py-10 text-3xl text-center font-love text-primary '>yoouuupiiiiiiiiiiiiii</h1>
      <div>
        <BubbleButton nextStep={nextStep}/>
      </div>
    </div>
  </div>
);

export default Step2;
