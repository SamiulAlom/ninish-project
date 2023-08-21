import React, { useContext, useState } from "react";
import MainContext from "../../../contextApi/MainContext";
import img from "../../../images/Certificate.jpg";
import { ThumbsUp } from "lucide-react";

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
              className={`bg-[#3b1468]  hover:bg-blue-700 text-white font-bold py-3 px-10 mb-10 rounded-full ${
                text ? "hidden" : "block"
              }`}
              onClick={show}
            >
              বৃত্তি এর জন্য আবেদন করতে এখানে ক্লিক করুন
            </button>
            <p
              id="text"
              className={`p-5 flex text-white font-semibold mb-20 pl-20 pr-20 rounded-lg bg-green-700 ${
                text ? "block" : "hidden"
              }`}
            >
              আপনি সফল ভাবে বৃত্তির জন্য আবেদন করেছেন{" "}
              <ThumbsUp className="ml-3" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
