import React from "react";
const BlogsArticles = () => {
  return (
    <div className="flex flex-col h-screen py-10">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
      <div
        className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
          px-6 py-10 sm:px-10 sm:py-6 
         border-2 border-white-500 rounded-lg shadow-md lg:shadow-lg"
      >
        <h2 className="text-center font-mono text-3xl lg:text-2xl text-white">
          Page not yet prepare back to 
        <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-amber-300 dark:hover:text-white md:dark:hover:bg-transparent md:text-2xl underline">
             profile
            </a>
        </h2>
      </div>
    </div>
  </div>
  );
};

export default BlogsArticles;
