"use client";
import React, { useState, useEffect } from "react";
import "../../app/globals.css";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "September, 5, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-1/2 md:w-full max-w-screen-lg h-full bg-gradient-to-r from-[#14357A] via-[#1088AC] to-[#1083A9] rounded-3xl skew-x-[-25deg] mx-auto mt-[-30px] partial-border-gradient">
      <div className="h-fit w-full timer-bg rounded-xl text-white text-4xl md:text-8xl inline-block text-center p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="skew-x-[25deg]">
              <p id="day" className="-mb-2 md:-mb-10 font-extrabold">
                {days < 10 ? "0" + days : days}
              </p>
              <span className="text-lg md:text-3xl font-thin">DAYS</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="skew-x-[25deg]">
              <p id="hour" className="-mb-2 md:-mb-10 font-extrabold">
                {hours < 10 ? "0" + hours : hours}
              </p>
              <span className="text-lg md:text-3xl font-thin">HOURS</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="skew-x-[25deg]">
              <p id="minute" className="-mb-2 md:-mb-10 font-extrabold">
                {minutes < 10 ? "0" + minutes : minutes}
              </p>
              <span className="text-lg md:text-3xl font-thin">MINUTES</span>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="skew-x-[25deg]">
              <p id="second" className="-mb-2 md:-mb-10 font-extrabold">
                {seconds < 10 ? "0" + seconds : seconds}
              </p>
              <span className="text-lg md:text-3xl font-thin">SECONDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
