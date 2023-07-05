import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center jsutify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="bg-orange-50 py-4 px-4">
          <div className="py-8 px-8 border-2 border-cyan-950 text-cyan-950">
            <p className="pb-4">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold">Leah Massey</h1>
            <h2 className="text-4xl sm:text-7xl font-bold">
              I'm a Software Developer
            </h2>
            <p className=" py-4 max-w-[700px]">
              I like problem solving, thinking outside the box creating,
              building, building again (but better) and blending creativity with
              logic.
            </p>
          </div>
        </div>

        <div>
          <button>
            View Work
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
