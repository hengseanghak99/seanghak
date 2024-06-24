import React from "react";

const BlogsArticles = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center py-10 ">
      <div className="max-w-md w-full px-6 py-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl lg:text-2xl font-mono text-white mb-6">
          This page is under construction.
        </h2>
        <p className="text-base text-gray-300 font-mono mb-6">
          We're currently working on this page. Please check back later.
        </p>
        <a
          href="/"
          className="inline-block py-2 px-4 text-lg font-mono text-black border border-transparent rounded-md bg-yellow-300 hover:bg-yellow-500 transition duration-300 ease-in-out"
        >
          Back to Profile
        </a>
      </div>
    </div>
  );
};

export default BlogsArticles;
