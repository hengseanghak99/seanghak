import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailMe from "./pages/EmailMe";
import HomePage from "./pages/HomePage";
import ExEdPage from "./pages/ExEdPage";
import NotFound from "./pages/NotFound"
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-me" element={<EmailMe />} />
        <Route path="/exed" element={<ExEdPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;

