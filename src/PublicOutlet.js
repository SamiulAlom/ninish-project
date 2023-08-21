import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainContext from "./contextApi/MainContext";

export default function PublicOutlet() {
  const { user, checkRegNumber, quizDone } = useContext(MainContext);

  useEffect(() => {
    const ck = async () => {
      return await checkRegNumber();
    };
    if (user != null) {
      ck();
    }
  }, [checkRegNumber, user]);

  return !quizDone ? <Outlet /> : <Navigate to="/download" />;
}
