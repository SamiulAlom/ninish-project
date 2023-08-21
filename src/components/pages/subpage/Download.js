import React from "react";
import img from "../../../images/Certificate.jpg";

export default function Download() {
  const handleClick = () => {
    window.print();
  };

  return (
    <div className=" justify-center flex">
      <div>
        <div className="w-[950px] mt-10 relative">
          <img src={img} alt="certificate" />
        </div>
        <span
          style={{ top: "265px", left: "35vw" }}
          className="absolute from-neutral-700 text-[20px] text-black certificate-name"
        >
          Samiul Alom
        </span>
        <div className="flex justify-center mt-20 mb-20 no-print">
          <button
            className="bg-[#3b1468]  hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full"
            onClick={handleClick}
          >
            প্রিন্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
}
