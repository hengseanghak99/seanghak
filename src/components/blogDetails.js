import React from "react";

const BlogDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-20 text-white font-mono">
      <div className="max-w-5xl mx-auto ">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-4">Understanding React Hooks</h1>

        {/* Blog Metadata */}
        <div className="flex items-center justify-between text-white mb-6">
          <p className="text-sm">Published on August 14, 2024</p>
          <p className="text-sm">By Jane Doe</p>
        </div>

        {/* Blog Image */}
        <img
          src="https://via.placeholder.com/800x400"
          alt="Blog cover"
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* Blog Content */}
        <div className="prose lg:prose-xl text-white">
          <p>
            React Hooks were introduced in React 16.8 and have revolutionized
            the way developers build components in React. Hooks allow you to use
            state and other React features without writing a class.
          </p>

          <h2>Why Hooks?</h2>
          <p>
            Hooks solve a wide variety of seemingly unconnected problems in
            React that we’ve encountered over five years of writing and
            maintaining tens of thousands of components. Whether you’re learning
            React, use it daily, or even prefer a different library with a
            similar component model, you might recognize some of these problems.
          </p>

          <h3>Using the State Hook</h3>
          <p>
            The <code>useState</code> Hook is a function that allows you to have
            state variables in functional components. You pass the initial state
            to this function, and it returns a variable with the current state
            value (not necessarily the initial state) and another function to
            update this value.
          </p>

          {/* Example Code Block */}
          <pre className="bg-gray-600 rounded-lg p-4 overflow-x-auto">
            <code>
              {`const [count, setCount] = useState(0);

function increment() {
    setCount(count + 1);
}`}
            </code>
          </pre>

          <p>
            Now that you have an understanding of the basics, you can start
            implementing Hooks in your React projects. This will make your
            components more readable, reusable, and easier to maintain.
          </p>
        </div>

        {/* Back to Blog List Button */}
        <div className="mt-8">
          <a
            href="/blogs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Blog List
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
