import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="focus:outline-none focus:ring-0"
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
    </button>
  );
};

export default DarkModeToggle;
