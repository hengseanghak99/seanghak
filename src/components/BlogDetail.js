import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    "https://profile-xst5.onrender.com/api/blogs?populate=*"
  );

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
  const { blogTitle, blogDesc, blogContent, coverImg } = article.attributes;

  return (
    <div className="container mx-auto px-4 py-8 pt-20 text-white font-mono">
      <div className="max-w-5xl mx-auto bg-gray-800 p-10">
        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4">{blogTitle}</h1>

        {/* Blog Metadata */}
        <div className="flex items-center justify-between text-white mb-6 ">
          <p className="text-sm">
            Published on{" "}
            {new Date(article.attributes.createdAt).toLocaleDateString()}
          </p>
          <p className="text-sm">{article.attributes.authur}</p>
        </div>

        {/* Blog Image */}
        <img
         src={`https://profile-xst5.onrender.com${article.attributes.coverImg.data.attributes.url}`} alt={article.attributes.blogTitle}
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* Blog Content */}
        <div className="flex flex-col text-white mb-6">
          {blogContent.map((contentBlock, index) => (
            <p key={index} className="mb-4">
              {contentBlock.children.map((text, textIndex) => (
                <span key={textIndex}>{text.text}</span>
              ))}
            </p>
          ))}
        </div>
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
