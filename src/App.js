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
import QuizLayout from "./components/pages/subpage/quiz/QuizLayout";
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
            {/* Pages that only visible to users who hasn't completed quiz */}
            <Route
              path="/mujib-olympiad"
              element={
                <PublicOutlet>
                  <QuizPage />
                </PublicOutlet>
              }
            />
            <Route
              path="/form"
              element={
                <PublicOutlet>
                  <Form />
                </PublicOutlet>
              }
            />
            <Route
              path="/categories"
              element={
                <PublicOutlet>
                  <Category />
                </PublicOutlet>
              }
            />
            <Route
              path="/quiz/:id"
              element={
                <PublicOutlet>
                  <QuizLayout />
                </PublicOutlet>
              }
            />
            {/* Pages that only visible to users who completed quiz */}

            <Route
              path="/certificate"
              element={
                <PrivateOutlet>
                  <Certificate />
                </PrivateOutlet>
              }
            />
            <Route
              path="/download"
              element={
                <PrivateOutlet>
                  <Download />
                </PrivateOutlet>
              }
            />
          </Routes>
        </Layout>
      </ContextProvider>
    </Router>
  );
}

export default App;
