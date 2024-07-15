"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [text, setText] = useState(props.placeholder);
  const [selectedWallet, setSelectedWallet] = useState(props.selectedWallet);
  const [animation, setAnimation] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedWallet(null);
    if (props.inputId == "currencyFrom")
      props.setSelectedCurrency({
        currency: option.value,
        min: option.min,
      });
      if (props.inputId == "tradeType") {
        props.setSelectedTrade(option.id)
        console.log('set')
      }

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
    setSelectedWallet(props.selectedWallet);
  }, [props.selectedWallet]);

  useEffect(() => {
    const newText = selectedWallet
      ? selectedWallet
      : selectedOption
      ? selectedOption.value
      : props.placeholder;

    setAnimation("fadeOut 0.5s");
    setTimeout(() => {
      setText(newText);
      setAnimation("fadeIn 0.5s");
    }, 250);
  }, [selectedOption, selectedWallet, props.placeholder, props.selectedWallet]);

  return (
    <div
      className={`relative ${props.width} flex-center flex-col transition-all duration-300`}
      ref={dropdownRef}>
      <label
        htmlFor={props.inputId}
        onClick={toggleDropdown}
        className={`${props.varient} ${
          selectedOption || selectedWallet ? props.marginTop : "mt-0"
        } transition-all cursor-pointer flex justify-between items-center`}>
        {props.label && (
          <span
            className={` absolute ${
              selectedOption || selectedWallet
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
            (selectedOption && props.inputId == "currencyFrom") || selectedOption && props.inputId == "currencyTo" ? "text-white" : "text-black_100"
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

      <ul
        className={` ${
          isOpen
            ? " pointer-events-auto dropdown-open-animation"
            : " -top-4 pointer-events-none dropdown-close-animation"
        } transition-all opacity-0 duration-300 absolute z-[1] w-full border-[0.5px] border-black_100 rounded-lg divide-y-[0.1px] divide-black_200 bg-[#222222d3] backdrop-blur-[100px]`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu">
        {props.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`flex items-center justify-between px-3 py-2 text-[0.75rem] cursor-pointer whitespace-nowrap ${
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
              className={` ${
                text == option.value
                  ? "opacity-100"
                  : "opacity-0"
              } transition-all`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
