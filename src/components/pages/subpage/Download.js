import React, { useContext } from "react";
import MainContext from "../../../contextApi/MainContext";
import img from "../../../images/Certificate.jpg";

export default function Download() {
  const { user } = useContext(MainContext);

  const handleClick = () => {
    window.print();
  };
  const show = () => {
    const getId = document.getElementById("text");
    const getBtn = document.getElementById("btn");
    getId.style.display = "block";
    getBtn.style.display = "none";
  };

  return (
    <div className=" justify-center flex">
      <div>
        <div className="w-[950px] mt-10 relative">
          <img src={img} alt="certificate" />
        </div>
        <span
          style={{ top: "270px", left: "35vw" }}
          className="absolute from-neutral-700 text-[20px] text-black certificate-name"
        >
          {user?.name}
        </span>
        <div className="flex justify-center mt-20 mb-20 no-print">
          <button
            className="bg-[#3b1468]  hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full"
            onClick={handleClick}
          >
            প্রিন্ট করুন
          </button>
        </div>
        <div className="flex justify-center">
          <div className="no-print">
            <button
              id="btn"
              className="bg-[#3b1468]  hover:bg-blue-700 text-white font-bold py-3 px-10 mb-10 rounded-full"
              onClick={show()}
            >
              বৃত্তি এর জন্য আবেদন করতে এখানে ক্লিক করুন
            </button>
            <p
              id="text"
              className="p-10 pl-20 pr-20 rounded-lg hidden bg-green-700"
            >
              আপনি সফল ভাবে বৃত্তির জন্য আবেদন করেছেন
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
