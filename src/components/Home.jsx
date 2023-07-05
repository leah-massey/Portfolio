import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center jsutify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full space-y-4">
        <div className="bg-gray-50 py-3 px-3">
          <div className="py-8 px-8 border-2 border-cyan-950">
            <p className="pb-4">Hello, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold  text-cyan-950">
              Leah Massey
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold  text-sky-800">
              I'm a Software Developer
            </h2>
            <p className=" pt-4 max-w-[700px]">
              I like problem solving, blending creativity with logic and
              thinking outside of the box.
            </p>
            <p className="max-w-[700px]">
              I build things and then I build them again, but better.
            </p>
          </div>
        </div>

        <div>
          <button className="bg-cyan-950 group text-gray-50  px-6 py-3 my-2 flex items-center hover:text-cyan-950 hover:bg-gray-50">
            View My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
