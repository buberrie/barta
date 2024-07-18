/* eslint-disable @next/next/no-img-element */
"use client";

import { getStarted } from "@/constant";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const GetStarted = () => {
  const [transaction, setTransaction] = useState("buy");
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [imgUrl, setImgUrl] = useState("/assets/images/process-1.png");
  const [animation, setAnimation] = useState("");

  const radius = 16;
  const circumference = 2 * Math.PI * radius;

  const sectionRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
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

    const interval = setInterval(updateProgress, 80);

    // scroll current li item into view
    const currentItem = ulRef.current.querySelectorAll("li")[currentTaskIndex];
    if (currentItem) {
      currentItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    return () => clearInterval(interval);
  }, [currentTaskIndex, isInView, setCurrentTaskIndex]);

  const offset = circumference - (progress / 100) * circumference;

  const handleItemClick = (index) => {
    setCurrentTaskIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    const newImgUrl = getStarted[currentTaskIndex]?.imgUrl;

    setAnimation("fadeOut 0.3s forwards");
    setImgUrl(newImgUrl);
    setTimeout(() => {
      setAnimation("fadeIn 0.5s forwards");
    }, 300);
  }, [currentTaskIndex]);

  return (
    <section
      ref={sectionRef}
      className=" padding-x base:mt-[11.5rem] mt-[6rem] base:pb-[9.375rem] pb-[5.75rem] border-b-[0.1rem] border-black_400 border-dashed">
      <article className="relative">
      <div className="base:w-[34%] w-full">
        <h2>How to Get Started</h2>
        {/* buy or sell */}
        <div className="flex-start">
          <div className="base:text-[1.5rem] text-md w-fit flex-center mt-6 font-[Coolvetica]">
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

      <div className=" flex base:flex-row flex-col-reverse justify-between">
        {/* details */}
        <div className="mt-14 base:leading-[2rem] leading-[1.618rem] text-black_200 base:text-lg text-base md:w-[31%] base:w-[37%] w-full">
          <p className="">
            With Barta, you can begin trading in less than 10 minutes with these
            simple steps:
          </p>

          {/* list items */}
          <ul
            ref={ulRef}
            className="overflow-auto overflow-container base:h-[15rem] h-[16.5rem] py-5 space-y-4 mt-4 transition-all scroll-blur_s">
            {getStarted.map((item, index) => (
              <li
                key={item.id}
                className="flex gap-4"
                onClick={() => {
                  handleItemClick(index);
                }}>

                  {/* svg timer/ progress bar */}
                <div className="flex-center relative top-1 w-[2.8rem] h-[2.8rem] p-[0.2rem] rounded-full">
                  {/* progess bar */}
                  <svg width="2.375rem" height="2.375rem" viewBox="0 0 38 38">
                    <circle
                      stroke="white"
                      strokeWidth="0.16rem"
                      fill="transparent"
                      r={radius}
                      cx="19"
                      cy="19"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset:
                          index < currentTaskIndex
                            ? 0
                            : index === currentTaskIndex
                            ? offset
                            : circumference,
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                        transition: "stroke-dashoffset 0.05s linear", // Smooth transition
                      }}
                    />
                  </svg>
                  {/* number */}
                  <span className={`${
                    index < currentTaskIndex || index === currentTaskIndex
                      ? "text-white"
                      : index === currentTaskIndex
                      ? "text-black_200"
                      : ""
                  } progress-text absolute text-[0.75rem]`}>
                    {item.id}
                  </span>
                </div>

                  {/* stage detail */}
                <p
                  className={`${
                    index < currentTaskIndex || index === currentTaskIndex
                      ? "text-white"
                      : index === currentTaskIndex
                      ? "text-black_200"
                      : ""
                  } cursor-pointer`}>
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* images */}
        <div className="base:absolute relative top-0 right-0 base:w-[55%] w-full md:h-[28rem] linear-bg base:p-4 p-3 base:mt-0 mt-14">
          <div
            className="overflow-hidden flex-center flex-col base:rounded-[0.625rem] rounded-[0.35rem] w-full h-full bg-black_100"
            style={{
              boxShadow:
                "0px 0px 0.597px 0px rgba(0, 0, 0, 0.70), 0px 11.939px 17.908px 0px rgba(74, 42, 42, 0.3), 0px 5.969px 29.847px 0px rgba(0, 0, 0, 0.20)",
            }}>
            <div className="w-full base:h-[1.8rem] base:rounded-t-[0.625rem] rounded-t-[0.35rem] bg-black">
            <img
              src="/assets/svgs/browser.svg"
              alt="browser"
              className="w-full h-full base:rounded-t-[0.625rem] rounded-t-[0.35rem] object-cover"
            />
            </div>
            <div
              className="bg-transparent relative text-white w-full base:rounded-b-[0.625rem] rounded-b-[0.35rem] img-container"
              style={{ animation }}>
              <Image
                src={imgUrl}
                alt="process image"
                width={1000}
                height={1000}
                className=" w-[99.99%] h-full object-cotain base:rounded-b-[0.625rem] rounded-b-[0.35rem]"
              />
            </div>
          </div>
        </div>
      </div>
      </article>
    </section>
  );
};
