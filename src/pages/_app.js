import "@/styles/globals.css";
import "@/styles/custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { UserProvider } from '../context/UserContext';
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Head>
        /* Bootstrap Icons */
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>
        /* Font Awesome */
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
        <link rel="icon" href="/favicon.png" />
        <title>yo-trans</title>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;

