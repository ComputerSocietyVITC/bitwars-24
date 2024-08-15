"use client";
import { useEffect } from "react";
import styles from "./stars.module.css";

interface StarsProps {
  starCount?: number;
}

const Stars: React.FC<StarsProps> = ({ starCount = 50 }) => {
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");

    if (starsContainer) {
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = styles.star;

        const size = `${Math.random() * 2 + 1}px`;
        star.style.width = size;
        star.style.height = size;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}vh`;

        // Random animation duration between 20 and 40s
        star.style.animationDuration = `${Math.random() * 20 + 20}s`;

        star.style.animationDelay = "0s";
        starsContainer.appendChild(star);
      }
    }
  }, [starCount]);

  return <div id="stars-container" className={styles.stars}></div>;
};

export default Stars;
