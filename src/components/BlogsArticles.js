import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const myURL = process.env.REACT_APP_URL;
const BlogsArticles = () => {
  const { data, error, loading } = useFetch(`${myURL}/api/blogs?populate=*`);
  const { data: Cdata, error: Cerror, loading: Cloading } = useFetch(
    `${myURL}/api/categories?populate=*`
  );

  if (loading || Cloading) return <p>Loading...</p>;
  if (error || Cerror) return <p>Error!!</p>;

  // Extract blog articles and categories from the data
  const articles = data?.data || [];
  const categoryList = Cdata?.data || [];

  return (
    <section className="text-gray-300 min-h-screen flex items-center font-mono">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-none mb-8 text-white text-center pt-40">
              Blog Articles
            </h2>
            <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
              {/* Sidebar */}
              <div className="w-full md:w-64 pt-8 flex flex-col space-y-5">
                {/* Popular Topic Section */}
                <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-10">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                    Categories list
                  </h3>
                  <ul className="space-y-4 list-disc list-inside">
                    {categoryList.length > 0 ? (
                      categoryList.slice(0, 3).map((category) => (
                        <li className="pt-3" key={category.id}>
                          <Link
                            to={`/categories/${category.id}`}
                            className="font-medium hover:underline hover:text-yellow-500"
                          >
                            {category.attributes.category_field}
                          </Link>
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
                          src={`${myURL}${article.attributes.coverImg.data.attributes.url}`}
                          alt={article.attributes.blogTitle}
                        />

                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                          {article.attributes.blogTitle}
                        </h3>
                        <span className="bg-amber-400 text-blue-900 text-l font-mono px-2.5 py-0.5 rounded">
                          {/* <button>{article.attributes.categories.data.attributes.category_field}</button> */}
                          <button>hello world</button>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsArticles;
