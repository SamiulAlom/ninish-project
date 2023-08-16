import React from "react";
import Answer from "./Answer";

export default function Question() {
  return (
    <div className="flex justify-center bg-white">
      <div className=" bg-white p-20">
        <h3>What is your name?</h3>
        <Answer />
      </div>
    </div>
  );
}
