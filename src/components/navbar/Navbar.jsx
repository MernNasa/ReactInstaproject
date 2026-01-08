import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../customhooks/useTheme";
import { useAuth } from "../../customhooks/useAuth";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const {isLoggedIn,activeUser}=useAuth()
  console.log(isLoggedIn)
  const handleInput = (e) => {
    const { value } = e.target;
    toggleTheme();
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">
          <Link to="/">MyApp</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium ">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Features</li>
          <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          {
            !isLoggedIn ? <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
            <Link to="/login">Login</Link>
          </button> : <div className="w-[50px] h-[50px] rounded-full bg-black dark:bg-gray-400 flex items-center justify-center text-white text-2xl">{activeUser?.fullname?.slice(0,1)}</div>
          }

          <div className="relative inline-block">
            <select
              value={theme}
              onChange={handleInput}
              className="appearance-none px-4 py-2 pr-10 rounded-xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl text-gray-900 dark:text-gray-100 border border-white/30 dark:border-gray-700 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300">
              <option value="light">☀️ Light</option>
              <option value="dark">🌙 Dark</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
