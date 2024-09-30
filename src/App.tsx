import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 transition-colors duration-200">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
