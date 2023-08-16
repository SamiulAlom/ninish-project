import React from "react";
import Question from "./Question";

export default function Quiz() {
  return (
    <div className="flex justify-center bg-white">
      <div style={{ height: "73vh" }} className=" bg-white p-20">
        <Question />
      </div>
    </div>
  );
}
