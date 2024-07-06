import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
