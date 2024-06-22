import React from "react";
import myImage from "../image/seanghak_profile.jpg";
import DownloadButton from "./DownloadButton";

const Body = () => {
  return (
    <div className="relative">
      <main className="flex-col justify-around py-16 font-mono">
        <section id="portfolio" className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center text-white">
              <div className="flex justify-center mb-16">
                <img
                  className="rounded-full w-96 h-96"
                  src={myImage}
                  alt="Kate Wolff's profile"
                />
              </div>
              <h6 className="font-medium text-lg md:text-2xl uppercase mb-8">
                QA Tester
              </h6>
              <h1 className="font-normal text-4xl md:text-7xl leading-none mb-8">
                MARN VANDA
              </h1>
              <p className="font-normal text-md md:text-xl mb-16">
                Insanity is doing the same things repeatedly and expected
                different results.
              </p>
              <DownloadButton></DownloadButton>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="p-10 border-b-2 border-white-500 text-gray-300 bg-white bg-opacity-10"
        >
          <h2 className="text-2xl font-bold mb-4">Projects</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Automated Testing Framework
            </h3>
            <p className="italic">Jan 2023 - Apr 2023</p>
            <p>
              Developed an automated testing framework using Selenium and TestNG
              for a web-based e-commerce application. The framework included
              comprehensive test cases for functional, regression, and load
              testing, significantly reducing manual testing efforts and
              improving bug detection efficiency.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Technologies Used: Selenium, TestNG, Java</li>
              <li>
                Key Achievements: Reduced testing time by 50%, improved test
                coverage by 40%
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Performance Testing Suite</h3>
            <p className="italic">Jul 2022 - Dec 2022</p>
            <p>
              Designed and implemented a performance testing suite using JMeter
              for a high-traffic web application. The project involved setting
              up test scenarios, analyzing performance metrics, and providing
              optimization recommendations to enhance application scalability
              and reliability.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Technologies Used: JMeter, Jenkins, Grafana</li>
              <li>
                Key Achievements: Identified and resolved performance
                bottlenecks, resulting in a 30% improvement in response times
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Mobile Application Testing
            </h3>
            <p className="italic">Feb 2022 - May 2022</p>
            <p>
              Conducted comprehensive testing for a mobile banking application
              using Appium. The project included functional, usability, and
              security testing to ensure a seamless and secure user experience
              across various devices and operating systems.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Technologies Used: Appium, Java, Android Studio</li>
              <li>
                Key Achievements: Enhanced application stability and security,
                decreased defect leakage by 20%
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Web Application Testing</h3>
            <p className="italic">Sep 2021 - Jan 2022</p>
            <p>
              Led the QA efforts for a customer relationship management (CRM)
              web application. The project included writing and executing test
              cases, automating regression tests, and ensuring compliance with
              industry standards.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Technologies Used: Selenium, TestNG, Jenkins</li>
              <li>
                Key Achievements: Improved test efficiency by 35%, ensured 100%
                compliance with industry standards
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Body;
