import React, { useEffect, useRef } from 'react';
import { Link, type HeadFC } from 'gatsby';

import SEO from '../components/seo';

const Home = () => {
  return (
    <div className="container max-w-[1000px] m-auto text-center flex content-center">
      <div className="grid w-full aspect-square place-self-center">
        <div className="row-start-1 col-start-1 col-end-2 row-end-2 round-border relative z-40 rb-1">
          <div>
            <svg
              className="absolute top-[40%] -left-[8px] md:-left-[5px] rotate-[20deg] scale-[300%] w-[25px]"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 276 276"
            >
              <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
            </svg>
            <svg
              className="absolute top-[14%] md:top-[17%] right-[10%] rotate-[20deg] scale-[150%] w-[25px]"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 276 276"
            >
              <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
            </svg>
          </div>
          <div className="round-border relative rb-2">
            <Link to="/about">
              <svg
                className="absolute top-[25%] left-0 md:left-[4%] rotate-[80deg] scale-[300%] w-[25px]"
                fill="#525AA8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 276 276"
              >
                <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
              </svg>
            </Link>
            <svg
              className="absolute -bottom-[3%] md:-bottom-[1%] right-[42%] rotate-[20deg] scale-[300%] w-[25px]"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 276 276"
            >
              <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
            </svg>
            <div className="round-border relative rb-3">
              <div>
                <svg
                  className="absolute bottom-[20%] left-[1%] md:left-[7%] rotate-[20deg] scale-[150%] md:scale-[300%] w-[25px]"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 276 276"
                >
                  <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                </svg>

                <svg
                  className="hidden md:block absolute -top-[0.5%] right-[40%] rotate-[60deg] scale-[300%] w-[25px]"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 276 276"
                >
                  <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                </svg>
              </div>
              <div className="round-border relative rb-4 hidden md:block">
                <Link to="/portfolio">
                  <svg
                    className="absolute bottom-[25%] right-[4%] rotate-[80deg] scale-[300%] w-[25px]"
                    fill="#525AA8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 276 276"
                  >
                    <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                  </svg>
                </Link>
                <div className="round-border rb-5 relative hidden lg:block">
                  <div>
                    <svg
                      className="absolute top-[38%] -right-[2%] rotate-[20deg] scale-[300%] w-[25px]"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 276 276"
                    >
                      <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                    </svg>
                    <svg
                      className="absolute top-[55%] -left-[2%] rotate-[60deg] scale-[150%] w-[25px]"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 276 276"
                    >
                      <path d="m138,0c-4,130.69-7.31,134-138,138,130.69,4,134,7.31,138,138,4-130.82,7.31-134,138-138-130.69-4-134-7.31-138-138Z" />
                    </svg>
                  </div>
                  <div className="round-border last-rb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="body col-start-1 col-end-2 z-5 relative row-start-1 row-end-2 place-self-center w-[35%] break-all p-[2rem_1rem_0rem] heading">
          vaporwaves
        </h1>
      </div>
    </div>
  );
};

export default Home;
export const Head: HeadFC = () => <SEO title="home" />;
