import React, { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Footer from "../components/footer";
import proImg1 from "../assets/profilePic/profile1.jpg";
import proImg2 from "../assets/profilePic/profile2.jpg";
import proImg3 from "../assets/profilePic/profile3.png";

export default function About() {
  const proImgs = [proImg1, proImg2, proImg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? proImgs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === proImgs.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="m-5 p-5 block lg:flex">
        <div className="w-auto lg:w-1/2 p-10">
          <h1 className="font-dancingScript text-center mt-6 font-bold text-gray-900 sm:mt-8 text-4xl">
            YUET TUNG FUNG
            <br className="inline-block " />
            <span className="text-indigo-500">HONG KONG - BORN ARTIST</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 text-2xl">
            - Hong Kong artist Aimie Fung is currently living in San Francisco,
            CA.<br></br>
            - She got her AA in Environmental Studies in mid-2019 and got her
            BA in Studio Art and geology in mid-2021.<br></br> 
            - Fung has been living in Bay Area for six years, fulfilling her dreams of being an artist.<br></br>
            - Her works are not just focusing on drawing and painting, but also other mixed media.<br></br> 
            - Fung is also an Earth Science student.<br></br> 
            - She wishes to invite viewers to see the nature in the combination of art and earth sciences through her artworks and photography.
          </p>
        </div>

        <div className="relative w-auto lg:w-1/2 p-10 group">
          <img
            className="w-full object-contain"
            src={proImgs[currentIndex]}
            alt="profile pic 1 in lg"
          />
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="hidden group-hover:flex absolute justify-center inset-x-0 bottom-20 cursor-pointer">
            {proImgs.map((proimg, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="hidden group-hover:block text-3xl text-white cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
