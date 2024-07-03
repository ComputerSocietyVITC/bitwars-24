"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Timer = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "September, 5, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60) % 24)));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white inline-block mt-[25px] p-10 text-center width-[400px]">
      <div className="w-1/4 float-left">
        <div className="border-r-1 border-r-solid border-r-[rgba(255, 255, 255, 0.2)] p-10 font-medium">
          <p id="day">{days < 10 ? "0" + days : days}</p>
          <span className="font-14px]">Days</span>
        </div>
      </div>
      <div className="w-1/4 float-left">
        <div className="border-r-1 border-r-solid border-r-[rgba(255, 255, 255, 0.2)] p-10 font-medium">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
          <span className="font-[14px]">Hours</span>
        </div>
      </div>
      <div className="w-1/4 float-left">
        <div className="border-r-1 border-r-solid border-r-[rgba(255, 255, 255, 0.2)] p-10 font-medium">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="font-[14px]">Minutes</span>
        </div>
      </div>
      <div className="w-1/4 float-left">
        <div className="border-r-1 border-r-solid border-r-[rgba(255, 255, 255, 0.2)] p-10 font-medium">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="font-[14px]">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
