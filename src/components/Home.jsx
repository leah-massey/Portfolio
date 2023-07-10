import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="marble-background ">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full space-y-4">
        <div className="bg-gray-50 py-3 px-3">
          <div className="border">
            <p className="pb-4">Hello, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold  text-cyan-950 tracking-wider pb-4">
              Leah Massey
            </h1>
            <p className=" pt-4 max-w-[700px]">
              I'm a creative problem solver who likes logical processes and
              learning new things.
            </p>
          </div>
        </div>

        <div>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <button className="bg-cyan-950 group text-gray-50  px-6 py-3 my-2 flex items-center hover:text-cyan-950 hover:bg-gray-50">
              View My Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
