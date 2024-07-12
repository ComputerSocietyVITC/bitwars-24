"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

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
    <div className="max-w-screen-lg h-full bg-gradient-to-r from-[#14357A] via-[#1088AC] to-[#1083A9] rounded-3xl skew-x-[-25deg] mx-auto">
      <div className="h-fit w-full bg-gradient-to-r from-[#0D1732] via-[#0D1732] to-[#0D1732] rounded-3xl text-white text-8xl inline-block text-center p-8">
        <div className="flex justify-around">
          <div className="w-1/4 float-left">
            <div className="skew-x-[25deg]">
              <p id="day" className="-mb-10 font-extrabold">
                {days < 10 ? "0" + days : days}
              </p>
              <span className="text-3xl font-thin">DAYS</span>
            </div>
          </div>
          <div className="w-1/4 float-left">
            <div className="skew-x-[25deg]">
              <p id="hour" className="-mb-10 font-extrabold">
                {hours < 10 ? "0" + hours : hours}
              </p>
              <span className="text-3xl font-thin">HOURS</span>
            </div>
          </div>
          <div className="w-1/4 float-left">
            <div className="skew-x-[25deg]">
              <p id="minute" className="-mb-10 font-extrabold">
                {minutes < 10 ? "0" + minutes : minutes}
              </p>
              <span className="text-3xl font-thin">MINUTES</span>
            </div>
          </div>
          <div className="w-1/4 float-left">
            <div className="skew-x-[25deg]">
              <p id="second" className="-mb-10 font-extrabold">
                {seconds < 10 ? "0" + seconds : seconds}
              </p>
              <span className="text-3xl font-thin">SECONDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
