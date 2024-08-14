import React from "react";
import myImage from "../image/seanghak_profile.jpg"; // Replace with the actual path to your image
import Type from "./Type";
import DownloadButton from "./DownloadButton";

import Photo from "/Users/seanghak/Desktop/h-hak/my-app/src/image/vanda_profile.jpeg";

const sampleArticles = [
  {
    id: 1,
    title: "The Future of Web Development",
    content:
      "Web development is rapidly evolving, with new technologies and frameworks emerging every year. This article explores the latest trends and what to expect in the future.",
    date: "August 10, 2024",
    image: Photo,
    link: "blo",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    content:
      "React hooks are a powerful feature that allows you to use state and other React features without writing a class. Learn how to use hooks and how they can simplify your code.",
    date: "August 15, 2024",
    image: Photo,
    link: "blo",
  },
  {
    id: 3,
    title: "Best Practices for Writing Clean Code",
    content:
      "Writing clean code is crucial for maintainability and readability. This article covers some best practices and tips to keep your codebase clean and organized.",
    date: "August 20, 2024",
    image: Photo,
    link: "blo",
  },
  {
    id: 4,
    title: "Best Practices for Writing Clean Code",
    content:
      "Writing clean code is crucial for maintainability and readability. This article covers some best practices and tips to keep your codebase clean and organized.",
    date: "August 20, 2024",
    image: Photo,
    link: "blo",
  },
  {
    id: 5,
    title: "Best Practices for Writing Clean Code",
    content:
      "Writing clean code is crucial for maintainability and readability. This article covers some best practices and tips to keep your codebase clean and organized.",
    date: "August 20, 2024",
    image: Photo,
    link: "blo",
  },
];

const sampleCategory = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Development",
  },
  {
    id: 3,
    title: "Cyber Security",
  },
  {
    id: 4,
    title: "QA Tester Analyze",
  },
];

const BlogsArticles = () => {
  return (
    <>
      <section className="text-gray-300 min-h-screen flex items-center font-mono">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center">
            <div className="max-w-5xl mx-auto w-full">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8 pt-20">
                Blog Articles
              </h2>
              <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 pt-8 flex flex-col space-y-5 ">
                  {/* Category Section */}
                  <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-10">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Category
                    </h3>
                    <ol class=" space-y-1 list-decimal list-inside">
                        {sampleCategory.length > 0 ? (
                          sampleCategory.map((article, index) => (
                            <li className="pt-3">
                              <a
                                key={index}
                                href="#"
                                class="font-medium hover:underline hover:text-yellow-500"
                              >
                                {article.title}
                              </a>
                            </li>
                          ))
                        ) : (
                          <p className="text-gray-400">
                            No categories available
                          </p>
                        )}
                      </ol>
                  </div>

                  {/* Topic Section */}
                  <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-10">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                      New Topic
                    </h3>

                    <ul class="space-y-4 list-disc list-inside ">
                      <ol class=" space-y-1 list-decimal list-inside">
                        {sampleArticles.length > 0 ? (
                          sampleArticles.map((article, index) => (
                            <li className="pt-3">
                              <a
                                key={index}
                                href="#"
                                class="font-medium hover:underline hover:text-yellow-500"
                              >
                                {article.title}
                              </a>
                            </li>
                          ))
                        ) : (
                          <p className="text-gray-400">
                            No categories available
                          </p>
                        )}
                      </ol>
                    </ul>
                  </div>

                  {/* New Topic Section */}
                  <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-10">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Popular Topic
                    </h3>
                    <ul class="space-y-4 list-disc list-inside ">
                      <ol class=" space-y-1 list-decimal list-inside">
                        {sampleArticles.length > 0 ? (
                          sampleArticles.slice(0,3).map((article, index) => (
                            <li className="pt-3">
                              <a
                                key={index}
                                href="#"
                                class="font-medium hover:underline hover:text-yellow-500"
                              >
                                {article.title}
                              </a>
                            </li>
                          ))
                        ) : (
                          <p className="text-gray-400">
                            No categories available
                          </p>
                        )}
                      </ol>
                    </ul>
                  </div>
                </div>

                {/* Articles Section */}
                <div className="flex-1 space-y-8">
  {sampleArticles.length > 0 ? (
    sampleArticles.map((article) => (
      <a
        key={article.id}
        href={article.link} // Replace `article.link` with the URL you want to redirect to
        className="block p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:border-yellow-500"
      >
        <div>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-40 md:h-64 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            {article.title}
          </h3>
          <p className="text-gray-400 mb-4">{article.date}</p>
          <p className="text-gray-300">{article.content}</p>
        </div>
      </a>
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
    </>
  );
};

export default BlogsArticles;
