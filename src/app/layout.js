"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { ClipLoader } from "react-spinners";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);


  return (
    <html lang="en">
      <Head>
        <title>My MetaBlog Website</title>
        <meta name="description" content="This is a MetaBlog website built with Next.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <ThemeProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="w-full lg:w-[1280px] mx-0 lg:mx-auto">
            <Navbar setData={setData} />
          </header>
          {loading ? (
            <div className="loader-container">
              <ClipLoader size={50} color="#3498db" />
            </div>
          ) : (
            <main className="Container">
              {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { data }) : child
              )}
            </main>
          )}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
