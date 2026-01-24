import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { Link } from "react-router";
import preetify from "../assets/preetify.png";

function Preetify() {
  return (
    <div className="w-full mt-24">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <img
          src={preetify}
          alt="/"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Preetify App</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3 className="text-2xl">Key Features</h3>
          <p>
            <strong>User Authentication & Authorization:</strong>
            Implemented robust user authentication with role-based authorization
            for secure access control
          </p>
          <p>
            <strong>Search, Filter & Sort:</strong>
            Implemented efficient product search, filtering, and sorting
            functionalities for enhanced user convenience
          </p>
          <p>
            <strong>Shopping Cart & Wishlist:</strong>
            Developed a user-friendly cart and wishlist system for a seamless
            shopping experience
          </p>
          <p>
            <strong> Address Management:</strong>
            Streamlined address handling to facilitate smooth order processing
            and accurate deliveries.
          </p>

          <Link to={`https://github.com/palpreeti23/e-commerce`}>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link to={`https://preetify.netlify.app/`}>
            <button className="px-8 py-2 mt-4">Live</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>
            </div>
          </div>
        </div>
        <Link to="/projects">
          <p className=" cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default Preetify;
