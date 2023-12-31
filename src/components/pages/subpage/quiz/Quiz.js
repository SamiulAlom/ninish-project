import _ from "lodash";
import { Loader2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import MainContext from "../../../../contextApi/MainContext";
import quizContext from "../../../../contextApi/QuizContext";
import useQuizList from "../../../../hooks/useQuiz";
import Question from "./Question";

export default function Quiz({ setGotQuiz, id, forceQuizSubmit }) {
  const [loading, setLoading] = useState(false);
  const { quizList, isLoading, isError } = useQuizList(id);

  const [quizzes, setQuizzes] = useState({});

  const { submitQuiz } = useContext(MainContext);

  // Initialize form data using Api Response
  const initializeState = (quizzes) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes.forEach((quiz) => {
      quiz.attempted = false;
      const { options } = quiz;
      options.map((option) => (option.isSelected = false));
    });
    setQuizzes(modQuizzes);
    if (modQuizzes.length > 0) setGotQuiz(true);
  };

  // Watch for successful data fetch from server
  useEffect(() => {
    if (!isLoading && !isError) {
      initializeState(quizList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizList, isLoading, isError]);

  // Watch for data fetch error
  useEffect(() => {
    if (isError && !isLoading) {
      toast.error("অসুবিধার জন্য দুঃখিত। আবার চেষ্টা করুন।");
    }
  }, [isError, isLoading]);

  const handleQuizUpdate = (quizNumber, optionNumber, action) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes[quizNumber].attempted = true;
    modQuizzes[quizNumber].options.map((option) => (option.isSelected = false));
    modQuizzes[quizNumber].options[optionNumber].isSelected = action;
    setQuizzes(modQuizzes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitQuiz(quizzes);
    setLoading(false);
  };

  const handleForceSubmit = async () => {
    setLoading(true);
    await submitQuiz(quizzes);
    setLoading(false);
  };

  // Force submit quiz on time complete
  useEffect(() => {
    if (forceQuizSubmit) {
      handleForceSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceQuizSubmit]);

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       // User switched tabs or left the page
  //       setMessage("Goodbye, world!");
  //     } else {
  //       // User came back to the page
  //       setMessage("Welcome back!");
  //     }
  //   };
  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   return () => {
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //   };
  // }, []);

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
        অসুবিধার জন্য দুঃখিত। আবার চেষ্টা করুন।
      </div>
    );
  } else if (!isError && quizzes.length > 0) {
    content = (
      <>
        <div className="quiz-container grid xl:grid-cols-2 gap-4 mb-2">
          {quizzes.map((quiz, ind) => (
            <Question key={quiz.id} quiz={quiz} quizNumber={ind} />
          ))}
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#3b1468] hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-full disabled:bg-slate-600 mt-2"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "জমা দিন"}
          </button>
        </div>
      </>
    );
  }
  return (
    <div className="container mx-auto">
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <quizContext.Provider value={{ handleQuizUpdate }}>
          {content}
        </quizContext.Provider>
      </form>
    </div>
  );
}
