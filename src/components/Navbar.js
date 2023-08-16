import React from "react";
import { Link } from "react-router-dom";
import images from "../images/logo.png";
export default function Navbar() {
  return (
    <nav className="max-[600px]:block max-[600px]:mb-10 flex items-center sm:justify-around space-x-4 bg-gradient-to-l from-[#fff] to-[#f7f4f4] ">
      <div className="max-[600px]:w-screen max-[600px]:flex max-[600px]:justify-center">
        <Link to="/">
          {" "}
          <img className="w-27 h-20" src={images} alt="logo" />
        </Link>
      </div>
      <div className="max-[600px]:flex-wrap">
        {[
          ["মুজিব অলিম্পিয়াড-২০২৩", "/mujib-olympiad"],
          ["নিণীষ কি ", "/about"],
          ["অনলাইন ব্যাচ ", "/online-batch"],
          ["যোগাযোগ", "/contact"],
        ].map(([title, url]) => (
          <Link
            to={url}
            className="rounded-lg px-6 py-2 text-[#000] font-medium font-[Poppins] transition duration-300 hover:ease-in-out hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
