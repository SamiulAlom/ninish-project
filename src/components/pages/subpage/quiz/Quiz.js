import _ from "lodash";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import quizContext from "../../../../contextApi/QuizContext";
import useQuizList from "../../../../hooks/useQuiz";
import Question from "./Question";

export default function Quiz() {
  const { id } = useParams();

  const { quizList, isLoading, isError } = useQuizList(id);

  const [quizzes, setQuizzes] = useState({});

  // Initialize form data using Api Response
  const initializeState = (quizzes) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes.forEach((quiz) => {
      const { options } = quiz;
      options.map((option) => (option.isSelected = false));
    });
    setQuizzes(modQuizzes);
  };

  // Watch for successful data fetch from server
  useEffect(() => {
    if (!isLoading && !isError) {
      initializeState(quizList);
    }
  }, [quizList, isLoading, isError]);

  // Watch for data fetch error
  useEffect(() => {
    if (isError && !isLoading) {
      toast.error("Server error please reload.");
    }
  }, [isError, isLoading]);

  const handleQuizUpdate = (quizNumber, optionNumber, action) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes[quizNumber].options[optionNumber].isSelected = action;
    setQuizzes(modQuizzes);
  };

  // Decide what to show
  let content = null;
  if (isLoading && !isError) {
    content = (
      <div className="flex justify-center">
        <Loader2 className="animate-spin" size="50" color="gray" />
      </div>
    );
  } else if (isError && !isLoading) {
    content = (
      <div className="flex justify-center bg-red-600 text-white rounded-md py-2">
        Error Fetching data try again
      </div>
    );
  } else if (!isError && quizzes.length > 0) {
    content = quizzes.map((quiz, ind) => (
      <Question key={quiz.id} quiz={quiz} quizNumber={ind} />
    ));
  }

  return (
    <div className="min-h-[73vh] container mx-auto ">
      <div className="flex justify-center">
        <h1 className="text-[28px] text-[#3D007D] py-3 text-center font-bold">
          মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্ব
        </h1>
      </div>
      <div className="quiz-container grid xl:grid-cols-2 gap-4 mb-4">
        <quizContext.Provider value={{ handleQuizUpdate }}>
          {content}
        </quizContext.Provider>
      </div>
    </div>
  );
}
