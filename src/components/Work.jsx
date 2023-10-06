import React from "react";
import TennisGame from "../assets/projects/guess-their-ranking.png";
import TennisGameII from "../assets/projects/tennis.png";
import CreativeProjectPlanner from "../assets/projects/creative-project-planner.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-cyan-950 bg-gray-50 py-20 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div classame="pb-4">
          <p className="heading ">Work</p>
          <p className="py-6">
            These are some projects that I've been building recently:
          </p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div
              style={{ backgroundImage: `url(${CreativeProjectPlanner})` }}
              className="shadow-lg shadow-gray-100 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/leah-massey/Creative-Project-Planner"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="work-button">Code</button>
                  </a>
                  <a
                    href="https://creative-project-planner.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="work-button">Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="pt-6 text-lg font-bold">Creative Project Planner</h1>
            <p className="pt-3">
              A platform built in React where I can list, categorize and filter
              my creative projects. Tailwind styling and session persistence
              used to maintain a user's list.
            </p>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${TennisGame})` }}
              className="shadow-lg shadow-gray-100 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/leah-massey/Tennis-Ranking-Game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="work-button">Code</button>
                  </a>
                  <a
                    href="https://main--animated-pixie-528dc3.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="work-button">Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="pt-6 text-lg font-bold">Tennis Ranking Game</h1>
            <p className="pt-3">
              A game built using Javascript where players must guess the ranking
              of the top 20 female tennis players.
            </p>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${TennisGameII})` }}
              className="shadow-lg shadow-gray-100 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/leah-massey/Tennis-Ranking-Game-II"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="work-button">Code</button>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="pt-6 text-lg font-bold">Tennis Ranking Game II</h1>
            <p className="pt-3">
              A re-build of Tennis Ranking Game: same, same, but better - with
              more functionality such as session persistence 💪🏻✨. Built in
              React using TDD and OOP and styled using Tailwind. This is a work
              in progress(!) where I'm currently adding login features among
              other things. 🛠️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
