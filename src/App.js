import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";
import Layout from "./components/Layout";
import About from "./components/pages/About";
import Batch from "./components/pages/Batch";
import Contact from "./components/pages/Contact";
import Landing from "./components/pages/Landing";
import QuizPage from "./components/pages/QuizPage";
import Category from "./components/pages/subpage/Category";
import Certificate from "./components/pages/subpage/Certificate";
import Download from "./components/pages/subpage/Download";
import Form from "./components/pages/subpage/Form";
import Quiz from "./components/pages/subpage/quiz/Quiz";
import ContextProvider from "./contextApi/Provider";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/online-batch" element={<Batch />} />
            {/* Pages that only */}
            <Route path="/*" element={<PublicOutlet />}>
              <Route path="mujib-olympiad" element={<QuizPage />} />
              <Route path="form" element={<Form />} />
              <Route path="categories" element={<Category />} />
              <Route path="quiz/:id" element={<Quiz />} />
            </Route>
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="certificate" element={<Certificate />} />
            </Route>
            <Route path="/download" element={<Download />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </Router>
  );
}

export default App;
