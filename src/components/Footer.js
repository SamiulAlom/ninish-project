import React from "react";
import { Link } from "react-router-dom";
import images from "../images/logo.png";
export default function Navbar() {
  return (
    <footer className="pt-10 pb-7 text-[#fff] bg-[#3D007D] no-print">
      <div className="container block px-2 md:px-6 sm:flex flex-wrap items-center text-center sm:justify-between mx-auto">
        <div>
          <Link to="/" className="flex sm:block justify-center">
            <img src={images} alt="logo" className="w-27 h-20" />
          </Link>
          <h3>A Co-curricular Edu-Tech Platform</h3>
        </div>
        <div className="mt-4 md:mb-0">
          <p className="mb-2 md:mb-0">যোগাযোগ </p>
          <p>
            ফোন: <a href="tel:01793000873">+০১৭৯৩০০০৮৭৩</a>
          </p>
          <p>
            ইমেইল: <a href="mailto:info@ninish.com">info@ninish.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
