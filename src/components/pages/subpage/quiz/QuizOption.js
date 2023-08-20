import React, { useState } from "react";

export default function QuizOption({ option, ind, quizNumber }) {
  const [selected, setSelected] = useState(false);
  const { title } = option;
  //   const { handleQuizUpdate } = useContext(quizContext);

  const handleChange = (e) => {
    setSelected((prev) => !prev);
    // handleQuizUpdate(quizNumber, ind, !selected);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      // prevent default behavior
      e.preventDefault();
      // execute the click handler
      setSelected((prev) => !prev);
      //   handleQuizUpdate(quizNumber, ind, !selected);
    }
  };
  return (
    <div className="quizOption">
      <label
        className="cursor-pointer block w-full bg-violet-600 text-white hover:bg-purple-800 rounded-md px-4 py-2"
        onKeyDown={handleKeyDown}
        tabIndex="0"
        aria-label={title}
      >
        <input
          type="checkbox"
          id={`ck_${ind}_${quizNumber}`}
          checked={selected}
          onChange={handleChange}
        />
        {title}
      </label>
    </div>
  );
}
