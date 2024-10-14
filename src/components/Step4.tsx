// src/Step2.js
import { useState } from 'react';
import BubbleButton from './BubbleButton';
import Movie from './Movie';
import Anime from './Anime';

interface StepProps {
  nextStep: () => void;
}

const Step4: React.FC<StepProps> = ({ nextStep }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); 
  const [anime,setAnime]=useState<boolean>(false)
  const [movie,setMovie]=useState<boolean>(false)
  const handleClick = (index: number) => {
    // Toggle selection
    if (selectedIndex === index) {
      setSelectedIndex(null); // Deselect if already selected
    } else {
      setSelectedIndex(index); // Select the new index
    }
  };
  const handleAnime=()=>{
    setAnime(true)
    setMovie(false)
  }
  const handleMovie=()=>{
    setMovie(true)
    setAnime(false)
  }

  return (
    <div className='w-full h-screen mx-auto max-w-7xl'>
      <h1 className='py-10 text-2xl text-center md:text-3xl font-love text-primary'>Qu'est ce qu'on va regarder</h1>
      <div className='flex items-center justify-center'>
        <button 
          className='w-[100px] bg-primary rounded-md text-white text-xl hover:bg-pink-400 ease-in-out duration-100'
          onClick={handleAnime}
        >
          anime
        </button>
        <button onClick={handleMovie} className='w-[100px] bg-primary rounded-md text-white text-xl hover:bg-pink-500 ml-5'>
          film
        </button>
      </div>
      <div className='mb-5'>
      {
          anime && <Anime handleClick={handleClick} selectedIndex={selectedIndex} />
        }

        {
          movie && <Movie handleClick={handleClick} selectedIndex={selectedIndex} />
        }
      </div>

      <div className='flex items-center justify-center py-8'>
        <BubbleButton nextStep={nextStep} />
      </div>
    </div>
  );
};

export default Step4;
