import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 transition-colors duration-200">
      <main>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
