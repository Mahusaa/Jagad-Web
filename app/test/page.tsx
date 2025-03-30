"use client"
import { useEffect, useState } from "react";

const AnimationComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const leftXValues = isMobile ? [-1500, -1500, -500] : [-800, -900, -400];
  const rightXValues = isMobile ? [1500, 1500, 500] : [800, 900, 400];
  const leftRotationValues = isMobile ? [-45, -40, -50] : [-30, -20, -35];
  const rightRotationValues = isMobile ? [45, 40, 50] : [30, 20, 35];
  const yValues = isMobile ? [200, -300, -700] : [100, -150, -400];

  const getTransformStyle = (index, isLeft) => {
    const progress = Math.min(scrollY / 800, 1);
    return {
      transform: `translate(${progress * (isLeft ? leftXValues[index] : rightXValues[index])}px, ${progress * yValues[index]}px) rotate(${progress * (isLeft ? leftRotationValues[index] : rightRotationValues[index])}deg)`,
    };
  };

  return (
    <div className="main">
      {[0, 1, 2].map((index) => (
        <div key={index} className="row flex justify-between">
          <div
            className="card-left bg-gray-200 w-32 h-40 rounded-lg shadow-lg"
            style={getTransformStyle(index, true)}
          ></div>
          <div
            className="card-right bg-gray-200 w-32 h-40 rounded-lg shadow-lg"
            style={getTransformStyle(index, false)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default AnimationComponent;

