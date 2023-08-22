import React from "react";
import { Link } from "react-router-dom";
import images from "../images/logo.png";
export default function Navbar() {
  return (
    <footer className="pt-10 pb-7 text-[#fff] bg-[#3D007D] no-print">
      <div className="container block  sm:flex flex-wrap items-center text-center sm:justify-between mx-auto">
        <div>
          <Link to="/" className="flex sm:block justify-center">
            <img src={images} alt="logo" className="w-27 h-20" />
          </Link>
          <h3>A Co-curricular Ed-Tech Platform</h3>
        </div>
        <div>
          <p>যোগাযোগ </p>
          <br />
          <p>ফোন: +০১৭৯৩০০০৮৭৩</p>
          <p>ইমেইল: info@ninish.com</p>
        </div>
      </div>
    </footer>
  );
}
