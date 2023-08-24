import { ShieldQuestion } from "lucide-react";
import React from "react";
import QuizOption from "./QuizOption";

export default function Question({ quiz, quizNumber }) {
  const { options, question } = quiz;
  return (
    <div className="bg-purple-200 rounded-md p-4">
      <h3 className="text-2xl mb-2 font-bold">
        {" "}
        {quizNumber + 1} - {question}
      </h3>
      <p className="mb-2 flex gap-2 items-center">
        <ShieldQuestion /> সঠিক উত্তর নির্বাচন করুন
      </p>
      <div className="options grid md:grid-cols-2 gap-4">
        {options.map((option, ind) => (
          <QuizOption
            option={option}
            ind={ind}
            quizNumber={quizNumber}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}
