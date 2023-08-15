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
    <div className="container grid m-auto items-center h-screen">
      <div className="pt-12 grid md:grid-cols-[1.5fr_1fr] px-4">
        <section>
          <h1 className='font-serif text-pink'>hi, i'm kat!</h1>
          <div className="text-2xl">
            <p>
              i'm a designer based in vancouver, canada who loves {[...'colour'].map((letter, i) => {
                return <span style={{color: colors[i]}}>{letter}</span>;
              })}, outer space, and striking balance between cool designs and functional ones.
            </p>
            <p className="mt-4">
              i'm also a lover of music, collaborative fiction, anime & manga, and the critically acclaimed mmorpg, final fantasy xiv.
            </p>
            <button className="mt-6">resume</button>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
    c: {
        color: 'hsl(345, 75%, 70%)'
    },

}

export default About;
export const Head: HeadFC = () => <SEO title="about" />;