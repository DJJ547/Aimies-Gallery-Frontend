import React, { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgs, setImgs] = useState([]);

  const slideRef = useRef();

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/home")
      .then((response) => response.json())
      .then((data) => {
        setImgs(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // slideRef.current.addEventListener("animationend", removeAnimation);
    if (imgs.length > 0) {
      slideRef.current.addEventListener("mouseenter", pauseSlider);
      slideRef.current.addEventListener("mouseleave", startSlider);
    }

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 10000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % imgs.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-left");
  };
  const handleOnPrevClick = () => {
    const productsLength = imgs.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-right");
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="">
      <div className="max-w-full w-auto h-[900px] py-16 px-4 relative group">
        {imgs.length > 0 && (
          <img
            className="flex inset-0 w-full h-full object-contain"
            src={imgs[currentIndex].signed_url}
            alt="image_slider"
            ref={slideRef}
          />
        )}
        {imgs.length > 0 && (
          <h1 className="flex w-auto text-2xl font-bold justify-center items-left z-10">
            {imgs[currentIndex].name}
          </h1>
        )}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer xl:ml-64">
          <BsChevronCompactLeft onClick={handleOnPrevClick} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer xl:mr-64">
          <BsChevronCompactRight onClick={handleOnNextClick} size={30} />
        </div>
        <div className="hidden group-hover:flex absolute justify-center inset-x-0 bottom-20 cursor-pointer">
          {imgs.map((url, slideIndex) => (
            <div
              ref={slideRef}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-3xl text-blue-500 border-solid bottom-0"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
