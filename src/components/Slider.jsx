import React, {useState, useEffect} from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {RxDotFilled} from "react-icons/rx";




const Slider = () => {

  const [isMobil, setIsMobil] = useState(window.innerWidth <= 1000);

  const slides = [
    {
      url: isMobil ? '../img/slider/reclama1-mobil.jpg' : '../img/slider/reclama1-desktop.jpg'
    },
    {
      url: isMobil ? '../img/slider/reclama2-mobil.jpg' : '../img/slider/reclama2-desktop.jpg'
    },
    {
      url: isMobil ? '../img/slider/reclama3-mobil.jpg' : '../img/slider/reclama3-desktop.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 50000);
    return () => clearInterval(slider);
  }, [slides.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobil(window.innerWidth <= 1000);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
<div className="relative max-w-full mx-6 py-16 px-4 group" style={{ paddingTop: "55.7142%", boxSizing: 'border-box' }}>
  <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
       className="absolute top-0 left-0 w-full h-full rounded-2xl bg-center bg-cover duration-500">
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiArrowLeft onClick={prevSlide} size={30}/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiArrowRight onClick={nextSlide} size={30}/>
        </div>
      </div>
      <div className="z-1 absolute left-1/2 transform -translate-x-1/2 flex justify-center py-2 mt-4">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer hover:text-gray-700 text-white"> <RxDotFilled /> </div>
          ))}
        </div>
    </div>
  );
};

export default Slider;
