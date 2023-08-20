import React from "react";
import QuizOption from "./QuizOption";

<<<<<<< HEAD
export default function Question() {
  return (
    <div className="flex justify-start bg-white">
      <div className="p-4 font-bold text-[18px]">{}</div>
      <Answer input={false} />
      <hr className="bg-[#3b1468]" />
=======
export default function Question({ quiz, quizNumber }) {
  const { options } = quiz;
  return (
    <div className="bg-purple-200 rounded-md p-4">
      <h3 className="text-2xl mb-2 font-bold">Title of question</h3>
      <p className="mb-2">There can be multiple answers to question</p>
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
>>>>>>> 89d4548ed5975b0e5fe8dd49b663e2ae02c621a0
    </div>
  );
}
