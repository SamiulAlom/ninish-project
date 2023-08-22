import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MainContext from "./contextApi/MainContext";

export default function PrivateOutlet({ children }) {
  const { user } = useContext(MainContext);

  return user?.quizDone ? children : <Navigate to="/mujib-olympiad" />;
}
