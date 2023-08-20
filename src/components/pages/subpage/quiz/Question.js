import React from "react";
import Answer from "./Answer";

export default function Question() {
  return (
    <div className="flex justify-start bg-white">
      <div className="p-4 font-bold text-[18px]">{}</div>
      <Answer input={false} />
      <hr className="bg-[#3b1468]" />
    </div>
  );
}
