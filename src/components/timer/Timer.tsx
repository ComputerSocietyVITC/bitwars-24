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
    <div className="md:scale-[70%] w-4/5 h-full md:w-4/5 sm:w-full max-w-screen-lg rounded-3xl skew-x-[-25deg] md:skew-x-[-10deg] sm:skew-x-[-5deg] mx-auto partial-border-gradient">
      <div className="h-fit w-full bg-gradient-to-br from-[#100e17] via-[#0b1b3a] to-[#0d0b13] border-white/[0.2] rounded-xl text-white text-7xl text-center p-4 md:p-8">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 items-center place-content-center">
          <div className="w-full mt-4">
            <div className="skew-x-[25deg] sm:skew-x-[5deg] md:skew-x-[10deg] w-full">
              <p id="day" className=" font-extrabold sm:text-6xl">
                {days < 10 ? "0" + days : days}
              </p>
              <section className="text-3xl md:text-3xl font-thin py-4 sm:text-2xl">
                DAYS
              </section>
            </div>
          </div>
          <div className="w-full">
            <div className="skew-x-[25deg] sm:skew-x-[5deg] md:skew-x-[10deg]">
              <p id="hour" className=" font-extrabold sm:text-6xl">
                {hours < 10 ? "0" + hours : hours}
              </p>
              <section className="text-3xl md:text-3xl font-thin py-4 sm:text-2xl">
                HOURS
              </section>
            </div>
          </div>
          <div className="w-full">
            <div className="skew-x-[25deg] sm:skew-x-[5deg] md:skew-x-[10deg]">
              <p id="minute" className="font-extrabold sm:text-6xl">
                {minutes < 10 ? "0" + minutes : minutes}
              </p>
              <section className="text-3xl md:text-3xl font-thin py-4 sm:text-2xl">
                MINUTES
              </section>
            </div>
          </div>
          <div className="w-full">
            <div className="skew-x-[25deg] sm:skew-x-[5deg] md:skew-x-[10deg]">
              <p id="second" className="font-extrabold sm:text-6xl">
                {seconds < 10 ? "0" + seconds : seconds}
              </p>
              <section className="text-3xl md:text-3xl font-thin py-4 sm:text-2xl">
                SECONDS
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
