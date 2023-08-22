import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3 md:px-6">{children}</div>
      <Footer />
    </>
  );
}
