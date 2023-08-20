import React from "react";
import Answer from "./Answer";

export default function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className="flex justify-start bg-white" key={index}>
      <div className="p-4 font-bold text-[18px]">{answer.title}</div>
      <Answer input={false} options={answer.options} />
    </div>
  ));
}
