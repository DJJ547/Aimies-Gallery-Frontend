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
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2 xl:max-w-xl">
          <div className="lg:hidden relative">
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="hidden top-4 justify-center py-2">
              {proImgs.map((proImg, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          <h1 className="font-dancingScript text-3xl text-center mt-6 font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            YUET TUNG FUNG
            <br className="inline-block " />
            <span className="text-indigo-500">HONG KONG - BORN ARTIST</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Hong Kong artist Aimie Fung is currently living in San Francisco,
            CA. She got her AA in Environmental Studies in mid-2019 and got her
            BA in Studio Art and geology in mid-2021. Fung has been living in
            Bay Area for six years, fulfilling her dreams of being an artist.
            Her works are not just focusing on drawing and painting, but also
            other mixed media. Fung is also an Earth Science student. She wishes
            to invite viewers to see the nature in the combination of art and
            earth sciences through her artworks and photography.
          </p>
          <div className="mt-4 sm:mt-6">
            <a
              className="inline-block px-5 py-3 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
              href="#"
            >
              Book your escape
            </a>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            <img
              className="absolute inset-0 w-full h-full object-contain"
              src={proImgs[currentIndex]}
              alt="profile pic 1 in lg"
            />
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="hidden group-hover:flex absolute justify-center inset-x-0 bottom-20 cursor-pointer">
              {proImgs.map((proImg, slideIndex) => (
                <div
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
      </div>

      {/* <div className="flex justify-center items-center p-5 m-5">
          <div className="h-auto max-w-xs bg-gray-400 rounded-full overflow-hidden m-5">
            <img
              className="object-contain"
              src={proImg1}
              alt="profile picture 1"
            ></img>
          </div>
          <div className="h-auto max-w-xs bg-gray-400 rounded-full overflow-hidden m-5">
            <img
              className="object-scale-down"
              src={proImg2}
              alt="profile picture 2"
            ></img>
          </div>
          <div className="h-auto max-w-xs bg-gray-400 rounded-full overflow-hidden m-5">
            <img
              className="object-scale-down"
              src={proImg3}
              alt="profile picture 3"
            ></img>
          </div>
        </div> */}
      {/* <div className="p-10 mb-40">
          <h1 className="font-dancingScript text-5xl text-center mb-5">
            YUET TUNG FUNG
          </h1>
          <h5 className="font-dancingScript text-xl text-center mb-5">
            HONG KONG - BORN ARTIST
          </h5>
          <div className="w-2/3 ml-40 mr-40">
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Hong Kong artist Aimie Fung is currently living in San Francisco,
              CA.
              She got her AA in Environmental Studies in mid-2019 and got her BA
              in Studio Art and geology in mid-2021.
              Fung has been living in Bay Area for six years, fulfilling her
              dreams of being an artist.
              Her works are not just focusing on drawing and painting, but also
              other mixed media.
              Fung is also an Earth Science student.
              She wishes to invite viewers to see the nature in the combination
              of art and earth sciences through her artworks and photography.
            </p>
          </div>
        </div> */}
      <Footer />
    </div>
  );
}
