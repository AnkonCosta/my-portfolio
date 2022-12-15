import React, { Component } from "react";
import { MotionAnimate } from "react-motion-animate";
import html from "../../../src/assets/html.png";
import css from "../../../src/assets/css.png";
import bootstrap from "../../../src/assets/bootstrap.png";
import js from "../../../src/assets/javascript-logo.png";
import react from "../../../src/assets/react-native-logo.png";
import mongodb from "../../../src/assets/mongodb.png";
import tailwind from "../../../src/assets/tailwind-css.png";
import node from "../../../src/assets/node.png";

const Skills = () => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <MotionAnimate>
      <div id="skills" className="w-11/12 mx-auto mb-6">
        <div>
          <h1 className="text-4xl my-6 font-semibold text-center text-[#EA0541]">
            My Skills
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-center text-white">
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={html} alt="" />

            <hr className="border border-black mb-2" />
            <h3 className="text-xl uppercase ">Html</h3>
          </div>
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={css} alt="" />
            <hr className="border border-black mb-2" />

            <h3 className="text-xl uppercase ">Css</h3>
          </div>
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={bootstrap} alt="" />
            <hr className="border border-black mb-2" />

            <h3 className="text-xl uppercase ">Bootstrap</h3>
          </div>
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={tailwind} alt="" />
            <hr className="border border-black mb-2" />

            <h3 className="text-xl uppercase ">Tailwind</h3>
          </div>
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={js} alt="" />
            <hr className="border border-black mb-2" />

            <h3 className="text-xl uppercase ">Javascript</h3>
          </div>
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={react} alt="" />
            <hr className="border border-black mb-2" />

            <h3 className="text-xl uppercase ">React</h3>
          </div>
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={node} alt="" />
            <hr className="border border-black mb-2" />

            <h3 className="text-xl uppercase ">Node Js</h3>
          </div>
          <div className="bg-[#1F2125]  shadow-xl rounded-2xl m-2 pb-5">
            <img className="w-3/6 m-auto py-3" src={mongodb} alt="" />
            <hr className="border border-black mb-2" />

            <h3 className="text-xl uppercase ">Mongodb</h3>
          </div>
        </div>
      </div>
    </MotionAnimate>
  );
};

export default Skills;
