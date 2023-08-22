import React from "react";
import { Link } from "react-router-dom";
import images from "../images/logo.png";
export default function Navbar() {
  return (
    <nav className="py-2 items-center bg-gradient-to-l from-[#e2dede] to-[#e9e3e3] no-print">
      <div className="container block sm:flex sm:justify-between mx-auto">
        <div className="flex sm:block justify-center">
          <Link to="/">
            {" "}
            <img className="w-27 h-20" src={images} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1  w-full">
          {[
            ["মুজিব অলিম্পিয়াড-২০২৩", "/mujib-olympiad"],
            ["নিণীষ কি ", "/about"],
            ["অনলাইন ব্যাচ ", "/online-batch"],
            ["যোগাযোগ", "/contact"],
          ].map(([title, url]) => (
            <Link
              to={url}
              key={url}
              className="rounded-lg max-sm:py-1  px-6 py-2 text-[#000] font-medium font-[Poppins] transition duration-500 hover:ease-in-out hover:bg-[#3D007D] hover:text-white"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
