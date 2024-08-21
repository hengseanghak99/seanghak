import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const url = 'https://profile-xst5.onrender.com'

const BlogsArticles = () => {
  const { data, error, loading } = useFetch(
    `${url}/api/blogs?populate=*`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;
  // Extract blog articles from the data
  const articles = data?.data || [];
  return (
    <section className="text-gray-300 min-h-screen flex items-center font-mono">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-none mb-8 text-white text-center pt-">
              Blog Articles
            </h2>
            <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
              {/* Sidebar */}
              <div className="w-full md:w-64 pt-8 flex flex-col space-y-5">
                {/* Popular Topic Section */}
                <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-10">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                    Popular Topic
                  </h3>
                  <ul className="space-y-4 list-disc list-inside">
                    {articles.length > 0 ? (
                      articles.slice(0, 3).map((article) => (
                        <li className="pt-3" key={article.id}>
                          <a
                            href="#"
                            className="font-medium hover:underline hover:text-yellow-500"
                          >
                            {article.attributes.blogTitle}
                          </a>
                        </li>
                      ))
                    ) : (
                      <p className="text-gray-400">No categories available</p>
                    )}
                  </ul>
                </div>
              </div>

              {/* Articles Section */}
              <div className="flex-1 space-y-8 pb-10">
                {articles.length > 0 ? (
                  articles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/blogs/${article.id}`}
                      className="block p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:border-yellow-500"
                    >
                      <div>
                        <img
                          className="w-full h-40 md:h-64 object-cover rounded-t-lg mb-4"
                          src={`${url}${article.attributes.coverImg.data.attributes.url}`}
                          alt={article.attributes.blogTitle}
                        />

                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                          {article.attributes.blogTitle}
                        </h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsArticles;
