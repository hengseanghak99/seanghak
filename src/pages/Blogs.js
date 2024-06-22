import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import BlogArticles from "../components/BlogsArticles";
import { SpeedInsights } from '@vercel/speed-insights/next';

const Blogs = () => {
  return (
    <div>
      <SpeedInsights></SpeedInsights>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <BlogArticles></BlogArticles>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;

