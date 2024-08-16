import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import BlogDetail from "../components/BlogDetail";

const BlogDetails = () => {
  return (
    <div>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <BlogDetail></BlogDetail>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
