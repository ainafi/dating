// src/Step1.tsx
import React, { useState } from 'react';
import Image1 from '../assets/img1.png';
import useSound from 'use-sound';
import song from '@/assets/music.mp3';

interface StepProps {
  nextStep: () => void;
  noStep: () => void; // Add noStep function to the props
}

const Step1: React.FC<StepProps> = ({ nextStep, noStep }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play] = useSound(song);

  const handlePlay = () => {
    play();
    setIsPlaying(true);
  };

  return (
    <div className="w-full mx-auto max-w-7xl">
      {!isPlaying && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-md">
            <p className="mb-4 text-center">Click to play background music</p>
            <button
              className="w-full text-xl text-white duration-100 ease-in-out rounded-md bg-primary hover:bg-pink-400"
              onClick={handlePlay}
            >
              Play Music
            </button>
          </div>
        </div>
      )}
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
