import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/pages/About";
import Batch from "./components/pages/Batch";
import Contact from "./components/pages/Contact";
import Landing from "./components/pages/Landing";
import QuizPage from "./components/pages/QuizPage";
import ContextProvider from "./components/pages/contextApi/Provider";
import Catagory from "./components/pages/subpage/Catagory";
import Form from "./components/pages/subpage/Form";
import Quiz from "./components/pages/subpage/quiz/Quiz";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/mujib-olympiad" element={<QuizPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/online-batch" element={<Batch />} />
            <Route path="/form" element={<Form />} />
            <Route path="/catagory" element={<Catagory />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Layout>
      </Router>
    </ContextProvider>
  );
}

export default App;
