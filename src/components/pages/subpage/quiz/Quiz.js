import React from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";

export default function Quiz() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className=" min-h-[73vh] bg-white">
      <div className=" bg-white p-20">
        <div className="flex justify-center">
          <h1 className="text-[28px] text-[#3D007D] pb-3 text-center font-bold">
            মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্ব
          </h1>
        </div>
        <div>
          <Question />
        </div>
      </div>
    </div>
  );
}
