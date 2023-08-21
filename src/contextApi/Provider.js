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

  const checkRegNumber = useCallback(
    async (regNumber) => {
      if (user != null) {
        const res = await fetch(`${baseUrl}/checkReg/${regNumber}`, {
          method: "get",
        });
        const data = await res.json();
        if (data === 200) {
          return true;
        }
        toast.error("আপনার রেজিস্ট্রেশন নম্বরটি ভুল");
        return false;
      }
    },
    [user, baseUrl]
  );

  const checkQuizDone = useCallback(async () => {
    if (user != null && !quizDone) {
      const res = await fetch(`${baseUrl}/check/${user.regNumber}`, {
        method: "get",
      });
      const data = await res.json();
      if (data === 200) {
        setQuizDone(true);
      }
    }
  }, [user, baseUrl, quizDone]);

  const modifyUser = async (name, cls, institute, phone, regNumber) => {
    setUser({
      name: name,
      cls: cls,
      institute: institute,
      phone: phone,
      regNumber: regNumber,
    });

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
    let data = {
      quizzes: quizzes,
      user: user,
    };
    try {
      await fetch(`${baseUrl}/submit`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("আপনার উত্তর সফলভাবে জমা হয়েছে। ধন্যবাদ।");
      setInterval(() => {
        navigate("/certificate");
      }, 2000);
    } catch {
      toast.error("অসুবিধার জন্য দুঃখিত। আবার চেষ্টা করুন।");
    }
  };

  return (
    <MainContext.Provider
      value={{
        user,
        modifyUser,
        submitQuiz,
        checkQuizDone,
        quizDone,
        checkRegNumber,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default ContextProvider;
