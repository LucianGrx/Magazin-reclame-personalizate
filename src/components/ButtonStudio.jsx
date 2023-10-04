import React from 'react';
import { Link } from 'react-router-dom';

const BigBrightButton = ({ to }) => {
  return (
    <Link to={to}>
        <div className="flex items-center justify-center mt-10">
      <button 
         className="
         flex 
         items-center 
         justify-center 
         bg-pink-200 
         border-2 
         border-black 
         rounded-md 
         box-border 
         text-black 
         cursor-pointer 
         font-inter 
         text-base 
         h-12 
         w-60 
         px-10 
         relative 
         select-none 
         transition-transform 
         duration-200 
         ease-out 
         hover:bg-pink-300 
         active:bg-pink-400 
         md:px-16
       "
     >
         <div className="absolute inset-0 text-lg bg-black rounded-md transform translate-x-2 translate-y-2 w-60 text-white">Personalizeaza-ti reclama!</div>
        
      </button>
      </div>
    </Link>
  );
};

export default BigBrightButton;