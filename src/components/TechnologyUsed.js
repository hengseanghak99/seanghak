import React, { useState } from "react";
import reactLogo from "../image/tecnology_logo/react_logo.png";
import html5_logo from "../image/tecnology_logo/html5.png";
import css_logo from "../image/tecnology_logo/css.png";
import tailwind_logo from "../image/tecnology_logo/tailwind.png";
import javascript_logo from "../image/tecnology_logo/javascript.png";
import github_logo from "../image/tecnology_logo/github.png";

function technologyUsed() {
  return (
    <div className="text-neutral-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl leading-8 font-mono text-white">
          Technology use in this project.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={reactLogo}
            alt="reactlogo"
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={html5_logo}
            alt="htmlogo"
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={css_logo}
            alt="csslogo"
          />
          <div className="flex justify-center col-span-2 max-h-20 w-full object-contain lg:col-span-1">
            <img
              className="w-24 min-h-8 bg-slate-400"
              src={tailwind_logo}
              alt="Tailwind Logo"
            />
          </div>

          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={javascript_logo}
            alt="javascriptlogo"
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={github_logo}
            alt="githublogo"
          />
        </div>
      </div>
    </div>
  );
}
export default technologyUsed;
