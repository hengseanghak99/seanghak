import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../image/seanghak_logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { MdArticle, MdContactMail } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 top-0 bg-gray-800 ${
        navColour ? "shadow-lg" : ""
      } transition duration-300`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="brand" />
        </Link>
        <button
          onClick={() => updateExpanded(!expand)}
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden ${
            expand ? "bg-yellow-500" : ""
          } hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
          aria-controls="navbar-default"
          aria-expanded={expand ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${expand ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-mono flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 text-xl text-xl text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => updateExpanded(false)}
              >
               
                <AiOutlineUser className="inline-block mb-1" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/exed"
                className="block py-2 px-3 text-gray-900 text-xl text-xl text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => updateExpanded(false)}
              >
                <GrUserExpert className="inline-block mb-1" /> ExEd
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block py-2 px-3 text-gray-900 text-xl text-xl text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => updateExpanded(false)}
              >
                <MdArticle className="inline-block mb-1" /> Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-me"
                className="block py-2 px-3 text-gray-900 text-xl text-xl text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => updateExpanded(false)}
              >
                <MdContactMail className="inline-block mb-1" /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
