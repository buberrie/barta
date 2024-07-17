"use client";

import Button from "@/components/Button";
import { merchantFaqs, tradeFaqs } from "@/constant";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const Faq = () => {
  const [question, setQuestion] = useState("trade");
  const [faqs, setFaqs] = useState(tradeFaqs)
  const [isAnswerOpen, setIsAnswerOpen] = useState({ 0: true });
  const [showAll, setShowAll] = useState(false);
  const [paragraphHeights, setParagraphHeights] = useState({});
  const paragraphRefs = useRef({});

  useEffect(() => {
    if (question === "merchant") {
      setFaqs(merchantFaqs);
    } else {
      setFaqs(tradeFaqs);
    }
    setIsAnswerOpen({ 0: true });
    setShowAll(false);  // Reset showAll when question changes
  }, [question])

  const handleToggleAnswer = (index) => {
    setIsAnswerOpen((prev) => ({
        ...prev,
        [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const heights = {};
    Object.keys(paragraphRefs.current).forEach((index) => {
      if (paragraphRefs.current[index]) {
        heights[index] = paragraphRefs.current[index].scrollHeight;
      }
    });
    setParagraphHeights(heights);
  }, [isAnswerOpen]);

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  const itemsToDisplay = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className=" relative base:mt-[12.5rem] flex flex-col items-center base:top-0 -top-[14.75rem]">
    
      <h2>Frequently Asked Questions</h2>

      {/* trade or merchant toggle */}
      <div className="base:text-[1.5rem] text-md w-fit flex-center mt-6 font-[Coolvetica]">
        <div
          onClick={() => setQuestion("trade")}
          className={`${
            question == "trade"
              ? "text-white"
              : "text-black_300 hover:text-white"
          } pr-6 border-r border-dashed border-black_400`}>
          <div className=" flex items-center flex-col relative cursor-pointer">
            <span className="mb-2">Trading related</span>{" "}
            <div
              className={`${
                question == "trade" ? "opacity-100" : "opacity-0"
              } selected-line`}></div>
          </div>
        </div>
        <div
          onClick={() => setQuestion("merchant")}
          className={`${
            question == "merchant"
              ? "text-white"
              : "text-black_300 hover:text-white"
          } flex items-center flex-col relative cursor-pointer pl-6 `}>
          <div className=" flex flex-col relative cursor-pointer">
            <span className="mb-2">Merchant related</span>{" "}
            <div
              className={`${
                question == "merchant" ? "opacity-100" : "opacity-0"
              } selected-line`}></div>
          </div>
        </div>
      </div>

      {/* question and answer */}
      <div className=" mt-20 h-fit base:px-[18.31rem] px-4">
        {itemsToDisplay.map((faq, index) => (
          <div key={index} className="">
            <article
            className={` base:py-10 py-8 px-12 flex items-start gap-6 border ${
              isAnswerOpen[index] ? "border-purple_900 base:rounded-[1.25rem] rounded-[1rem]" : "border-transparent"
            } cursor-pointer transition-all 500ms`}
            onClick={() => {handleToggleAnswer(index)}}>
            <div className="relative top-[0.125rem] w-[1.9rem] h-[1.9rem] flex-shrink-0 ">
              <Image
                src="./assets/svgs/chevron.svg"
                alt="close"
                width={30}
                height={30}
                className={`absolute ${
                  isAnswerOpen[index] ? "show-answer" : "hide-answer"
                }`}
              />
              <Image
                src="./assets/svgs/chevron-filled.svg"
                alt="open"
                width={30}
                height={30}
                className={` ${isAnswerOpen[index] ? "hide-answer" : "show-answer"} `}
              />
            </div>

            {/* question and answer */}
            <div>
              <h3 className="base:text-xl text-base">{faq.question}</h3>
              <div
                className="overflow-hidden transition-height duration-500"
                style={{
                  height: isAnswerOpen[index]
                    ? `calc(${paragraphHeights[index]}px + 1rem)`
                    : "0px",
                }}>
                <p
                  ref={(el) => (paragraphRefs.current[index] = el)}
                  className={` ${
                    isAnswerOpen[index] ? "top-0 opacity-100" : "-top-[2rem] opacity-0"
                  } relative transition-all 500ms mt-4 base:text-lg text-base base:leading-[2.0225rem] text-black_50`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </article>
          <div className={`${index === faqs.length - 1 ? "" : "base:border-t-[0.1rem] border-t-[0.095rem] border-dashed border-black_400"}`}></div>
          </div>
        ))}

         {/* view more button */}
         <div className="w-fit ml-12 mt-12" onClick={handleViewMore}>
          <Button text={ showAll ? "Show less FAQs" : "View more FAQs"}  variant="btn-secondary" />
        </div>
        </div>

        <div className="w-full h-fit">
      <Image
        src="/assets/svgs/testimonial-bg.svg"
        alt="bg gradient"
        width={1440}
        height={600}
        className="absolute base:-mt-[70rem] -mt-[16rem]  w-full -z-[1] -rotate-180"
      />
      </div>
    
    </section>
  );
};
