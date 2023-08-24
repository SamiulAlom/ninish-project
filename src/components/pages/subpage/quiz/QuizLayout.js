import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../../../../contextApi/MainContext";
import Counter from "../../Counter";
import Quiz from "./Quiz";

export default function QuizLayout() {
  const { id } = useParams();
  const { user } = useContext(MainContext);
  const { regNumber } = user;

  const [totalTime, setTotalTime] = useState(
    Number(id) === 1 ? 20 : Number(id) === 2 ? 25 : Number(id) === 3 ? 35 : 45
  );
  const [seconds, setSeconds] = useState(0);
  const [ready, setReady] = useState(false);
  const [gotQuiz, setGotQuiz] = useState(false);
  const [forceQuizSubmit, setForceQuizSubmit] = useState(false);

  useEffect(() => {
    if (regNumber !== undefined) {
      setReady(false);
      if (localStorage.getItem(`totalTime_${regNumber}_${id}`)) {
        setTotalTime(localStorage.getItem(`totalTime_${regNumber}_${id}`));
      }
      if (localStorage.getItem(`seconds_${regNumber}_${id}`)) {
        setSeconds(localStorage.getItem(`seconds_${regNumber}_${id}`));
      }
      setReady(true);
    }
  }, [id, regNumber]);

  let timeLeft = new Date();

  // add a day
  timeLeft.setMinutes(timeLeft.getMinutes() + Number(totalTime));
  timeLeft.setSeconds(timeLeft.getSeconds() + Number(seconds));

  return (
    <div className="container mx-auto py-4">
      {/* Quiz Header */}
      <div className="text-center mb-4">
        <h1 className="text-[28px] text-[#3D007D] py-3 text-center font-bold">
          মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্ব
        </h1>
        <p className="mb-2 font-bold">
          {Number(id) === 1
            ? "প্রাথমিক(৩য়,৪র্থ,৫ম)"
            : Number(id) === 2
            ? "নিম্ন মাধ্যমিক(৬ষ্ঠ,৭ম,৮ম)"
            : Number(id) === 3
            ? "মাধ্যমিক(৯ম ও ১০ম)"
            : "উচ্চ মাধ্যমিক(১১শ ও ১২শ)"}
        </p>
        <p className="flex justify-center gap-4">
          <span>
            মোট প্রশ্নঃ{" "}
            {Number(id) === 1
              ? 30
              : Number(id) === 2
              ? 40
              : Number(id) === 3
              ? 50
              : 60}{" "}
            টি
          </span>
          <span>
            মোট সময়ঃ{" "}
            {Number(id) === 1
              ? 20
              : Number(id) === 2
              ? 25
              : Number(id) === 3
              ? 35
              : 45}{" "}
            মিনিট
          </span>
        </p>
        <div className="mt-2 font-bold">
          অবশিষ্ট সময়ঃ
          {/* Time Counter */}
          {ready && gotQuiz && (
            <Counter
              deadline={timeLeft}
              totalTime={totalTime}
              quizId={id}
              setForceQuizSubmit={setForceQuizSubmit}
              regNum={user.regNumber}
            />
          )}
        </div>
      </div>
      {/* Form */}
      <Quiz setGotQuiz={setGotQuiz} id={id} forceQuizSubmit={forceQuizSubmit} />
    </div>
  );
}
