import React from "react";
import { Link } from "react-router-dom";
import images from "../images/logo.png";
export default function Navbar() {
  return (
    <nav className="max-sm:block max-sm:pb-6 max-sm:mb-10 flex items-center sm:justify-around space-x-4 bg-gradient-to-l from-[#e2dede] to-[#e9e3e3] ">
      <div className="max-sm:w-screen max-sm:flex max-sm:justify-center">
        <Link to="/">
          {" "}
          <img className="w-27 h-20" src={images} alt="logo" />
        </Link>
      </div>
      <div className="max-sm:flex-wrap">
        {[
          ["মুজিব অলিম্পিয়াড-২০২৩", "/mujib-olympiad"],
          ["নিণীষ কি ", "/about"],
          ["অনলাইন ব্যাচ ", "/online-batch"],
          ["যোগাযোগ", "/contact"],
        ].map(([title, url]) => (
          <Link
            to={url}
            key={url}
            className="rounded-lg px-6 py-2 text-[#000] font-medium font-[Poppins] transition duration-500 hover:ease-in-out hover:bg-[#3D007D] hover:text-white"
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
