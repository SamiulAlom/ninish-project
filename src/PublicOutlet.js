import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MainContext from "./contextApi/MainContext";

export default function PublicOutlet({ children }) {
  const { user } = useContext(MainContext);

  return !user?.quizDone ? children : <Navigate to="/certificate" />;
}
