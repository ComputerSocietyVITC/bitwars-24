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
    <div className="w-4/5 md:w-full max-w-screen-lg h-full bg-gradient-to-r from-[#14357A] via-[#1088AC] to-[#1083A9] rounded-3xl skew-x-[-25deg] md:skew-x-[-25deg] sm:skew-x-[-15deg] mx-auto partial-border-gradient">
      <div className="h-fit w-full timer-bg rounded-xl text-white sm:text-4xl md:text-4xl text-8xl inline-block text-center p-4 md:p-8">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 justify-around">
          <div className="w-full mb-4">
            <div className="skew-x-[25deg]">
              <p id="day" className="-mb-2 font-extrabold">
                {days < 10 ? "0" + days : days}
              </p>
              <span className="text-lg md:text-3xl font-thin">DAYS</span>
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="skew-x-[25deg]">
              <p id="hour" className="-mb-2 font-extrabold">
                {hours < 10 ? "0" + hours : hours}
              </p>
              <span className="text-lg md:text-3xl font-thin">HOURS</span>
            </div>
          </div>
          <div className="w-full mb-4 =">
            <div className="skew-x-[25deg]">
              <p id="minute" className="-mb-2 font-extrabold">
                {minutes < 10 ? "0" + minutes : minutes}
              </p>
              <span className="text-lg md:text-3xl font-thin">MINUTES</span>
            </div>
          </div>
          <div className="w-full">
            <div className="skew-x-[25deg]">
              <p id="second" className="-mb-2 font-extrabold">
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
