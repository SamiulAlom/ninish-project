import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MainContext from "./MainContext";

const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [quizDone, setQuizDone] = useState(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already entered information
    if (localStorage.getItem("user")) {
      const localUser = JSON.parse(localStorage.getItem("user"));
      setUser({
        name: localUser.name,
        cls: localUser.cls,
        institute: localUser.institute,
        phone: localUser.phone,
        regNumber: localUser.regNumber,
      });
    }
  }, []);

  const checkRegNumber = useCallback(async () => {
    if (user != null) {
      const res = await fetch(`${baseUrl}/check/${user.regNumber}`, {
        method: "get",
      });
      const data = await res.json();
      console.log(data);
      return true;
    }
    return false;
  }, [user, baseUrl]);

  const modifyUser = async (name, cls, institute, phone, regNumber) => {
    setUser({
      name: name,
      cls: cls,
      institute: institute,
      phone: phone,
      regNumber: regNumber,
    });

    await checkRegNumber(regNumber);

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name,
        cls: cls,
        institute: institute,
        phone: phone,
        regNumber: regNumber,
      })
    );
  };

  const submitQuiz = async (quizzes) => {
    try {
      await fetch(`${baseUrl}/submit`, {
        method: "post",
        body: JSON.stringify(quizzes),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("আপনার উত্তর সফলভাবে জমা হয়েছে। ধন্যবাদ।");
      setTimeout(() => {
        navigate("/certificate");
      }, 2000);
    } catch {
      toast.error("অসুবিধার জন্য দুঃখিত। আবার চেষ্টা করুন।");
    }
  };

  return (
    <MainContext.Provider
      value={{ user, modifyUser, submitQuiz, checkRegNumber }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default ContextProvider;
