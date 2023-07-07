import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img pt-20"
    >
      <div className="w-[1000px] mx-auto px-8 flex flex-col justify-center h-full space-y-4">
        <div className="bg-gray-50 py-3 px-3">
          <div className="border">
            <form
              method="POST"
              action="https://getform.io/f/295482b2-2034-484b-99cc-faae97e948ee"
              className="flex flex-col max-w-[1000px] w-full"
            >
              <div className="pb-8">
                <p className="heading">Contact</p>
                <p>Please get in touch!</p>
              </div>
              <input
                className="bg-gray-100 p-2"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="my-4 p-2 bg-gray-100  "
                type="email"
                placeholder="Email"
                name="name"
              />
              <textarea
                className="bg-gray-100 p-2"
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="text-gray-50 border-2 border-cyan-950 bg-cyan-950 hover:bg-gray-50 hover:text-cyan-950   px-4 py-3 my-8 mx-auto flex items-center">
                Let's connect!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
