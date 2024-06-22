import React from "react";

const Error404 = () => {
  return (
    <div className="text-[#444] m-0 font-normal text-[14px] leading-[20px] font-[Arial,Helvetica,sans-serif] h-full bg-white">
      <div className="h-auto min-h-full">
        <div className="text-center w-[800px] ml-[-400px] absolute top-[30%] left-[50%]">
          <h1 className="m-0 text-[150px] leading-[150px] font-bold">404</h1>
          <h2 className="mt-[20px] text-[30px]">Forbidden</h2>
          <p>Oop!! I feel that you come in the wrong place</p>
          <div>
            <a href="/contact-me" className="block py-2 px-3 text-gray-400 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-amber-300 dark:hover:text-white md:dark:hover:bg-transparent md:text-2xl">
              back to my Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
