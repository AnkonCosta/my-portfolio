import React from "react";
import banner from "../../../src/assets/banner.webp";
import resume from "../../assets/Resume (1).pdf";
import gf from "../../assets/giphy.gif";

import {
  FaAward,
  FaGithub,
  FaGraduationCap,
  FaHome,
  FaLinkedin,
} from "react-icons/fa";

const Resume = () => {
  return (
    <div id="about" class="w-11/12 mx-auto my-12">
      <div className="grid grid-cols-2 items-center ">
        <div class="text-white bg-[#1F2125] rounded-xl shadow-xl">
          <div class="card-body">
            <h5 class="text-xl my-2">Intro</h5>
            <h5 className="text-xl">
              Front-End Web Developer <br /> React Js
            </h5>
            <div class="flex items-center gap-5 text-lg">
              <FaGraduationCap></FaGraduationCap> <p>Programming Hero</p>
            </div>
            <div class="flex items-center gap-5 text-lg">
              <FaGraduationCap></FaGraduationCap>{" "}
              <p>Asian University of Bangladesh</p>
            </div>
            <div class="flex items-center gap-5 text-lg">
              <FaGraduationCap></FaGraduationCap>{" "}
              <p>St. Joseph's School and College</p>
            </div>
            <div class="flex items-center gap-5 text-lg">
              <FaHome></FaHome> <p> Dhaka, Bangladesh</p>
            </div>
            <div class="flex items-center gap-5 text-lg">
              <FaHome></FaHome> <p> Bonpara, Natore, Rajshahi</p>
            </div>
            <div class="flex items-center gap-5 text-lg">
              <FaGithub></FaGithub>{" "}
              <a href="https://github.com/ankoncosta" target="_blank">
                <p> Github</p>
              </a>
            </div>
            <div class="flex items-center gap-5 text-lg">
              <FaLinkedin></FaLinkedin>{" "}
              <a href="https://www.linkedin.com/in/ankoncosta/" target="_blank">
                <p>LinkedIn</p>
              </a>
            </div>

            <div class="grid gap-3 grid-cols-3">
              <div className="rounded-full">
                <p class="border rounded-xl text-center py-1">Coding</p>
              </div>
              <div className="rounded-full">
                <p class="border rounded-xl text-center py-1">Travelling</p>
              </div>
              <div className="rounded-full">
                <p class="border rounded-xl text-center py-1">Football</p>
              </div>
            </div>

            <div>
              <h5 class="my-4 text-xl">Certificates</h5>
              <div class="flex items-baseline gap-5 text-lg">
                <FaAward></FaAward>
                <p>Complete Web Development Course With Jhankar Mahbub</p>
              </div>
            </div>
          </div>
        </div>
        <div class=" h-screen">
          <div class="flex bg-[#212428] text-white p-10">
            <div class="mb-auto mt-auto ">
              <h1 class="text-3xl font-semibold text-[#EA0541] uppercase">
                About me
              </h1>
              <p class="font-semibold mb-5">Front-End Web Developer</p>
              <p className="text-lg">
                I am Ankon Costa, a Front-End Web Developer. I have done several
                projects on React js. I have been learning these since last six
                months. I am a quick learner, and passionate about my work. I
                have the willingness to adopt to new a technology if needed.{" "}
                <br /> I love to take on challenges and am always passionate
                about my work, which helps me learn something new. Throughout
                these days, I learned a lot of things working on different
                projects of different requirements.
              </p>
              <a href={resume} download="Resume">
                <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
    </div>
  );
};

export default Resume;
