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
import 'ckeditor5/ckeditor5.css';

const App = () => {
let {data,error,loading} = useFetch('https://profile-xst5.onrender.com/api/blogs?populate=*');

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



