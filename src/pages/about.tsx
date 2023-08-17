import React, { useEffect, useRef } from 'react';
import type { HeadFC } from 'gatsby';

import SEO from '../components/seo';

const About = () => {
  const colors = [
    '#ec7996',
    '#ecb379',
    '#ecec79',
    '#79ec79',
    '#79ecc6',
    '#7996ec'
  ];

  return (
    <div className="container px-6 lg:p-0 grid m-auto items-center max-w-[1000px]">
      <div className="pt-12 grid md:grid-cols-[4fr_1fr] px-4">
        <section>
          <h1 className="heading">hi, i'm kat!</h1>
          <div className="text-2xl">
            <p>
              i'm a designer based in vancouver, canada who loves{' '}
              {[...'colour'].map((letter, i) => {
                return <span style={{ color: colors[i] }}>{letter}</span>;
              })}
              , outer space, and striking balance between cool designs and
              functional ones.
            </p>
            <p className="mt-4">
              i'm also a lover of music, collaborative fiction, anime & manga,
              and the critically acclaimed mmorpg, final fantasy xiv.
            </p>

            <a
              href="../../Katerina Dungog - Resume (2023).pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="ease-in-out duration-500 mt-4 py-[0.5rem] px-4 border border-white hover:shadow-[inset_6.5em_0_0_0_hsl(234,_34%,_49%)]">
                resume
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
export const Head: HeadFC = () => <SEO title="about" />;
