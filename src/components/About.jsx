import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-50 text-cyan-950">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4"></div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>I’m a Software Engineer</p>
          </div>
          <div>
            <p className="py-2.5">
              I'm a career-switcher with over a decade’s worth of experience
              conceptualising, building and creative problem-solving. I enjoy
              applying my experiences to new challenges as well as continually
              discovering and embracing new concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
