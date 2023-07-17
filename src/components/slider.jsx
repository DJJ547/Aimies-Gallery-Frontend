import React, { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import img1 from "../assets/slider/img1.jpg";
import img2 from "../assets/slider/img2.jpg";
import img3 from "../assets/slider/img3.jpg";

const featuredProducts = [img1, img2, img3];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };

  useEffect(() => {
    // slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-left");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-right");
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative block ">
      <div className="max-w-full w-auto h-[600px] m-auto relative group">
        <img
          className="absolute inset-0 w-full h-full object-contain"
          src={featuredProducts[currentIndex]}
          alt="slider display img"
        />
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={handleOnPrevClick} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={handleOnNextClick} size={30} />
        </div>
        <div className="hidden group-hover:flex absolute justify-center inset-x-0 bottom-20 cursor-pointer">
          {featuredProducts.map((featuredProduct, slideIndex) => (
            <div
              ref={slideRef}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-3xl text-white border-solid border-black"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
