import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import BlogArticles from "../components/BlogsArticles";

const Blogs = () => {
  return (
    <div>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <BlogArticles></BlogArticles>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
