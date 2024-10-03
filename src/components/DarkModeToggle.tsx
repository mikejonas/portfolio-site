import React, { useState, useEffect, useRef, useCallback } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
    setClickCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let timeoutId: number;
    let animationFrameId: number;
    let isRunning = false;

    const runAway = (e: MouseEvent) => {
      if (isRunning) return;
      isRunning = true;

      const buttonRect = button.getBoundingClientRect();
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = 50;
      const targetX = centerX - Math.cos(angle) * distance;
      const targetY = centerY - Math.sin(angle) * distance;

      let progress = 0;
      let rotationAngle = 0;
      const animate = () => {
        progress += 0.09;
        rotationAngle += 32.4;
        const easeProgress = Math.sin((progress * Math.PI) / 2);
        const currentX = centerX + (targetX - centerX) * easeProgress;
        const currentY = centerY + (targetY - centerY) * easeProgress;

        button.style.transform = `translate(${currentX - centerX}px, ${
          currentY - centerY
        }px) rotate(${rotationAngle}deg)`;

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          isRunning = false;
        }
      };

      animate();

      timeoutId = window.setTimeout(() => {
        button.style.transform = "rotate(0deg)";
        button.style.transition = "transform 0.3s ease-out";
        setTimeout(() => {
          button.style.transform = "";
          button.style.transition = "";
        }, 300);
      }, 1000);
    };

    button.addEventListener("mouseover", runAway);

    return () => {
      button.removeEventListener("mouseover", runAway);
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={toggleDarkMode}
      className="focus:outline-none focus:ring-0 relative select-none"
      aria-label="Toggle Dark Mode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${
          isDarkMode ? "text-yellow-500" : "text-gray-800 dark:text-gray-200"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464"
        />
      </svg>
      {clickCount > 0 && (
        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold pointer-events-none">
          {clickCount}
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;
