"use client";
import { useState } from "react";

const Timer = () => {
  const [firstValue, setFirstValue] = useState("1");
  const [secondValue, setSecondValue] = useState("1");
  const [thirdValue, setThirdValue] = useState("1");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="flex flex-row justify-center items-center w-[80%] min-h-[80px] max-h-[80px] mt-[20px] px-3 text-sm ">
      <div className="flex w-[50px] h-[60px] items-center justify-center">
        <select
          value={firstValue}
          onChange={handleChange(setFirstValue)}
          className="w-full h-full text-[30px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <span className="text-lg text-slate-400">:</span>
      <div className="flex w-[50px] h-[60px] items-center justify-center">
        <select
          value={secondValue}
          onChange={handleChange(setSecondValue)}
          className="w-full h-full text-[30px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm"
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <span className="text-lg text-slate-400">:</span>
      <div className="flex w-[50px] h-[60px] items-center justify-center">
        <select
          value={thirdValue}
          onChange={handleChange(setThirdValue)}
          className="w-full h-full text-[30px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm"
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Timer;
