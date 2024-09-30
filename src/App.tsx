import React from "react";
import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Add more links to other pages as needed */}
          </ul>
        </nav>
      </header>
      <main>
        {/* This is where the routed content will be rendered */}
        <Outlet />
      </main>
    </div>
  );
};

export default App;
