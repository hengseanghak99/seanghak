import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white p-4 fixed w-full z-10 h-14 font-mono">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center w-full md:w-auto">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-yellow-500 ml-auto"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:block md:w-auto ${isMenuOpen ? "bg-black" : "hidden"} md:flex md:justify-center md:bg-transparent`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className="hover:border-solid hover:border-2 hover:border-amber-400 rounded">
                <a
                  href="/"
                  className="block py-2 px-3 text-white rounded hover:text-green-500 md:border-0 md:p-0 md:text-4xl"
                >
                  Portfolio
                </a>
              </li>
              <li className="hover:border-solid hover:border-2 hover:border-amber-400 rounded">
                <a
                  href="/exed"
                  className="block py-2 px-3 text-white rounded hover:text-green-500 md:border-0 md:p-0 md:text-4xl"
                >
                  Ex&Ed
                </a>
              </li>
              <li className="hover:border-solid hover:border-2 hover:border-amber-400 rounded">
                <a
                  href="/blogs"
                  className="block py-2 px-3 text-white rounded hover:text-green-500 md:border-0 md:p-0 md:text-4xl"
                >
                  Blogs
                </a>
              </li>
              <li className="hover:border-solid hover:border-2 hover:border-amber-400 rounded">
                <a
                  href="/contact-me"
                  className="block py-2 px-3 text-white rounded hover:text-green-500 md:border-0 md:p-0 md:text-4xl"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
