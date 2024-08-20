import React from "react";
import { useParams, Link } from "react-router-dom";
import { sampleArticles } from "../data/data";

const BlogDetail = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const article = sampleArticles.find((article) => article.id === parseInt(id)); // Find the article by id

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

  return (
    <div className="container mx-auto px-4 py-8 pt-20 text-white font-mono">
      <div className="max-w-5xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        {/* Blog Metadata */}
        <div className="flex items-center justify-between text-white mb-6">
          <p className="text-sm">Published on {article.date}</p>
          <p className="text-sm">By Jane Doe</p>
        </div>

        {/* Blog Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-auto rounded-lg mb-6"
        />
         <div className="flex items-center text-white mb-6">
          <p>{article.content}</p>
         
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
