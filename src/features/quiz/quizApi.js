import apiSlice from "../api/apiSlice";

const quizAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizCategories: builder.query({
      query: () => "quizzes",
    }),
    getQuizzes: builder.query({
      query: ({ data }) => `quizzes/${data}`,
    }),
  }),
});

export const { useGetQuizCategoriesQuery, useGetQuizzesQuery } = quizAPI;
