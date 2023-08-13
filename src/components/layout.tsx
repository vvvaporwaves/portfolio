import React from 'react';
import { PageProps } from 'gatsby';

import Footer from './footer';
import Header from './header';

const Layout = ({ children, location }: PageProps) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="container flex flex-1 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
