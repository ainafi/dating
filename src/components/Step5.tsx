// src/Step2.js
import { useState } from 'react';
import BubbleButton from './BubbleButton';
import Food from './Food';


interface StepProps {
  nextStep: () => void;
}

const Step4: React.FC<StepProps> = ({ nextStep }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); 

  const handleClick = (index: number) => {
    // Toggle selection
    if (selectedIndex === index) {
      setSelectedIndex(null); // Deselect if already selected
    } else {
      setSelectedIndex(index); // Select the new index
    }
  };
  

  return (
    <div className='w-full h-screen mx-auto max-w-7xl'>
      <h1 className='py-10 text-3xl font-love text-primary text-center'>tes plat preferer</h1>

      <Food selectedIndex={selectedIndex} handleClick={handleClick} />  
      <div className='flex items-center justify-center py-2'>
        <BubbleButton nextStep={nextStep} />
      </div>
    </div>
  );
};

export default Step4;
