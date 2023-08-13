import React from 'react';

const Footer = () => {
  return (
    <footer className="navbar py-6 relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center w-full">
          <span className="text-sm sm:text-center text-cyan dark:text-medium-cyan">
            &copy; {new Date().getFullYear().toString()} vvvaporwaves. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
