import React, { useState, useEffect, useRef } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // Add a second state variable "height" and default it to the current window height
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      // Set the height in state as well as the width
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return both the height and width
  return { width, height };
};

export default function Slider() {
  const { width } = useViewport();
  const mobile_max_w = 480;
  const tablet_max_w = 768;
  const laptop_max_w = 1024;
  const desktop_max_w = 1200;
  return width < mobile_max_w ? <div>mobile</div> : <div>desktop</div>;
}
