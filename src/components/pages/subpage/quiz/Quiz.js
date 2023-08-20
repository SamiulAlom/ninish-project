import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../../../../contextApi/MainContext";
import Question from "./Question";

export default function Quiz() {
  const { id } = useParams();
  const { getQuiz } = useContext(MainContext);

  const [quizzes, setQuizzes] = useState({});

  // Initialize form data using Api Response
  const initializeState = (quizzes) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes.map((quiz) => {
      const { options } = quiz;
      options.map((option) => (option.isSelected = false));
    });
    setQuizzes(modQuizzes);
  };

  // Watch for successful data fetch from server
  useEffect(() => {
    // initializeState(getQuiz);
  }, []);

  // Watch for data fetch error
  // useEffect(() => {
  //   if () {
  //     toast.error("Server error please reload.");
  //   }
  // }, []);

  const handleQuizUpdate = (quizNumber, optionNumber, action) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes[quizNumber].options[optionNumber].isSelected = action;
    setQuizzes(modQuizzes);
  };

  useEffect(() => {
    const get = async () => {
      // const res = await getQuiz(id);
    };
    get();
  }, [getQuiz, id]);

  return (
    <div className="min-h-[73vh] container mx-auto ">
      <div className="flex justify-center">
        <h1 className="text-[28px] text-[#3D007D] py-3 text-center font-bold">
          মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্ব
        </h1>
      </div>
      <div className="quiz-container grid xl:grid-cols-2 gap-4 mb-4">
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
}
