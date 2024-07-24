"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, forwardRef } from "react";

export const Dropdown = forwardRef((props, ref) => {
  const { formValues = {}, handleFieldChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(props.placeholder);
  const [animation, setAnimation] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    handleFieldChange(props.inputId, option);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const selectedOption = formValues[props.inputId];
    const newText = selectedOption ? selectedOption.value : props.placeholder;
  
    if (newText !== text) {
      setAnimation("fadeOut 0.5s");
      const timeoutId = setTimeout(() => {
        setText(newText);
        setAnimation("fadeIn 0.5s");
      }, 250);
  
      return () => clearTimeout(timeoutId);
    }
  }, [formValues, props.inputId, props.placeholder, text]);

  return (
    <div
      ref={dropdownRef}
      id={props.inputId}
      className={`relative ${props.width} flex-center flex-col transition-all duration-300`}>
      <label
        ref={ref}
        htmlFor={props.inputId}
        onClick={toggleDropdown}
        className={`${props.varient} ${
          formValues[props.inputId] ? props.marginTop : "mt-0"
        } transition-all cursor-pointer flex justify-between items-center`}>
        
        {props.label && (
          <span
            className={` absolute ${
              formValues[props.inputId]
                ? "-top-[4rem] pt-8 left-0 base:text-base text-sm text-black_200"
                : "left-[1.6rem] top-[1.25rem] base:text-[1.125rem] text-sm text-black_300"
            } transition-all duration-300`}>
            {props.label}
          </span>
        )}

        <input
          id={props.inputId}
          type="radio"
          value={text}
          className="input-radio"
        />

        <span className={` ${props.position} ${
            (formValues[props.inputId] && props.inputId == "currencyFrom") || formValues[props.inputId] && props.inputId == "currencyTo" ? "text-white" : ""
          } capitalize flex items-center gap-2`}
          style={{ animation }} > {text} </span>
        
        {props.dropdownBtn ? (
          <div
            className={` ${
              isOpen ? "dropdown-icon-open" : "dropdown-icon-close"
            } `}>
            {props.dropdownBtn}
          </div>
        ) : (
          <span className="trade">View all</span>
        )}
      </label>

      {props.options && <ul
        className={` ${
          !isOpen
            ? "top-1 opacity-0 h-0 pointer-events-none dropdown-close-animation"
            : " top-0 opacity-100 h-fit base:max-h-[7.6rem] max-h-[6.5rem] pointer-events-auto dropdown-open-animation"
        } transition-all overflow-y-scroll overflow-container h-fit max-h-[8.5rem] duration-300 absolute z-[1] w-full border-[0.5px] border-black_100 rounded-lg divide-y-[0.1px] divide-black_200 bg-[#222222d3] backdrop-blur-[100px]`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu">
        {props.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`flex items-center justify-between base:px-3 px-[0.6rem] base:py-2 py-[0.35rem] text-[0.75rem] cursor-pointer whitespace-nowrap ${
              text == option.value
                ? "text-white"
                : "hover:bg-[#333333a9] text-black_200 hover:text-white"
            } transition-all`}
            role="menuitem">
            <span
              className={`font-[Supreme-Medium]  transition-all flex items-center gap-2 capitalize`}>
              {Array.isArray(option.value)
                ? option.value.map((item, index) => (
                    <React.Fragment key={index}>{item}</React.Fragment>
                  ))
                : option.value}
            </span>
            <Image
              src="./assets/svgs/selected.svg"
              alt="selected"
              width={9}
              height={6}
              className={` base:w-[0.875rem] w-[0.65rem] ${
                text == option.value
                  ? "opacity-100"
                  : "opacity-0"
              } transition-all`}
            />
          </li>
        ))}
      </ul>}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
