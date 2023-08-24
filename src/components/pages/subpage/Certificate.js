import { BadgeCheck } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Certificate() {
  return (
    <div className="flex justify-center py-20">
      <div className=" w-full text-center container ">
        <div>
          {" "}
          <div className="flex justify-center">
            <BadgeCheck className="text-green-500 mb-4" size={48} />
          </div>
          <h1 className="text-[#3b1468] font-bold pb-10 ">
            আপনি সফল ভাবে পরীক্ষা দিয়েছেন !
          </h1>
          <p className="pb-10 font-bold">
            বিজয়ীদের তালিকা ২৫শে আগষ্ট (আজ) রাত ৯.০০ টায় ওয়েবসাইট এবং ফেইসবুক
            পেইজে প্রকাশ হবে।
          </p>
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
