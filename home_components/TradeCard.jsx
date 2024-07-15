"use client";
import Button from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { trades, currencyCrypto, currencyFiat, wallets, logos1 } from "@/constant";
import Image from "next/image";
import { useState } from "react";

export const TradeCard = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [currencyFrom, setCurrencyFrom] = useState({
    currency: "--",
    min: "--",
  });
  const [amount, setAmount] = useState("");
  const [selectedTrade, setSelectedTrade] = useState("fiat");
  const [transaction, setTransaction] = useState("buy");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    // Allow only numbers and empty string (for clearing the input)
    if (newValue === "" || /^[0-9]*$/.test(newValue)) {
      setAmount(newValue);
    }
  };

  return (
    <section className="relative base:w-[35rem] w-full py-6 base:px-8 px-4 bg-blur border-[0.5px] border-black_300 rounded-[0.375rem]">
      {/* currency conversion */}
      <div className="relative w-full flex justify-end">
        <Dropdown
          options={trades}
          inputId="tradeType"
          placeholder={trades[0].value}
          selectedTrade={selectedTrade}
          setSelectedTrade={setSelectedTrade}
          varient="trade"
          width="w-[8.0625rem]"
          dropdownBtn={
            <div className="w-4 pl-2 py-1 ml-2 border-l-[0.5px] border-black_300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
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
          selectedTrade == "fiat"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } top-0 relative transition-opacity duration-500`}>
        {/* select currenies to convert from and to */}
        <div className="flex-center gap-6 base:mt-16 mt-14">
          <Dropdown
            options={currencyFiat}
            placeholder="From"
            varient="fiat-dropdown"
            inputId="currencyFrom"
            dropdownBtn={
              <div className="w-4 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
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
            selectedCurrency={currencyFrom}
            setSelectedCurrency={setCurrencyFrom}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            className="relative -top-4"
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
          <Dropdown
            options={currencyFiat}
            inputId="currencyTo"
            placeholder="To"
            varient="fiat-dropdown"
            dropdownBtn={
              <div className="w-4 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
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
        </div>

        {/* Chose where to fund transaction from */}
        <div className=" mt-[4.5rem] base:mt-[5.5rem] grid">
          <Dropdown
            options={wallets}
            varient="pay-with"
            label="I want to pay with"
            marginTop="mt-4"
            inputId="wallet"
            selectedWallet={selectedWallet}
          />
          <div className=" flex items-center gap-2 mt-4 relative -top-8">
            {wallets.slice(0,6).map((wallet) => (
              <div
                onClick={() => setSelectedWallet(wallet.value)}
                key={wallet.id} className="icon">
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
            <span className=" cursor-pointer text-[0.8rem] text-black_300 hover:text-white hover:underline transition-all">
              + 200 more
            </span>
          </div>
        </div>

        {/* amount to convert */}
        <div>
          <div
            className={` pay-with relative ${
              amount ? "base:mt-16 mt-12" : "base:mt-12 mt-8"
            } transition-all cursor-pointer flex justify-between items-center`}>
            <label
              htmlFor="amount"
              className={` absolute pointer-events-none ${
                amount
                  ? "-top-[4rem] pt-8 left-0 base:text-base text-sm text-black_200"
                  : "left-[1.6rem] top-5 base:text-[1.125rem] text-sm text-black_300"
              } transition-all duration-300 `}>
              I want to spend
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleInputChange}
              className="input py-[0.15rem] text-black_100 w-[70%]"
            />
            <span className="text-[0.75rem] mr-4 font-[Supreme-Bold]">
              {currencyFrom.currency}
            </span>
          </div>
          <span className=" relative -top-6 text-black_200 text-[0.75rem]">
            Minimium: <span className="mr-[0.15rem]">{currencyFrom.min}</span>
            {currencyFrom.currency}
          </span>
        </div>

        {/* conversion chanel */}
        <div className="base:mt-14 mt-12 relative grid">
          <div className="conversion-popup">
            <span className="conversion-alert text-black_50 bg-black_400 py-2 px-4 flex items-center gap-2 -ml-4 base:text-[0.8rem] text-s z-[1] box-shadow absolute -top-20 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none">
                <path
                  d="M6 12.2188C9.3 12.2188 12 9.51875 12 6.21875C12 2.91875 9.3 0.21875 6 0.21875C2.7 0.21875 0 2.91875 0 6.21875C0 9.51875 2.7 12.2188 6 12.2188ZM6.18 3.39275C6.3 3.28475 6.444 3.21875 6.6 3.21875C6.762 3.21875 6.9 3.28475 7.026 3.39275C7.14 3.51875 7.2 3.66275 7.2 3.81875C7.2 3.98075 7.14 4.11875 7.026 4.24475C6.9 4.35875 6.762 4.41875 6.6 4.41875C6.444 4.41875 6.3 4.35875 6.18 4.24475C6.066 4.11875 6 3.98075 6 3.81875C6 3.66275 6.066 3.51875 6.18 3.39275ZM4.68 6.20075C4.68 6.20075 5.982 5.16875 6.456 5.12675C6.9 5.09075 6.81 5.60075 6.768 5.86475L6.762 5.90075C6.678 6.21875 6.576 6.60275 6.474 6.96875C6.246 7.80275 6.024 8.61875 6.078 8.76875C6.138 8.97275 6.51 8.71475 6.78 8.53475C6.816 8.51075 6.846 8.48675 6.876 8.46875C6.876 8.46875 6.924 8.42075 6.972 8.48675C6.984 8.50475 6.996 8.52275 7.008 8.53475C7.062 8.61875 7.092 8.64875 7.02 8.69675L6.996 8.70875C6.864 8.79875 6.3 9.19475 6.072 9.33875C5.826 9.50075 4.884 10.0408 5.028 8.99075C5.154 8.25275 5.322 7.61675 5.454 7.11875C5.7 6.21875 5.808 5.81075 5.256 6.16475C5.034 6.29675 4.902 6.38075 4.824 6.43475C4.758 6.48275 4.752 6.48275 4.71 6.40475L4.692 6.36875L4.662 6.32075C4.62 6.26075 4.62 6.25475 4.68 6.20075Z"
                  fill="currentColor"
                />
              </svg>
              You’ll be buying and subsequently selling this to convert your
              fiat
            </span>
            <span className=" cursor-pointer w-fit flex items-center gap-2 text-black_200 hover:text-black_100 relative -top-10 base:text-base text-sm">
              Conversion channel{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none">
                <path
                  d="M6 12.2188C9.3 12.2188 12 9.51875 12 6.21875C12 2.91875 9.3 0.21875 6 0.21875C2.7 0.21875 0 2.91875 0 6.21875C0 9.51875 2.7 12.2188 6 12.2188ZM6.18 3.39275C6.3 3.28475 6.444 3.21875 6.6 3.21875C6.762 3.21875 6.9 3.28475 7.026 3.39275C7.14 3.51875 7.2 3.66275 7.2 3.81875C7.2 3.98075 7.14 4.11875 7.026 4.24475C6.9 4.35875 6.762 4.41875 6.6 4.41875C6.444 4.41875 6.3 4.35875 6.18 4.24475C6.066 4.11875 6 3.98075 6 3.81875C6 3.66275 6.066 3.51875 6.18 3.39275ZM4.68 6.20075C4.68 6.20075 5.982 5.16875 6.456 5.12675C6.9 5.09075 6.81 5.60075 6.768 5.86475L6.762 5.90075C6.678 6.21875 6.576 6.60275 6.474 6.96875C6.246 7.80275 6.024 8.61875 6.078 8.76875C6.138 8.97275 6.51 8.71475 6.78 8.53475C6.816 8.51075 6.846 8.48675 6.876 8.46875C6.876 8.46875 6.924 8.42075 6.972 8.48675C6.984 8.50475 6.996 8.52275 7.008 8.53475C7.062 8.61875 7.092 8.64875 7.02 8.69675L6.996 8.70875C6.864 8.79875 6.3 9.19475 6.072 9.33875C5.826 9.50075 4.884 10.0408 5.028 8.99075C5.154 8.25275 5.322 7.61675 5.454 7.11875C5.7 6.21875 5.808 5.81075 5.256 6.16475C5.034 6.29675 4.902 6.38075 4.824 6.43475C4.758 6.48275 4.752 6.48275 4.71 6.40475L4.692 6.36875L4.662 6.32075C4.62 6.26075 4.62 6.25475 4.68 6.20075Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <Dropdown
            options={currencyCrypto}
            varient="pay-with"
            placeholder={currencyCrypto[0].value}
            inputId="conversion-channel"
            dropdownBtn={
              <div className="w-4 py-[0.65rem] mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
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
          <span className=" relative -top-6 text-black_200 text-[0.8rem]">
            1 USDT = 1.00 USD
          </span>
        </div>
      </div>

      {/* crypto trading */}
      <div
        className={` ${
          selectedTrade == "crypto"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } top-14 absolute transition-opacity duration-500`}
        style={{ width: "calc(100% - var(--space))" }}>

        {/* buy or sell */}
        <div className="flex-center">
        <div className="base:text-[1.5rem] text-[1.125rem] w-fit flex-center base:mt-10 mt-6 font-[Coolvetica]">
          <div
          onClick={() => setTransaction("buy")}
            className={`${transaction == "buy" ? "text-white" : "text-black_300 hover:text-white" } pr-6 border-r border-dashed border-black_400`}>
            <div className=" flex items-center flex-col relative cursor-pointer"><span className="mb-2">Buy</span> <div className={`${transaction == "buy" ? "opacity-100" : "opacity-0" } selected-line`}></div></div>
          </div>
          <div
          onClick={() => setTransaction("sell")}
            className={`${transaction == "sell" ? "text-white" : "text-black_300 hover:text-white" } flex items-center flex-col relative cursor-pointer pl-6 `}>
            <div className=" flex flex-col relative cursor-pointer"><span className="mb-2">Sell</span> <div className={`${transaction == "sell" ? "opacity-100" : "opacity-0" } selected-line`}></div></div>
          </div>
        </div>
        </div>

        {/* crypto currency to trade */}
        <div className="base:mt-[6.8rem] mt-[5.3rem] relative grid">
          <Dropdown
            options={currencyCrypto}
            varient="pay-with"
            placeholder={currencyCrypto[0].value}
            inputId="conversion-channel"
            dropdownBtn={
              <div className="w-4 py-[0.65rem] mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
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
          <span className=" relative -top-6 text-black_200 base:text-[0.8rem] text-s">
            1 USDT = 1.00 USD
          </span>
        </div>

        {/* Chose where to fund transaction from */}
        <div className="base:mt-14 mt-10 h-fit grid">
          <Dropdown
            options={wallets}
            varient="pay-with"
            label="I want to pay with"
            marginTop="mt-4"
            inputId="wallet"
            selectedWallet={selectedWallet}
          />
          <div className="flex items-center gap-2 mt-4 relative base:-top-8 -top-10">
          {wallets.slice(0,6).map((wallet) => (
              <div
                onClick={() => setSelectedWallet(wallet.value)}
                key={wallet.id}  className="icon">
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
            <span className=" cursor-pointer text-[0.8rem] text-black_300 hover:text-white hover:underline transition-all">
              + 200 more
            </span>
          </div>
        </div>

        {/* amount to convert */}
        <div>
          <div
            className={` pay-with relative ${
              amount ? "base:mt-16 mt-12" : "base:mt-12 mt-8"
            } transition-all cursor-pointer flex justify-between items-center`}>
            <label
              htmlFor="amount"
              className={` absolute pointer-events-none ${
                amount
                  ? "-top-[4rem] pt-8 left-0 base:text-base text-sm text-black_200"
                  : "left-[1.6rem] top-5 base:text-[1.125rem] text-sm text-black_300"
              } transition-all duration-300 `}>
              I want to spend
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleInputChange}
              className="input py-[0.15rem] text-black_100 w-[70%]"
            />
            <span className="text-[0.75rem] mr-4 font-[Supreme-Bold]">USD</span>
          </div>
          <span className=" relative -top-6 text-black_200 text-[0.75rem]">
            Minimium: <span className="mr-[0.15rem]">10</span> USD
          </span>
        </div>
      </div>

      {/* prefered merchant */}
      <div className={` ${selectedTrade == "fiat" ? "base:mt-6 mt-3" : "base:mt-0 -mt-[3rem]"} cursor-pointer base:text-[0.9375rem] text-s`}>
        +{" "}
        <span className=" text-black_100 underline hover:text-white transition-all">
          Add preferred merchant
        </span>
      </div>

      {/* button */}
      <div className="base:mt-[4.5rem] mt-[3.5rem]">
        <Button type="button" text="Find offers" variant="btn-primary" />
      </div>

    </section>
  );
};
