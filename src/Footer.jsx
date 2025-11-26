import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 dark:bg-gray-800 p-4 text-white text-center">
      &copy; {new Date().getFullYear()} React Tailwind App
    </footer>
  );
};

export default Footer;
