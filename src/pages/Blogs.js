import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import BlogArticles from "../components/BlogsArticles";
import { Helmet } from 'react-helmet';

const Blogs = () => {
  return (
    <div>
         <Helmet>
         <meta charSet='utf-8'></meta>
          <title>Heng Seanghak</title>
          <meta name="description" content="welcome to my profilo" />
         </Helmet>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <BlogArticles></BlogArticles>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;

