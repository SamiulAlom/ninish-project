import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import MainContext from "./contextApi/MainContext";

export default function PrivateOutlet({ children }) {
  const { user, checkQuizDone, quizDone } = useContext(MainContext);
  console.log("here");

  useEffect(() => {
    const ck = async () => {
      return await checkQuizDone();
    };
    if (user != null && !quizDone) {
      ck();
    }
  }, [checkQuizDone, user, quizDone]);

  return quizDone ? children : <Navigate to="/mujib-olympiad" />;
}
