import { CheckCircle2 } from "lucide-react";
import React, { useContext, useState } from "react";
import quizContext from "../../../../contextApi/QuizContext";

export default function QuizOption({ option, ind, quizNumber }) {
  const [selected, setSelected] = useState(false);
  const { title } = option;
  const { handleQuizUpdate } = useContext(quizContext);

  const handleChange = (e) => {
    setSelected((prev) => !prev);
    handleQuizUpdate(quizNumber, ind, !selected);
  };

  return (
    <div className="quizOption">
      <label
        htmlFor={`ck_${ind}_${quizNumber}`}
        className="cursor-pointer w-full bg-violet-600 text-white hover:bg-purple-800 rounded-md px-4 py-2
        flex items-center gap-2"
        tabIndex="0"
        aria-label={title}
      >
        <div className="bg-white w-5 h-5 rounded-full relative selected-input">
          <span className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden">
            <CheckCircle2 className="text-white fill-green-600" />
          </span>
        </div>
        <input
          type="radio"
          id={`ck_${ind}_${quizNumber}`}
          defaultChecked={selected}
          name={quizNumber}
          onChange={handleChange}
        />
        {title}
      </label>
    </div>
  );
}
