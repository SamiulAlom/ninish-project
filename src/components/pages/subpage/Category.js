import React from "react";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="flex justify-center bg-white">
      <div className="form text-[18px] bg-white py-10">
        <h1 className="text-[28px] text-[#3D007D] pb-3 text-center font-bold mb-3">
          মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্ব
        </h1>
        <Link to={`/quiz/${1}`}>
          <div
            style={{ height: "80px", alignItems: "center" }}
            className="flex mb-10 text-white bg-[#054932] text-center rounded-[10px] justify-center p-10"
          >
            প্রাথমিক(৩য়,৪র্থ,৫ম)
          </div>
        </Link>
        <Link to={`/quiz/${2}`}>
          <div
            style={{ height: "80px", alignItems: "center" }}
            className="flex mb-10 text-white bg-[#054932] text-center rounded-[10px] justify-center p-10"
          >
            নিম্ন মাধ্যমিক(৬ষ্ঠ,৭ম,৮ম)
          </div>
        </Link>
        <Link to={`/quiz/${3}`}>
          <div
            style={{ height: "80px", alignItems: "center" }}
            className="flex mb-10 text-white bg-[#054932] text-center rounded-[10px] justify-center p-10"
          >
            মাধ্যমিক(৯ম ও ১০ম)
          </div>
        </Link>
        <Link to={`/quiz/${4}`}>
          <div
            style={{ height: "80px", alignItems: "center" }}
            className="flex mb-10 text-white bg-[#054932] text-center rounded-[10px] justify-center p-10"
          >
            উচ্চ মাধ্যমিক(১১শ ও ১২শ)
          </div>
        </Link>
      </div>
    </div>
  );
}
