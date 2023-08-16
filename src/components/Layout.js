import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* Tailwind ready */}
      <div className="bg-zinc-500">{children}</div>
      <Footer />
    </>
  );
}
