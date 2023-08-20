import { useEffect, useState } from "react";
import MainContext from "./MainContext";

const ContextProvider = (props) => {
  const [quiz, setQuiz] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
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

  const getQuiz = async (category) => {};

  const submitQuiz = async () => {};

  return (
    <MainContext.Provider
      value={{ quiz, user, modifyUser, getQuiz, submitQuiz }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default ContextProvider;
