import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import MainContext from "./MainContext";

const ContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const baseUrl = process.env.REACT_APP_BASE_URL;

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
        quizDone: localUser.quizDone,
      });
    }
  }, []);

  const checkRegNumber = async (regNumber) => {
    const res = await fetch(`${baseUrl}/checkReg/${regNumber}`, {
      method: "get",
    });
    const data = await res.json();
    if (data === 200) {
      return true;
    }
    toast.error("আপনার রেজিস্ট্রেশন নম্বরটি ভুল");
    return false;
  };

  const checkQuizDone = async (regNum) => {
    const res = await fetch(`${baseUrl}/check/${regNum}`, {
      method: "get",
    });
    const data = await res.json();
    if (data === 200) {
      return true;
    } else return false;
  };

  const modifyUser = async (name, cls, institute, phone, regNumber) => {
    const res = await checkQuizDone(regNumber);
    let quizDone = false;
    if (res) quizDone = true;
    setUser({
      name: name,
      cls: cls,
      institute: institute,
      phone: phone,
      regNumber: regNumber,
      quizDone: quizDone,
    });

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name,
        cls: cls,
        institute: institute,
        phone: phone,
        regNumber: regNumber,
        quizDone: quizDone,
      })
    );
  };

  const submitQuiz = async (quizzes) => {
    let data = {
      quizzes: quizzes,
      user: user,
    };
    try {
      if (user != null) {
        await fetch(`${baseUrl}/submit`, {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setUser({ ...user, quizDone: true });
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: user.name,
            cls: user.cls,
            institute: user.institute,
            phone: user.phone,
            regNumber: user.regNumber,
            quizDone: true,
          })
        );
        toast.success("আপনার উত্তর সফলভাবে জমা হয়েছে। ধন্যবাদ।");
      } else toast.error("অসুবিধার জন্য দুঃখিত। আবার চেষ্টা করুন।");
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
        checkRegNumber,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default ContextProvider;
