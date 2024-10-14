// src/Step1.tsx
import React from 'react';
import Image1 from '../assets/img1.png';

interface StepProps {
  nextStep: () => void;
  noStep: () => void; // Add noStep function to the props
}

const Step1: React.FC<StepProps> = ({ nextStep, noStep }) => {
 
 

  return (
    <div className="w-full mx-auto max-w-7xl">
     
      <div className="flex flex-col items-center justify-center px-4 py-20">
        <img className="w-[400px]" src={Image1} alt="Step 1" />
        <h1 className="py-10 text-3xl font-love text-primary">Veux-tu sortir avec moi?</h1>
        <div>
          <button
            className="w-[100px] bg-primary rounded-md text-white text-xl hover:bg-pink-400 ease-in-out duration-100"
            onClick={nextStep}
          >
            Oui
          </button>
          <button
            onClick={noStep} // Change to call noStep function
            className="w-[100px] bg-primary rounded-md text-white text-xl hover:bg-pink-500 ml-5"
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
