import React from "react";
import Answer from "./Answer";

export default function Question() {
  return (
    <div className="flex justify-start bg-white">
      <div className=" bg-white p-5">
        <h3 className="font-bold">{1} .What is your name?</h3>
        <Answer />
        <hr />
      </div>
    </div>
  );
}
