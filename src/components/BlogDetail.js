import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import myImage from "../image/seanghak_user_profile.jpg";

const myURL = process.env.REACT_APP_URL;

const BlogDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`${myURL}/api/blogs?populate=*`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;

  // Extract articles from the data
  const articles = data?.data || [];
  const article = articles.find((article) => article.id === parseInt(id)); // Find the article by id

  // If no article is found, return a message
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 pt-20 text-white font-mono">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Link
            to="/blogs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Blog List
          </Link>
        </div>
      </div>
    );
  }

  // Extract article details from API response
  const { blogTitle, CKE, categories } = article.attributes;
  return (
    <div className="container mx-auto px-4 py-8 pt-20 text-white font-mono">
      <div className="max-w-5xl mx-auto bg-gray-700 p-10">
        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4">{blogTitle}</h1>
        {/* Blog Metadata */}
        <div className="flex flex-col md:flex-row justify-between border-t-2 border-green-500 my-5 pt-5 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row justify-between text-white">
            <div className="flex flex-row items-center text-white text-l font-mono">
              <img
                className="rounded-full w-10 h-10 object-cover mt-1"
                src={myImage}
                alt="Profile"
              />
              <div className="ml-3">
                <p className="text-sm font-thin">Author</p>
                <a href="/">
                  <p className="font-bold transition-transform transform hover:scale-105 hover:border-yellow-500">
                    {article.attributes.authur}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between text-white mb-6 text-center md:text-right">
            <span className="bg-amber-400 text-blue-900 text-l font-mono px-2.5 py-0.5 rounded inline-block">
              <button className="w-full">
              {categories.data.attributes.category_field}
              </button>
            </span>
            <p className="text-sm">
              Published on{" "}
              {new Date(article.attributes.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Blog Image */}
        <img
          src={`${myURL}${article.attributes.coverImg.data.attributes.url}`}
          alt={blogTitle}
          className="w-full h-auto rounded-lg mb-6"
        />
        {/*Blog content*/}
        <div
          className="prose max-w-none prose-img:rounded-xl prose-a:text-white prose-headings:text-white prose-p:text-white prose-blockquote:text-white prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: CKE }}
        />

        {/* Back to Blog List Button */}
        <div className="mt-8">
          <Link
            to="/blogs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Blog List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
