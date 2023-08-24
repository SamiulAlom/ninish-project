import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import MainContext from "../contextApi/MainContext";

export default function useQuizList(category_id) {
  const [quizList, setQuizList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { user } = useContext(MainContext);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      let url = `${baseUrl}/quizzes/${category_id}`;
      if (user?.regNumber > 100 && user?.regNumber <= 200) {
        url = `${baseUrl}/quizzesM/${category_id}`;
      }
      try {
        const res = await fetch(url, {
          method: "get",
        });
        const data = await res.json();
        if (data === 401) {
          setIsError(true);
          setIsLoading(false);
          toast.error("পরীক্ষা শুরু হয়নি। অপেক্ষা করুন।");
        } else if (data === 402) {
          setIsError(true);
          setIsLoading(false);
          toast.error("পরীক্ষা শেষ। ধন্যবাদ।");
        } else setQuizList(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category_id, baseUrl, user?.regNumber]);

  const values = {
    quizList,
    isLoading,
    isError,
  };

  return values;
}
