import React, { useEffect, useRef } from 'react';
import type { HeadFC } from 'gatsby';

import SEO from '../components/seo';

const Home = () => {
  return (
    <div className="container m-auto text-center flex content-center h-screen">
      <div className="grid w-full aspect-square place-self-center">
        <div className="round-border rb-1">
          <div>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 276">
              <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
            </svg>
          </div>
          <div className="round-border rb-2">
            <a href="./intro.html" title="about">
            </a>
            <div className="round-border rb-3">
              <div>
              </div>
              <div className="round-border rb-4 hidden md:block">
                <a href="./portfolio.html" title="portfolio">
                </a>
                <div className="round-border rb-5 hidden lg:block">
                  <div>
                  </div>
                  <div className="round-border last-rb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="body">vaporwaves</h1>
      </div>
      </div>
  );
};

export default Home;
export const Head: HeadFC = () => <SEO title="home" />;