/* eslint-disable @next/next/no-img-element */
"use client";

import { getStarted } from "@/constant";
import { useState, useEffect, useRef } from "react";

export const GetStarted = () => {
  const [transaction, setTransaction] = useState("buy");
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [imgUrl, setImgUrl] = useState("./assets/images/process-1.png");
  const [animation, setAnimation] = useState("");

  const radius = 17; 
  const circumference = 2 * Math.PI * radius;

  const sectionRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {

    if (!isInView) return;

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentTaskIndex < getStarted.length - 1) {
            setCurrentTaskIndex(currentTaskIndex + 1);
            return 0;
          } else {
            return 100;
          }
        }
        return prev + 1;
      });
    };

    const interval = setInterval(updateProgress, 100);

    // scroll current li item into view
    const currentItem = ulRef.current.querySelectorAll('li')[currentTaskIndex];
    if (currentItem) {
      currentItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    return () => clearInterval(interval);
    
  }, [currentTaskIndex, isInView, setCurrentTaskIndex]);

  const offset = circumference - (progress / 100) * circumference;

  const handleItemClick = (index) => {
    setCurrentTaskIndex(index)
    setProgress(0)
  };

  useEffect(() => {
    const newImgUrl = getStarted[currentTaskIndex]?.imgUrl;

    setAnimation("fadeOut 0.3s forwards");
    setImgUrl(newImgUrl);
    setTimeout(() => {
      setAnimation("fadeIn 0.5s forwards");
    }, 250);

  }, [currentTaskIndex]);

  return (
    <section ref={sectionRef} className="relative padding-x mt-[11.5rem] pb-[9.375rem] border-b-[0.1rem] border-black_400 border-dashed">
      <div className="base:w-[34%] w-full">
        <h2>How to Get Started</h2>
        {/* buy or sell */}
        <div className="flex-start">
          <div className="base:text-[1.5rem] text-lg w-fit flex-center mt-6 font-[Coolvetica]">
            <div
              onClick={() => setTransaction("buy")}
              className={`${
                transaction == "buy"
                  ? "text-white"
                  : "text-black_300 hover:text-white"
              } pr-6 border-r border-dashed border-black_400`}>
              <div className=" flex items-center flex-col relative cursor-pointer">
                <span className="mb-2">Buying</span>{" "}
                <div
                  className={`${
                    transaction == "buy" ? "opacity-100" : "opacity-0"
                  } selected-line`}></div>
              </div>
            </div>
            <div
              onClick={() => setTransaction("sell")}
              className={`${
                transaction == "sell"
                  ? "text-white"
                  : "text-black_300 hover:text-white"
              } flex items-center flex-col relative cursor-pointer pl-6 `}>
              <div className=" flex flex-col relative cursor-pointer">
                <span className="mb-2">Selling</span>{" "}
                <div
                  className={`${
                    transaction == "sell" ? "opacity-100" : "opacity-0"
                  } selected-line`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex base:flex-row flex-col justify-between">
        {/* details */}
        <div className="mt-14 leading-[2rem] text-black_200 text-lg">
          <p className="">
            With Barta, you can begin trading in less than 10 minutes with these
            simple steps:
          </p>
          <ul ref={ulRef} className="overflow-auto overflow-container h-[15rem] pb-4 space-y-4 mt-6 transition-all">
            {getStarted.map((item, index) => (
              <li key={item.id} className="flex gap-4" onClick={() => {handleItemClick(index)}}>
                <div className="flex-center relative top-1 w-[2.8rem] h-[2.8rem] p-[0.2rem] rounded-full">
                <svg
                  width="38px"
                  height="38px"
                  viewBox="0 0 38 38"
                >
                  <circle
                    stroke="white"
                    strokeWidth="3"
                    fill="transparent"
                    r={radius}
                    cx="19"
                    cy="19"
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset:
                        index < currentTaskIndex ? 0 :
                        index === currentTaskIndex ? offset : circumference,
                      transform: 'rotate(-90deg)',
                      transformOrigin: '50% 50%',
                      transition: 'stroke-dashoffset 0.05s linear', // Smooth transition
                    
                    }}
                  />
                </svg>
                  <span className="progress-text absolute text-white text-[0.75rem]">{item.id}</span>
                </div>
                      <p className={`${(index < currentTaskIndex || index === currentTaskIndex) ? "text-white" :
                        index === currentTaskIndex ? "text-black_200" : ""} cursor-pointer`}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* images */}
        <div className="absolute top-0 right-0 w-[52%] h-[27.5rem] linear-bg p-4">
        <div className="overflow-hidden flex-center flex-col rounded-[0.625rem] w-full h-full bg-black_100" 
        style={{boxShadow: "0px 0px 0.597px 0px rgba(0, 0, 0, 0.70), 0px 11.939px 17.908px 0px rgba(0, 0, 0, 0.30), 0px 5.969px 29.847px 0px rgba(0, 0, 0, 0.20)"}}>
        <img src="/assets/svgs/browser.svg" alt="browser" className="w-full rounded-t-[0.625rem]"/>
        <div className="bg-transparent relative text-white w-full rounded-b-[0.625rem] img-container" style={{ animation }}>
          <img src={imgUrl} alt="process image" className=" w-[99.99%] h-full object-cover rounded-b-[0.625rem]"/>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};
