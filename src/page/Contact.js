import React from "react";
import ContactCard from "../component/ContactCard";

const Contact = () => {
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-3 py-0 mt-3">
        <div className="md:w-1/2 flex p-0 justify-center">
          <ContactCard />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl py-4 md:text-6xl font-bold mb-2">
            Contact
            <span className="text-emerald-900"> Us</span>
          </h2>
          <div className="bg-slate-300 w-full p-6 rounded-lg shadow-md">
            <form className="mx-auto">
              <div className="my-3 mx-auto">
                <input
                  type="text"
                  className="w-full mt-2 p-3 outline-none border-none rounded-lg"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="my-3 mx-auto">
                <input
                  type="text"
                  className="w-full mt-2 p-3 outline-none border-none rounded-lg"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="my-3 mx-auto">
                <textarea
                  className="w-full mt-2 p-4  h-34 outline-none border-none rounded-lg"
                  placeholder="Type Message"
                ></textarea>
              </div>

              <button className="w-full p-2 mt-2 bg-emerald-800 text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-emerald-400">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
