import { useCallback, useEffect, useState } from "react";
import MainContext from "./MainContext";

const ContextProvider = (props) => {
  const [user, setUser] = useState(null);

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

  const modifyUser = (name, cls, institute, phone, regNumber) => {
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

  const checkRegNumber = useCallback(async () => {
    if (user != null) {
      return true;
    }
    return false;
  }, [user]);

  const submitQuiz = async (quizzes) => {
    console.log(quizzes);
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
