import React from "react";
import img1 from "../../../images/photo1.JPG";
import img2 from "../../../images/photo2.JPG";
import img3 from "../../../images/photo3.jpg";
import img4 from "../../../images/photo4.jpg";
export default function Photo() {
  return (
    <div className="pt-20 pb-10 bg-[#fff] ">
      <div className="pb-10">
        <h3 className="text-4xl text-center text-[#000] font-bold">
          মুজিব অলিম্পিয়াড ২০২৩ এর অন্যান্য বিভাগ সমূহ
        </h3>
      </div>
      <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-2 space-y-5">
        <img src={img1} className="rounded-xl" alt="" />
        <img src={img2} className="rounded-xl" alt="" />
        <img src={img3} className="rounded-xl" alt="" />
        <img src={img4} className="rounded-xl" alt="" />
      </div>
    </div>
  );
}
