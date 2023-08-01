import React, { useState, useEffect, useRef } from "react";
import { gsap, Tween, Power3 } from "gsap/gsap-core";
import { CSSPlugin } from "gsap";
import logo from "../assets/logo512.png";
import bg from "../assets/animation/home_background.png";
import sea from "../assets/animation/home_bottom.png";
import sunray from "../assets/animation/sun_rays.png";
import original from "../assets/animation/original.jpg"

export default function Slider() {
  //   let logoItem = useRef(null);

  //   gsap.registerPlugin(CSSPlugin);

  //   useEffect(() => {
  //     const tl = gsap.timeline({ ease: "power4" });
  //     tl.to(logoItem, {
  //       rotation: 47,
  //       opacity: 3,
  //       duration: 5,
  //     });
  //   });

  return (
      <div className="w-full h-full">
        <h1 className="relative m-5 font-lobster text-slate-800 text-5xl lg:text-8xl z-10">Welcome to</h1>
        <h1 className="relative font-lobster text-slate-800 text-5xl lg:text-8xl z-10"> Aimie's Art Gallery </h1>
        <img className="absolute top-0 left-0 z-0" src={original} alt="origin" />
        {/* <img className="absolute top-0 left-0 z-0" src={bg} alt="sky" />
        <img className="absolute top-0 left-0 z-10" src={sea} alt="sea" />
        <img
          className="absolute top-0 right-0 z-20"
          src={sunray}
          alt="sunray"
        /> */}
      </div>
      
  );
}
