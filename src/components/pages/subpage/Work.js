import React from "react";
import img from "../../../images/gvt.png";

export default function Work() {
  return (
    <div className="pt-10 pb-10 bg-white flex justify-center">
      <div className=" container">
        <h1 className="text-2xl text-[#054932] pb-5 text-center font-bold">
          নিণীষের পুর্ববর্তী কাজ সমূহ
        </h1>
        <div className="flex justify-center  align-middle">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            <div className="bg-[#054932] circ text-white p-5  rounded-full">
              মুজিব অলিম্পিয়াড ২০২০
            </div>
            <div className="bg-[#054932] circ text-white p-5 rounded-full">
              মুজিবর্ষ বিতর্ক প্রতিযোগিতা
            </div>
            <div className="bg-[#054932] circ  text-white p-5 rounded-full">
              Wilderness Open 2020
            </div>
          </div>
        </div>
        <div className="text-white pb-10 mt-8 bg-[#686464]">
          <h1 className="text-1xl pt-10 pb-5 text-center font-bold">
            সহযোগিতায়
          </h1>
          <span className="flex justify-center">
            <img className="w-27 h-20" src={img} alt="" />
          </span>
          <span className="flex justify-center">
            <div className=" mt-3 text-center">
              <p>যুব ও ক্রীড়া মন্ত্রণালয় </p>
              <p>গনপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
