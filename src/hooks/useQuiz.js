import { useEffect, useState } from "react";

export default function useQuizList(category_id) {
  const [quizList, setQuizList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}/quizzes/${category_id}`, {
          method: "get",
        });
        const data = await res.json();
        setQuizList(data);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [category_id, baseUrl]);

  const values = {
    quizList,
    isLoading,
    isError,
  };

  return values;
}
