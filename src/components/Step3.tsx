// src/Step2.js
import React from 'react';
import Gif3 from '@/assets/wait.gif'
import BubbleButton from './BubbleButton';
import { DatePickerDemo } from './ui/datepicker';

interface StepProps {
  nextStep: () => void;
}

const Step3: React.FC<StepProps> = ({ nextStep }) => (
  <div className='w-full h-screen mx-auto max-w-7xl'>
    <div className='flex flex-col items-center justify-center px-4 py-20'>
        <img className='w-[400px] rounded-md' src={Gif3} alt="Step 2" />
        <h1 className='py-10 text-3xl font-love text-primary'>Quand tu as une temps libre</h1>
        <div className='pb-5'>
            <DatePickerDemo/>
        </div>
        <div>
            <BubbleButton nextStep={nextStep}/>
        </div>
    </div>
  </div>
);

export default Step3;
