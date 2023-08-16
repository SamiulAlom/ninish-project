import React from "react";
import images from "../images/logo.png";
export default function Navbar() {
  return (
    <footer className="flex flex-wrap pt-10 pb-7 items-center sm:justify-around space-x-4 text-[#fff] bg-[#3D007D]">
      <div className="max-[600px]:p-5 ">
        <a href="/">
          <img src={images} alt="logo" className="w-27 h-20" />
        </a>
        <h3>A Co-curricular Ed-Tech Platform</h3>
      </div>
      <div>
        <p>যোগাযোগ </p>
        <br />
        <p>ফোন: +০১৭১১১১১১১১</p>
        <p>ইমেইল: support@ninish.com</p>
      </div>
    </footer>
  );
}
