import React from "react";
import myImage from "../image/seanghak_profile.jpg"; // Replace with the actual path to your image
import Type from "./Type";
import DownloadButton from "./DownloadButton";

function Home() {
  return (
    <>
      <section
        className="text-gray-300 min-h-screen flex items-center"
        id="home"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className=" mx-auto max-w-7xl px-6 lg:px-8">
              <div className="py-20 font-mono">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold">
                  I'M <strong className="text-blue-500">Heng Seanghak</strong>
                </h1>
                <div className="mt-8 text-4xl text-left text-orange-300">
                  <Type />
                </div>
                <div className="pt-10">
                <DownloadButton></DownloadButton>
                </div>
              </div>
             
            </div>
            <div className="w-full md:w-5/12">
              <div className="text-center text-white">
                <div className="flex justify-center mb-16">
                  <img
                    className="rounded-full w-96 h-96"
                    src={myImage}
                    alt="Heng Seanghak's profile"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col item-center justify-center">
            <p className="text-center text-white font-mono text-md md:text-xl mb-16">
              Insanity is doing the same things repeatedly and expected
              different results.
            </p>
          </div>
        </div>
      </section>
      <section class="font-mono text-gray-300 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-2xl font-bold mb-4">About Me</h2>

        <div class="mb-6">
          <p class="text-base md:text-lg lg:text-xl">
            {" "}
            Hi everyone, I'm Heng Seanghak, a QA Tester from Kompong Cham,
            Cambodia. With 3 years of experience, I specialize in both automated
            and manual software testing. I've tested software for the government
            (EDC, SWMA, Siem Reap government) and various overseas projects. I
            am skilled in using automated testing tools like Ranorex and
            Playwright and have some experience in web and mobile development. I
            also enjoy coding and am currently learning to be a Full Stack
            Developer. I'm passionate about my work and eager to keep learning!
          </p>
          <h2 class="text-2xl  mt-8 mb-4 underline">Technical Skills</h2>
          <ul class="list-disc list-inside pl-4 md:pl-6 lg:pl-8">
            {" "}
            <li>
              Testing: Manual & Automation (Playwright, Ranorex, JMeter,
              Postman)
            </li>
            <li>Defect Tracking: (Gitlab,Asana)</li>
            <li>Design tool: Figma, Photoshop</li>
            <li>Communication tool: Slack , Telegram</li>
            <li>SDLC: (Agile, Waterfall)</li>
            <li>Programming: (Python, JavaScript, HTML, CSS)</li>
          </ul>

          <h2 class="text-2xl mt-8 mb-4 underline">Soft Skills</h2>
          <ul class="list-disc list-inside pl-4 md:pl-6 lg:pl-8">
            {" "}
            <li>Problem Solving & Analytical Thinking</li>
            <li>Attention to Detail</li>
            <li>Communication</li>
            <li>Collaboration</li>
          </ul>

          <h2 class="text-2xl mt-8 mb-4 underline">Bonus</h2>
          <ul class="list-disc list-inside pl-4 md:pl-6 lg:pl-8">
            {" "}
            <li>I've some knowledge about:</li>
            <li>Web Development (Python, JavaScript, HTML, CSS, mySQL)</li>
            <li>Basic Mobile Development (Flutter / React Native)</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
