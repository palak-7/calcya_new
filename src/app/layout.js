"use client";

import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop/page";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "../context/UserProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <UserProvider>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </UserProvider>
      </body>
    </html>
  );
}
