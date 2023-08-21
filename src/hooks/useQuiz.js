import { useEffect, useState } from "react";

export default function useQuizList(category_id) {
  const [quizList, setQuizList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        // const res = await fetch(`${baseUrl}/quizzes/${category_id}`, {
        //   method: "get",
        // });
        // const data = await res.json();
        setQuizList([
          {
            id: 2,
            options: [
              {
                id: 5,
                title: "Hypertext Machine language",
                isCorrect: false,
              },
              {
                id: 6,
                title: "Hypertext and links markup language",
                isCorrect: false,
              },
              {
                id: 7,
                title: "Hypertext Markup Language",
                isCorrect: true,
              },
              {
                id: 8,
                title: "Hightext machine language",
                isCorrect: false,
              },
            ],
            category: {
              name: "web",
            },
            question: "What does HTML stand for?",
          },
          {
            id: 3,
            options: [
              {
                id: 9,
                title: "Hypertext Machine language",
                isCorrect: false,
              },
              {
                id: 10,
                title: "Hypertext and links markup language",
                isCorrect: false,
              },
              {
                id: 11,
                title: "Hypertext Markup Language",
                isCorrect: true,
              },
              {
                id: 12,
                title: "Hightext machine language",
                isCorrect: false,
              },
            ],
            category: {
              name: "web",
            },
            question: "What does HTML stand for?",
          },
        ]);
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
