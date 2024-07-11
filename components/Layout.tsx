import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  title: string;
  description: string;
  author: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, author, children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {/*  */}
      </header>
      <main>
        {children} {/*  */}
      </main>
      <footer>
        {/*  */}
      </footer>
    </>
  );
};

export default Layout;
