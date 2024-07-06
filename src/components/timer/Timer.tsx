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
    <div className="w-full bg-gradient-to-r from-[#0D1732] via-[#0D1732] to-[#0D1732] rounded-3xl skew-x-[-25deg] text-white text-8xl inline-block mt-[-20px] text-center p-8">
      <div className="w-1/4 float-left">
        <div className="skew-x-[25deg] font-extrabold">
          <p id="day">{days < 10 ? "0" + days : days}</p>
          <span className="text-3xl font-light">DAYS</span>
        </div>
      </div>
      <div className="w-1/4 float-left">
        <div className="skew-x-[25deg] font-extrabold">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
          <span className="text-3xl font-light">HOURS</span>
        </div>
      </div>
      <div className="w-1/4 float-left">
        <div className="skew-x-[25deg] font-extrabold">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text-3xl font-light">MINUTES</span>
        </div>
      </div>
      <div className="w-1/4 float-left">
        <div className="skew-x-[25deg] font-extrabold">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text-3xl font-light">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
