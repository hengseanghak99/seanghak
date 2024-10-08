import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const myURL = process.env.REACT_APP_URL;
const BlogsArticles = () => {
  const { data, error, loading } = useFetch(`${myURL}/api/blogs?populate=*`);
  
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const articlesPerPage = 8; // Number of articles per page

  // Extract blog articles and categories from the data
  const articles = data?.data || [];

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Get the articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Handle pagination click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="text-gray-300 min-h-screen flex items-center font-mono">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-none mb-8 text-white text-center pt-40">
              Blog Articles
            </h2>
            <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
              {/* Articles Section */}
              <div className="flex-1 space-y-8 pb-10">
                {currentArticles.length > 0 ? (
                  currentArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/blogs/${article.id}`}
                      className="block p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:border-yellow-500"
                    >
                      <div>
                        <img
                          className="w-full h-40 md:h-64 object-cover rounded-t-lg mb-4"
                          src={`${myURL}${article.attributes.coverImg.data.attributes.url}`}
                          alt={article.attributes.blogTitle}
                        />
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                          {article.attributes.blogTitle}
                        </h3>
                        <span className="bg-amber-400 text-blue-900 text-l font-mono px-2.5 py-0.5 rounded">
                          <button>{article.attributes.categories.data.attributes.category_field}</button>
                        </span>
                        <p className="text-gray-400 mb-4">
                          {new Date(
                            article.attributes.createdAt
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-gray-300">
                          {article.attributes.blogDesc}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400">No articles available</p>
                )}
              </div>
            </div>

            {/* Pagination Section */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === index + 1
                        ? "bg-yellow-500 text-gray-900"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsArticles;
