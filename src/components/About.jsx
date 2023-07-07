import React from "react";

const About = () => {
  return (
    // <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
    //   <div className="flex flex-col justify-center items-center w-full h-full">
    //     <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
    //       <div className="sm:text-right pb-8 pl-4">
    //         <p className="text-4xl font-bold inline border-b-4 border-pink-600">
    //           About
    //         </p>
    //       </div>
    //       <div></div>
    //     </div>
    //     <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
    //       <div className="sm:text-right text-4xl font-bold">
    //         <p>
    //           Hi. I'm Sai Kumar, nice to meet you. Please take a look around.
    //         </p>
    //       </div>
    //       <div>
    //         <p>
    //           I am passionate about building excellent software that improves
    //           the lives of those around me. I specialize in creating software
    //           for clients ranging from individuals and small-businesses all the
    //           way to large enterprise corporations. What would you do if you had
    //           a software expert available at your fingertips?
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div name="about" className="w-full h-screen bg-gray-50 text-cyan-950">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              className="text-4xl font-bold inline b
            order-b-4 border-cyan-900"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello I'm Leah, nice to meet you.</p>
          </div>
          <div>
            <p>
              Hello 👋🏻, I’m a Software Engineer who likes details, finding
              patterns and embracing new concepts. I’m a graduate of Makers
              Academy with an appetite for continual learning. I have over a
              decade’s worth of experience conceptualising, building and
              creative problem-solving within the worlds of bespoke
              craftsmanship (tailoring & interior design) and production
              management. I thrive in environments where I can use both logic
              and creativity and am really excited that Software Engineering
              provides me with an endless opportunity for both.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
