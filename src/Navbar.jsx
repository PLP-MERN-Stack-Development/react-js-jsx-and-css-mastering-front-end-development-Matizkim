import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">React App</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
