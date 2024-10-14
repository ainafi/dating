import React from 'react';
import { food } from '@/assets';

interface FoodProps {
  handleClick: (index: number) => void;
  selectedIndex: number | null;
}

const Food: React.FC<FoodProps> = ({ handleClick, selectedIndex }) => {
  return (
    <div className='flex flex-wrap md:flex-row items-center justify-center'>
      {Object.values(food).map((item: string, index: number) => (
        <img
          onClick={() => handleClick(index)} // Pass the index to handleClick
          className={`w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-md hover:scale-105 ease-in-out duration-300 m-5 ${selectedIndex === index ? 'border-4 border-pink-500' : ''}`}
          src={item}
          key={index}
          alt={`Movie ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Food;
