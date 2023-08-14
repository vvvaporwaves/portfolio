import React, { useEffect, useRef } from 'react';
import type { HeadFC } from 'gatsby';

import SEO from '../components/seo';

const Home = () => {
  return (
    <div className="container max-w-[1000px] m-auto text-center flex content-center h-screen">
      <div className="grid w-full aspect-square place-self-center">
        <div className="row-start-1 col-start-1 col-end-2 row-end-2 round-border relative z-40 rb-1">
          <div>
            <svg className="absolute top-[40%] -left-[5px] rotate-[80deg] scale-[300%] w-[25px]" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 276">
              <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
            </svg>
          </div>
          <div className="round-border relative rb-2">
            <a href="./intro.html" title="about">
              <svg className="absolute top-[40%] -left-[5px] rotate-[80deg] scale-[300%] w-[25px]" fill="#525AA8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 276">
                <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
              </svg>
            </a>
            <div className="round-border relative rb-3">
              <div>
                <svg className="absolute top-[40%] -left-[5px] rotate-[80deg] scale-[300%] w-[25px]" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 276">
                  <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                </svg>
              </div>
              <div className="round-border relative rb-4 hidden md:block">
                <a href="./portfolio.html" title="portfolio">
                  <svg className="absolute top-[40%] -left-[5px] rotate-[80deg] scale-[300%] w-[25px]" fill="#525AA8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 276">
                    <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                  </svg>
                </a>
                <div className="round-border rb-5 relative hidden lg:block">
                  <div>
                    <svg className="absolute top-[40%] -left-[5px] rotate-[80deg] scale-[300%] w-[25px]" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 276">
                      <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                    </svg>
                  </div>
                  <div className="round-border last-rb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="body col-start-1 col-end-2 z-5 relative row-start-1 row-end-2 place-self-center font-serif uppercase text-[clamp(32px,_3vw,_64px)] w-[35%] leading-[1.25em] break-all p-[2rem_1rem_0rem] text-pink">vaporwaves</h1>
      </div>
      </div>
  );
};

export default Home;
export const Head: HeadFC = () => <SEO title="home" />;