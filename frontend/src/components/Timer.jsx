"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const Timer = () => {
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (timerSeconds > 1) {
          setTimerSeconds((prev) => prev - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes((prev) => prev - 1);
          setTimerSeconds(59);
        } else if (timerHours > 0) {
          setTimerHours((prev) => prev - 1);
          setTimerMinutes(59);
          setTimerSeconds(59);
        } else {
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerHours, timerMinutes, timerSeconds]);

  const startTimer = () => {
    if (timerHours || timerMinutes || timerSeconds) {
      setIsRunning(true);
      setHasStarted(true);
    } else {
      toast.warning("Please set a valid time duration!");
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setHasStarted(false);
    setTimerHours(0);
    setTimerMinutes(0);
    setTimerSeconds(0);
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center w-[80%] mt-[25px] mb-[20px]">
        <div className="flex w-[77px] h-[90px] items-center justify-center">
          <select
            value={timerHours}
            onChange={(e) => setTimerHours(e.target.value)}
            className="w-full outline-none h-full text-[44px] text-[#000000] font-[400px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm"
          >
            <option value="" disabled hidden>
              00
            </option>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <span className="text-[44px] text-[#B4B4B8] ml-1">:</span>
        <div className=" flex w-[77px] h-[90px] items-center justify-center">
          <select
            value={timerMinutes}
            onChange={(e) => setTimerMinutes(e.target.value)}
            className="w-full outline-none h-full text-[44px] text-[#000000] font-[400px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm"
          >
            <option value="" disabled hidden>
              00
            </option>
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <span className="text-[44px] text-[#B4B4B8] ml-1">:</span>
        <div className="flex w-[77px] h-[90px] items-center justify-center">
          <select
            value={timerSeconds}
            onChange={(e) => setTimerSeconds(e.target.value)}
            className="w-full outline-none h-full text-[44px] text-[#000000] font-[400px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm"
          >
            <option value="" disabled hidden>
              00
            </option>
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* buttons for thimer control*/}
      <div className="flex flex-row items-center justify-evenly w-[80%] h-[40px] mt-[25px]">
        <button
          type="button"
          onClick={resetTimer}
          className="underline font-[400px] text-[18px] text-[#000000] hover:text-gray-600"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={startTimer}
          className="text-[18px]font-[400px] text-[#FFFFFF] border text-center border-green-500 hover:bg-green-700 bg-[#1E8826] rounded-sm w-[120px] lg:w-[164px] h-full"
        >
          {hasStarted && !isRunning ? "Resume" : "Start"}
        </button>
        <button
          type="button"
          onClick={stopTimer}
          className="underline font-[400px] text-[18px] text-[#000000] hover:text-gray-600"
        >
          Stop
        </button>
      </div>
    </>
  );
};
