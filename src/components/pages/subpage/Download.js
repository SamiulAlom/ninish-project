import { ThumbsUp } from "lucide-react";
import React, { useContext, useState } from "react";
import MainContext from "../../../contextApi/MainContext";
import img from "../../../images/Certificate.jpg";

export default function Download() {
  const { user } = useContext(MainContext);
  const [text, setText] = useState(false);

  const handleClick = () => {
    window.print();
  };
  const show = () => {
    setText(true);
  };

  return (
    <div className="justify-center flex certificate-container">
      <div>
        {/* Print Image */}
        <div className="w-full hidden mt-10 relative img-container print:block print:h-[90vh] print:w-screen">
          <img src={img} alt="certificate" className="certificate" />
        </div>
        {/* Dummy */}
        <div className="max-w-[900px] w-full mt-10 relative img-container no-print">
          <img src={img} alt="certificate" className="certificate" />
        </div>
        {/* Image overlay text */}
        <span
          style={{ top: "260px", left: "32vw" }}
          className="absolute from-neutral-700 text-[20px] text-black certificate-name"
        >
          {user?.name}
        </span>
        <p className="text-center mt-10 text-xl font-bold font-sans text-purple-900 no-print">
          *সার্টফিকেট ভাউনলোড করানোর জন্য কম্পিউটার হতে ক্রম (Chrome) ব্রাউজার
          ব্যবহার করুন।
        </p>
        <div className="flex justify-center my-10 no-print">
          <button
            className="bg-[#3b1468]  hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full"
            onClick={handleClick}
          >
            ভাউনলোড করুন
          </button>
        </div>
        <div className="flex justify-center">
          <div className="no-print">
            <button
              id="btn"
              className={`bg-[#3b1468]  hover:bg-blue-700 text-white font-bold py-3 px-10 mb-10 rounded-full ${
                text ? "hidden" : "block"
              }`}
              onClick={show}
            >
              বৃত্তি এর জন্য আবেদন করতে
              <br />
              এখানে ক্লিক করুন
            </button>
            <div
              className={`py-5 flex items-center gap-2 md:gap-4 text-white font-semibold mb-20 px-2 text-center md:text-start md:px-20 rounded-lg bg-green-700 ${
                text ? "block" : "hidden"
              }`}
            >
              <p className="mt-2">আপনি সফল ভাবে বৃত্তির জন্য আবেদন করেছেন</p>
              <ThumbsUp className="hidden md:block" size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
