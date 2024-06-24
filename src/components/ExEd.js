import React from "react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const Body = () => {
  return (
    <div className="relative min-h-screen">
      <main className="flex-col justify-around py-8 md:py-16 font-mono">
        <section className="py-8 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-none mb-8 text-white text-center">
              Experience
            </h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <BriefcaseBusiness className="text-white" />
                </span>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                    Junior QA Tester
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Current
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    Tech Solutions Inc. - Jan 2020 to Present
                  </time>
                  <ul className="list-disc list-inside ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <li>
                      Led the QA team in developing and executing comprehensive
                      test plans and test cases for web and mobile applications.
                    </li>
                    <li>
                      Implemented automated testing frameworks using Selenium
                      and Appium, increasing test coverage by 50%.
                    </li>
                    <li>
                      Collaborated with development and product teams to
                      identify, log, and resolve defects in a timely manner.
                    </li>
                    <li>
                      Conducted performance testing using JMeter to ensure
                      applications met performance benchmarks.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <BriefcaseBusiness className="text-white" />
                </span>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-100">
                    QA Tester
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    Creative Agency - Jun 2017 to Dec 2019
                  </time>
                  <ul className="list-disc list-inside ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <li>
                      Performed functional, regression, and user acceptance
                      testing (UAT) on various web applications.
                    </li>
                    <li>
                      Developed and maintained manual and automated test scripts
                      to validate software functionality.
                    </li>
                    <li>
                      Worked closely with developers to reproduce and
                      troubleshoot issues, ensuring timely fixes.
                    </li>
                    <li>
                      Documented and communicated test results and defect
                      reports to stakeholders.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <BriefcaseBusiness className="text-white" />
                </span>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-100">
                    QA Intern
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    Startup Hub - Jan 2016 to May 2017
                  </time>
                  <ul className="list-disc list-inside ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <li>
                      Assisted in the creation and execution of test plans and
                      test cases for mobile and web applications.
                    </li>
                    <li>
                      Conducted manual testing to identify bugs and ensure
                      quality standards were met.
                    </li>
                    <li>
                      Collaborated with senior testers to learn best practices
                      in QA processes and tools.
                    </li>
                    <li>
                      Participated in daily stand-up meetings and contributed to
                      agile development methodologies.
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="py-8 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-none mb-8 text-white text-center">
              Education
            </h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <GraduationCap className="text-white" />
                </span>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                    Bachelor of Science in Computer Science
                    <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Graduated
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    University of Technology - Sept 2015 to Jun 2019
                  </time>
                  <ul className="list-disc list-inside ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <li>Graduated with Honors, GPA: 3.8/4.0</li>
                    <li>
                      Relevant Coursework: Software Testing and Quality
                      Assurance, Algorithms and Data Structures, Web
                      Development, Mobile Application Development
                    </li>
                    <li>
                      Capstone Project: Developed a comprehensive automated
                      testing suite for a web application, reducing bug reports
                      by 40%
                    </li>
                    <li>
                      Activities: Member of the Computer Science Club, Teaching
                      Assistant for Introduction to Programming course
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <GraduationCap className="text-white" />
                </span>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="mb-1 text-xl font-semibold text-gray-100">
                    Certification in QA Testing
                    <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Graduated
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    QA Testing Institute - Mar 2020 to Aug 2020
                  </time>
                  <ul className="list-disc list-inside ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <li>
                      Completed intensive program focusing on manual and
                      automated testing methodologies
                    </li>
                    <li>
                      Gained proficiency in tools such as Selenium, JMeter, and
                      TestRail
                    </li>
                    <li>
                      Final Project: Led a team in the creation of an automated
                      testing framework for a simulated e-commerce application
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Body;
