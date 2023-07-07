import React from "react";
import TennisGame from "../assets/projects/guess-their-ranking.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-cyan-950 bg-gray-50">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div classame="pb-4">
          <p className="heading">Work</p>
          <p className="py-6">
            These are some projects that I've been building recently:
          </p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${TennisGame})` }}
            className="shadow-lg shadow-gray-100 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-cyan-950 tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/leah-massey/Tennis-Ranking-Game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://main--animated-pixie-528dc3.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TennisGame})` }}
            className="shadow-lg shadow-gray-100 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-cyan-950 tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TennisGame})` }}
            className="shadow-lg shadow-gray-100 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-cyan-950 tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
