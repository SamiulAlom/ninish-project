import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useQuizList(category_id) {
  const [quizList, setQuizList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/quizzes/${category_id}`, {
          method: "get",
        });
        const data = await res.json();
        if (data === "Failed") {
          setIsError(true);
          setIsLoading(false);
          toast.error("অনুগ্রহ করে অপেক্ষা করুন।");
        } else setQuizList(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category_id, baseUrl]);

  const values = {
    quizList,
    isLoading,
    isError,
  };

  return values;
}
