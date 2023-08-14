import React, { useState } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { FaEnvelope, FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby';

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <nav className="navbar py-6 relative flex items-center w-full justify-between bg-black">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex w-full items-center">
          <ul className='navbar-nav flex text-purple'>
            <li className='nav-item'>
            <Link
                to="/"
                className='text-purple'
                activeClassName="text-pink"
              >
                home
              </Link>
            </li>
            <li className='nav-item ml-5'>
            <Link
                to="/about"
                activeClassName="text-pink"
              >
                about
              </Link>
            </li>
            <li className='nav-item ml-5'>
            <Link
                to="/portfolio"
                activeClassName="text-pink"
              >
                portfolio
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav flex ml-auto items-center text-purple">
            <li className="nav-item mr-5">
              <OutboundLink
                href="mailto:katerinadungog@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </OutboundLink>
            </li>
            <li className="nav-item mr-5">
              <OutboundLink
                href="https://github.com/vvvaporwaves"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </OutboundLink>
            </li>
            <li className="nav-item mr-5">
              <OutboundLink
                href="https://codepen.io/vvvaporwaves/pens/popular"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCodepen />
              </OutboundLink>
            </li>
            <li className="nav-item">
              <OutboundLink
                href="https://linkedin.com/in/vvvaporwaves/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </OutboundLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
