import React from "react";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Jest from "../assets/jest.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import HTML from "../assets/html.png";
import Github from "../assets/github-navy.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="marble-background">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="heading">Skills</p>
          <p className="py-4">
            These some of the technologies that I work with. I'm always
            interested in learning new things though
          </p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-cols-8 gap-4 text-center py-8">
          <div className="border-2 border-cyan-950 hover:scale-110 duration-500 pt-5 ">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className=" bg-gray-50 border-2 border-cyan-950 hover:scale-110 duration-500 pt-5">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="border-2 border-cyan-950 hover:scale-110 duration-500 pt-5">
            <img className="w-20 mx-auto" src={Node} alt="Node.js icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="border-2 border-cyan-950 hover:scale-110 duration-500 pt-5">
            <img className="w-20 mx-auto" src={Jest} alt="Jest icon" />
            <p className="my-4">Jest</p>
          </div>
          <div className="border-2 border-cyan-950 hover:scale-110 duration-500 pt-5">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="border-2 border-cyan-950 hover:scale-110 duration-500 pt-5">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="border-2 border-cyan-950 hover:scale-110 duration-500 pt-5">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="border-2 border-cyan-950 hover:scale-110 duration-500 pt-5">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
