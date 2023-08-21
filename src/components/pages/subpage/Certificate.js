import React from "react";
import { Link } from "react-router-dom";

export default function Certificate() {
  return (
    <div
      style={{ marginTop: "20vh" }}
      className="flex min-h-[64vh] justify-center"
    >
      <div className=" w-full text-center container ">
        <div>
          {" "}
          <h1 className="text-[#3b1468] font-bold pb-10 ">
            আপনি সফল ভাবে পরীক্ষা দিয়েছেন !
          </h1>
          <h2 className="pb-10">
            আপনার সার্টিফিকেট নিতে নিচের বাটন এ ক্লিক করুন{" "}
          </h2>
          <Link
            to="/download"
            className="bg-[#3b1468] hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full"
          >
            পরবর্তী
          </Link>
        </div>
      </div>
    </div>
  );
}
