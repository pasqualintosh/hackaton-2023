import * as React from 'react';
import { People } from './icons';

const Landing: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;
  return (
    <div className='absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center px-28 bg-gradient-to-r from-50% from-primary-bg-dark to-primary-default-transparent '>
      <div>
        <p className='text-primary-white text-9xl font-inter'>Welcome</p>
        <p className='text-primary-white text-2xl font-inter pt-12 pb-8'>
          Shortest path calculator - team 5
        </p>
        <button
          className='bg-primary-bg-light hover:opacity-90 text-white font-bold py-3 px-10 rounded-full'
          onClick={(e) => {
            e.preventDefault();
            setIsVisible(false);
          }}
        >
          START
        </button>
        <People />
      </div>
    </div>
  );
};

export { Landing };
