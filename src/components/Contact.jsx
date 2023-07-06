import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen custom-img flex items-center justify-center  bg-fixed bg-center bg-cover"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-950 text-cyan-950">
            Contact
          </p>
          <p className="text-cyan-950 py-4">
            Submit the form below or drop me an email - email address
          </p>
        </div>
        <input
          className="bg-gray-50 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-50  "
          type="email"
          placeholder="Email"
          name="name"
        />
        <textarea
          className="bg-gray-50 p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-gray-50 border-2 border-cyan-950 bg-cyan-950 hover:bg-gray-50 hover:text-cyan-950   px-4 py-3 my-8 mx-auto flex items-center">
          Let's connect!
        </button>
      </form>
    </div>
  );
};

export default Contact;
