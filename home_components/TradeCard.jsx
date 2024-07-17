/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import {
  trades,
  currencyCrypto,
  currencyFiat,
  wallets,

} from "@/constant";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export const TradeCard = () => {
  const [formValues, setFormValues] = useState(
    {
      wallet: "",
      amount: null,
      currencyFrom: "",
      currencyTo: "",
      conversionChannel: currencyCrypto[0],
      tradeType: trades[0],
      cryptoCurrency: currencyCrypto[0],
    }
  )

  // for scroll to error field, create refs for each input field
  const refs = useRef({
    wallet: null,
    amount: null,
    currencyFrom: null,
    currencyTo: null,
    conversionChannel: null,
    cryptoCurrency: null,
  });

   const [transaction, setTransaction] = useState("buy");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formValues.tradeType.id == "fiat" && !formValues.currencyFrom ) {
      newErrors.currencyFrom = "Please select a currency.";
    }
    if (formValues.tradeType.id == "fiat" && !formValues.currencyTo ) {
      newErrors.currencyTo = "Please select a currency.";
    }
    if (!formValues.amount) {
      newErrors.amount = "Enter amount to spend.";
    } else if (
      formValues.currencyFrom && formValues.tradeType.id == "fiat" &&
      parseFloat(formValues.amount) < parseFloat(formValues.currencyFrom.min)
    ) {
      newErrors.amount = `Amount must be at least ${formValues.currencyFrom.min} ${formValues.currencyFrom.value}.`;
    } else if (
      formValues.cryptoCurrency && formValues.tradeType.id == "crypto" &&
      parseFloat(formValues.amount) < parseFloat(formValues.cryptoCurrency.min)
    ) {
      newErrors.amount = `Amount must be at least ${formValues.cryptoCurrency.min} ${formValues.cryptoCurrency.id}.`;
    }
    if (!formValues.wallet) {
      newErrors.wallet = "Select payment method.";
    }
    if (!formValues.conversionChannel && formValues.tradeType.id == "fiat") {
      newErrors.conversionChannel = "Select conversion channel.";
    }
    if (!formValues.cryptoCurrency && formValues.tradeType.id == "crypto") {
      newErrors.cryptoCurrency = "Select payment methid.";
    }

    setErrors(newErrors);

    // Return the first field with an error
    for (const field in newErrors) {
      return field;
    }
    return null;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const firstErrorField = validateForm();
    if (firstErrorField) {
      scrollToErrorField(firstErrorField);
    } else {
      setFormValues((prevValues) => ({
        wallet: "",
        amount: "",
        currencyFrom: "",
        currencyTo: "",
        conversionChannel: currencyCrypto[0],
        currencyCrypto: currencyCrypto[0],
        tradeType: prevValues.tradeType,
      }));

      // clear errors as well
      setErrors({});
    }

  };

  const handleFieldChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "", // Clear the error for the field
    }));
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    // Allow only numbers and empty string
    if (newValue === "" || /^[0-9]*$/.test(newValue)) {
      setFormValues((prevValues) => ({
        ...prevValues,
        amount: newValue,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: "", // Clear the error for the field
      }));
    }
  };

  // immediately update wallet on icon click
  useEffect(() => {
    if (formValues.wallet) {
      handleFieldChange("wallet", { value: formValues.wallet.value })
    }
  }, [formValues.wallet])

    // Function to scroll to the field with an error
    const scrollToErrorField = (field) => {
      const ref = refs.current[field];
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

  return (
    <form onSubmit={handleFormSubmit} className="relative base:w-[35rem] w-full py-6 base:px-8 px-4 bg-blur border-[0.5px] border-black_300 rounded-[0.375rem]">
      {/* currency conversion */}
      <div className="relative w-full flex justify-end">
        <Dropdown
          options={trades}
          inputId="tradeType"
          placeholder={trades[0].value}
          varient="trade"
          formValues={formValues}
          handleFieldChange={handleFieldChange}
          width="w-[8.0625rem]"
          dropdownBtn={
            <div className=" base:w-4 w-[0.6rem] base:pl-2 pl-1 py-1 ml-2 border-l-[0.5px] border-black_300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.6rem"
                height="5"
                viewBox="0 0 7 5"
                fill="none">
                <path
                  d="M0.807959 0.03125L3.28235 2.50564L5.75675 0.03125L6.51685 0.796749L3.28235 4.03125L0.0478516 0.796749L0.807959 0.03125Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          }
        />
      </div>

      {/* fiat trading */}
      <div
        className={` ${
          formValues.tradeType?.id == "fiat"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } top-0 relative transition-opacity duration-500`}>
       
        {/* select currenies to convert from and to */}
        <div className="flex-center gap-6 base:mt-16 mt-14">
          
          {/* currency from dropdown */}
          <Dropdown
            options={currencyFiat}
            placeholder="From"
            varient={`fiat-dropdown ${errors.currencyFrom ? "error" : ""}`}
            inputId="currencyFrom"
            formValues={formValues}
            handleFieldChange={handleFieldChange}
            dropdownBtn={
              <svg
                className="base:w-4 w-[0.75rem] base:ml-4 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                width="0.875rem"
                height="9"
                viewBox="0 0 7 5"
                fill="none">
                <path
                  d="M0.807959 0.03125L3.28235 2.50564L5.75675 0.03125L6.51685 0.796749L3.28235 4.03125L0.0478516 0.796749L0.807959 0.03125Z"
                  fill="currentColor"
                />
              </svg>
            }
            ref={(el) => (refs.current.currencyFrom = el)}
          />

          {/* arrow svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            className="relative w-4 -top-4"
            viewBox="0 0 16 15"
            fill="none">
            <path
              d="M8.64637 13.4062L14.7714 7.40625L8.64637 1.40625M0.771362 7.40625H14.7714H0.771362Z"
              stroke="#B0B0B0"
              stroke-width="1.38776"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {/* currency to dropdown */}
          <Dropdown
            options={currencyFiat}
            inputId="currencyTo"
            placeholder="To"
            varient={`fiat-dropdown ${errors.currencyTo ? "error" : ""}`}
            formValues={formValues}
            handleFieldChange={handleFieldChange}
            dropdownBtn={
              <svg
                className="base:w-4 w-[0.75rem] base:ml-4 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                width="0.875rem"
                height="9"
                viewBox="0 0 7 5"
                fill="none">
                <path
                  d="M0.807959 0.03125L3.28235 2.50564L5.75675 0.03125L6.51685 0.796749L3.28235 4.03125L0.0478516 0.796749L0.807959 0.03125Z"
                  fill="currentColor"
                />
              </svg>
            }
            ref={(el) => (refs.current.currencyTo = el)}
          />
        </div>

        {/* Chose where to fund transaction from */}
        <div className="relative mt-[4.5rem] base:mt-[5.5rem] grid">
          <Dropdown
            options={wallets}
            varient="pay-with"
            label="I want to pay with"
            marginTop="mt-4"
            inputId="wallet"
            formValues={formValues}
            handleFieldChange={handleFieldChange}
            ref={(el) => (refs.current.wallet = el)}
          />
          <div className=" flex items-center gap-2 mt-4 relative -top-8">
            {wallets.slice(0, 6).map((wallet) => (
              <div
              onClick={() => handleFieldChange("wallet", { value: wallet.value })}
                key={wallet.id}
                className="icon">
                <Image
                  src={wallet.imgUrl}
                  alt={wallet.id}
                  width={100}
                  height={50}
                  className="idle absolute base:w-[3rem] w-[2.2rem] h-[1rem] cursor-pointer"
                />
                <Image
                  src={wallet.imgHoverUrl}
                  alt={wallet.id}
                  width={100}
                  height={50}
                  className="hover base:w-[3rem] w-[2.2rem] h-[1rem] cursor-pointer"
                />
              </div>
            ))}
            <span className="whitespace-nowrap cursor-pointer text-[0.8rem] text-black_300 hover:text-white hover:underline transition-all">
              + 200 more
            </span>
          </div>
          <p className={`absolute base:top-[1.4rem] top-[1.3rem] text-[#fd5265] transition-all base:text-s text-xs mt-2 ${errors.wallet ? "opacity-100" : "opacity-0"}`}>{errors.wallet}</p>
        </div>

        {/* amount to convert */}
        <div className="relative">
          <div
            ref={(el) => (refs.current.amount = el)}
            className={` pay-with relative ${
              formValues.amount ? "base:mt-16 mt-14" : "base:mt-12 mt-10"
            } transition-all cursor-pointer flex justify-between items-center`}>
            
            <label
              htmlFor="amount"
              className={` absolute pointer-events-none ${
                formValues.amount
                  ? "-top-[4rem] pt-8 left-0 base:text-base text-sm text-black_200"
                  : "left-[1.6rem] top-5 base:text-[1.125rem] text-sm text-black_300"
              } transition-all duration-300 `}>
              I want to spend
            </label>
            <input
              type="text"
              id="amount"
              value={formValues.amount}
              onChange={handleInputChange}
              className="input py-[0.15rem] text-black_100 w-[70%]"
            />
            <span className="text-[0.75rem] mr-4 font-[Supreme-Bold]">
              {formValues.currencyFrom ? formValues.currencyFrom.value : "--"}
            </span>
          </div>
          <span className=" relative -top-6 text-black_200 text-[0.75rem]">
            Minimium: <span className="mr-[0.15rem]">{formValues.currencyFrom ? formValues.currencyFrom.min : "--"}</span>
            {formValues.currencyFrom ? formValues.currencyFrom.value : "--"}
          </span>
          <p className={`absolute base:top-[1.35rem] top-[1.2rem] text-[#fd5265] transition-all base:text-s text-xs mt-2 ${errors.amount ? "opacity-100" : "opacity-0"}`}>{errors.amount}</p>
        </div>

        {/* conversion chanel */}
        <div className=" base:mt-14 mt-12 relative grid">
          <div className="conversion-popup">
            <span className="conversion-alert text-black_50 bg-black_400 py-2 px-4 flex items-center gap-2 -ml-4 base:text-[0.8rem] text-s z-[1] box-shadow absolute -top-20 w-fit">
              <img src="/assets/svgs/info.svg" alt="" className="w-[0.75rem]" />
              You’ll be buying and subsequently selling this to convert your
              fiat
            </span>
            <span className=" cursor-pointer w-fit flex items-center gap-2 text-black_200 hover:text-black_100 relative -top-10 base:text-base text-sm">
              Conversion channel{" "}
              <img src="/assets/svgs/info.svg" alt="" className="w-[0.75rem]" />
            </span>
          </div>
          <Dropdown
            options={currencyCrypto}
            varient="pay-with"
            placeholder={currencyCrypto[0].value}
            inputId="conversionChannel"
            formValues={formValues}
            handleFieldChange={handleFieldChange}
            ref={(el) => (refs.current.conversionChannel = el)}
            dropdownBtn={
              <div className="base:w-4 w-[0.65rem] base:py-[0.65rem] py-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.875rem"
                  height="9"
                  viewBox="0 0 7 5"
                  fill="none">
                  <path
                    d="M0.807959 0.03125L3.28235 2.50564L5.75675 0.03125L6.51685 0.796749L3.28235 4.03125L0.0478516 0.796749L0.807959 0.03125Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            }
          />
          <span className=" relative base:-top-6 -top-5 text-black_200 text-[0.8rem]">
            1 USDT = 1.00 USD
          </span>
        <p className={`absolute base:top-[2.7rem] top-[2.35rem] text-[#fd5265] transition-all base:text-s text-xs mt-2 ${errors.conversionChannel ? "opacity-100" : "opacity-0"}`}>{errors.conversionChannel}</p>
        </div>
      </div>

      {/* crypto trading */}
      <div
        className={` ${
          formValues.tradeType?.id == "crypto"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } top-14 absolute transition-opacity duration-500`}
        style={{ width: "calc(100% - var(--space))" }}>
        
        {/* buy or sell */}
        <div className="flex-center">
          <div className="base:text-[1.5rem] text-[1.125rem] w-fit flex-center base:mt-10 mt-6 font-[Coolvetica]">
            <div
              onClick={() => setTransaction("buy")}
              className={`${
                transaction == "buy"
                  ? "text-white"
                  : "text-black_300 hover:text-white"
              } pr-6 border-r border-dashed border-black_400`}>
              <div className=" flex items-center flex-col relative cursor-pointer">
                <span className="mb-2">Buy</span>{" "}
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
                <span className="mb-2">Sell</span>{" "}
                <div
                  className={`${
                    transaction == "sell" ? "opacity-100" : "opacity-0"
                  } selected-line`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* crypto currency to trade */}
        <div className="base:mt-[6.8rem] mt-[5.3rem] relative grid">
          <Dropdown
            options={currencyCrypto}
            varient="pay-with"
            placeholder={currencyCrypto[0].value}
            inputId="cryptoCurrency"
            formValues={formValues}
            handleFieldChange={handleFieldChange}
            ref={(el) => (refs.current.cryptoCurrency = el)}
            dropdownBtn={
              <div className="base:w-4 w-[0.65rem] py-[0.65rem] mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.875rem"
                  height="9"
                  viewBox="0 0 7 5"
                  fill="none">
                  <path
                    d="M0.807959 0.03125L3.28235 2.50564L5.75675 0.03125L6.51685 0.796749L3.28235 4.03125L0.0478516 0.796749L0.807959 0.03125Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            }
          />
          <span className=" relative -top-5 text-black_200 base:text-[0.8rem] text-s">
            1 USDT = 1.00 USD
          </span>

        <p className={`absolute top-[1.3rem] text-[#fd5265] transition-all base:text-s text-xs mt-2 ${errors.cryptoCurrency ? "opacity-100" : "opacity-0"}`}>{errors.cryptoCurrency}</p>
        </div>

        {/* Chose where to fund transaction from */}
        <div className="base:mt-14 mt-[3rem] h-fit grid">
          <Dropdown
            options={wallets}
            varient="pay-with"
            label="I want to pay with"
            marginTop="mt-4"
            inputId="wallet"
            formValues={formValues}
            handleFieldChange={handleFieldChange}
            ref={(el) => (refs.current.wallet = el)}
          />
          <div className="flex items-center gap-2 mt-4 relative base:-top-8 -top-9">
            {wallets.slice(0, 6).map((wallet) => (
              <div
              onClick={() => handleFieldChange("wallet", { value: wallet.value })}
                key={wallet.id}
                className="icon">
                <Image
                  src={wallet.imgUrl}
                  alt={wallet.id}
                  width={100}
                  height={50}
                  className="idle absolute base:w-[3rem] h-[1rem] w-[2.2rem] cursor-pointer"
                />
                <Image
                  src={wallet.imgHoverUrl}
                  alt={wallet.id}
                  width={100}
                  height={50}
                  className="hover base:w-[3rem] h-[1rem] w-[2.2rem] cursor-pointer"
                />
              </div>
            ))}
            <span className="whitespace-nowrap cursor-pointer text-[0.8rem] text-black_300 hover:text-white hover:underline transition-all">
              + 200 more
            </span>
          <p className={`absolute base:-top-[1.48rem] -top-[1.35rem] text-[#fd5265] transition-all base:text-s text-xs mt-2 ${errors.wallet ? "opacity-100" : "opacity-0"}`}>{errors.wallet}</p>
          </div>
        </div>

        {/* amount to convert */}
        <div className="relative">
          <div
            ref={(el) => (refs.current.amount = el)}
            className={` pay-with relative ${
              formValues.amount ? "base:mt-16 mt-14" : "base:mt-12 mt-9"
            } transition-all cursor-pointer flex justify-between items-center`}>
            <label
              htmlFor="amount"
              className={` absolute pointer-events-none ${
                formValues.amount
                  ? "-top-[4rem] pt-8 left-0 base:text-base text-sm text-black_200"
                  : "left-[1.6rem] top-5 base:text-[1.125rem] text-sm text-black_300"
              } transition-all duration-300 `}>
              I want to spend
            </label>
            <input
              type="text"
              id="amount"
              value={formValues.amount}
              onChange={handleInputChange}
              className="input py-[0.15rem] text-black_100 w-[70%]"
            />
            <span className="text-[0.75rem] mr-4 font-[Supreme-Bold] uppercase">{formValues.cryptoCurrency ? formValues.cryptoCurrency.id : "--"}</span>
          </div>
          <span className=" relative -top-6 text-black_200 text-[0.75rem]">
            Minimium: <span className="mr-[0.15rem]">{formValues.cryptoCurrency ? formValues.cryptoCurrency.min : "--"}</span> <span className="uppercase">{formValues.cryptoCurrency ? formValues.cryptoCurrency.id : "--"}</span>
          </span>
          <p className={`absolute base:top-[1.38rem] top-[1.2rem] text-[#fd5265] transition-all base:text-s text-xs mt-2 ${errors.amount ? "opacity-100" : "opacity-0"}`}>{errors.amount}</p>
        </div>
        </div>

      {/* prefered merchant */}
      <div
        className={` ${
          formValues.tradeType?.id == "fiat" ? "base:mt-6 mt-3" : "base:mt-0 -mt-[2rem]"
        } cursor-pointer base:text-[0.9375rem] text-s`}>
        +{" "}
        <span className=" text-black_100 underline hover:text-white transition-all">
          Add preferred merchant
        </span>
      </div>

      {/* button */}
      <div className="base:mt-[4.5rem] mt-[3.5rem] " onClick={() => {console.log('clicked')}}>
        <Button type="submit" text="Find offers" variant="btn-primary" />
      </div>
    </form>
  );
};
