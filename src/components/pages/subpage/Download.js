import React from "react";
import img from "../../../images/Certificate.jpg";
export default function Download() {
  return (
    <div className=" justify-center flex">
      <div>
        <div className="w-[950px] mt-10 relative">
          <img src={img} alt="certificate" />
        </div>
        <span
          style={{ top: "375px", left: "30vw" }}
          className="absolute from-neutral-700 text-[20px] text-black "
        >
          Samiul Alom
        </span>
        <div className="flex justify-center mt-20 mb-20">
          <a href="path.pdf" download="certificate.pdf">
            <button className="bg-[#3b1468]  hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full">
              Download File
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
