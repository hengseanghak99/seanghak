import React from "react";
import { BriefcaseBusiness, GraduationCap, Library } from "lucide-react";

const Body = () => {
  return (
    <div className="relative min-h-screen pt-10">
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
                <div className="bg-stone-600 p-6 rounded-lg shadow-md">
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                    QA Tester
                    <span className="bg-amber-400	 text-blue-900 text-sm font-mono ml-3 px-2.5 py-0.5 rounded">
                      Current
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-amber-300">
                    BENITEN CO., LTD | Sep 2021 - Present
                  </time>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-200">
                    <li>
                      Developing and executing comprehensive test plans and test
                      cases for web and mobile applications.
                    </li>
                    <li>
                      Collaborated with developer and product manager to
                      identify, log, and resolve defects or feeback in a timely
                      manner.
                    </li>
                    <li>
                      Testing follows the test case document and detects
                      unexpected cases (Which may contain errors to ensure
                      quality.)
                    </li>
                    <li>
                      Conducted performance testing using JMeter to ensure
                      applications met performance well.
                    </li>
                    <li>
                      Test with Mobile App, Desktop App, and Web application
                    </li>
                    <li>
                      Implemented automated testing frameworks using Playwright
                      and API testing (MQTT,POSTMAN).
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <BriefcaseBusiness className="text-white" />
                </span>
                <div className="bg-stone-600 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-100">
                    User Acceptance Testing
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-amber-300 ">
                    OONE TECHNOLOGY | Sep 2020 - Sep 2021
                  </time>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-200">
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
                      reports to projeact manager or sometime clients.
                    </li>
                    <li>
                      {" "}
                      Participated in daily stand-up meetings and contributed to
                      agile development methodologies.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <BriefcaseBusiness className="text-white" />
                </span>
                <div className="bg-stone-600 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-100">
                    Sale Outdoor
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-amber-300">
                    Cambodian SingMeng Telemedia Co.,Ltd. | May 2020 - Sep 2020
                  </time>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-200">
                    <li>
                      Analyzed sales data to identify trends and opportunities,
                      contributing to the development of effective sales
                      strategies.
                    </li>
                    <li>
                      Handled customer inquiries and provided product
                      information, enhancing customer satisfaction and loyalty.
                    </li>
                    <li>
                      Received commendation for outstanding customer service and
                      relationship building in outdoor sales role.
                    </li>
                    <li>
                      Communication, teamwork, and problem-solving abilities are
                      crucial in sales roles.
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
                <div className="bg-stone-600 p-6 rounded-lg shadow-md">
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                    Bachelor of Science in Computer Science
                    <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Graduated
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-amber-300">
                    Royal University of Phnom Penh | 2017 - 2021
                  </time>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-200">
                    <li>Graduated with Honors, GPA: 2.9/4.0</li>
                    <li>
                      Studied Software Testing and Quality Assurance, Algorithms
                      and Data Structures, Web Development, Mobile Application
                      Development
                    </li>
                    <li>
                      Activities: Did research Iot project "SMOKE DETECTING"
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <GraduationCap className="text-white" />
                </span>
                <div className="bg-stone-600 p-6 rounded-lg shadow-md">
                  <h3 className="mb-1 text-xl font-semibold text-gray-100">
                    IEAP (INTENSIVE ENGLISH FOR ACADEMIC PURPOSES)
                    <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Graduated
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-amber-300">
                    Pannasastra University of Cambodia. | 2019 - 2020
                  </time>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-200">
                    <li>
                      I studied IEAP program to improve my English skills so
                      that I will be fully prepared to enter university and be
                      able to study any subjects with English as the language of
                      instruction.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900">
                  <GraduationCap className="text-white" />
                </span>
                <div className="bg-stone-600 p-6 rounded-lg shadow-md">
                  <h3 className="mb-1 text-xl font-semibold text-gray-100">
                    TRAINING CURSE
                    <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Graduated
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-amber-300">
                    Ant Training. | 2017 - 2018
                  </time>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-200">
                    <li>I studied basic C/C++ and OOP concept</li>
                    <li>
                      Web development at ANT Training. (HTML,CSS,JAVACRIPT)
                    </li>
                  </ul>
                  <time className="block mb-2 text-sm font-normal leading-none text-amber-300 pt-6">
                    Udmey (company course) | 2021 - Present
                  </time>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-200">
                    <li>Completed course "Software Testing Bootcamp"</li>
                    <li>
                      Completed course "Playwright: Web Automation Testing"
                    </li>
                    <li>
                      Completed course "Asana: Project Management on Asana"
                    </li>
                    <li className="text-yellow-300 underline underline-offset-1">
                      Studyinig full stack developer
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
