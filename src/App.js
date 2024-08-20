import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailMe from "./pages/EmailMe";
import HomePage from "./pages/HomePage";
import ExEdPage from "./pages/ExEdPage";
import NotFound from "./pages/NotFound"
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import useFetch from "./hooks/useFetch";

const App = () => {
let {data,error,loading} = useFetch('http://localhost:1337/api/blogs?populate=*');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-me" element={<EmailMe />} />
        <Route path="/exed" element={<ExEdPage />} />
        <Route path="/blogs" element={<Blogs blogs={data?data:""}/>} />
        <Route path="/blogs/:id" element={<BlogDetails  />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;

