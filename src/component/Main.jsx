import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LETS BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, Im <span className="text-[#5651e5]">Preeti</span>
          </h1>
          <h1 className="py-2 text-gray-600">A Frontend Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am preeti, a skilled Frontend Web Developer. My expertise spans
            React, JavaScript, TailwindCSS, HTML, and CSS, enabling me to create
            captivating web applications that elevate businesses.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://www.linkedin.com/in/preeti-pal-dev/`}>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://github.com/palpreeti23`}>
                <AiFillGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://x.com/Palpreeti05`}>
                <AiOutlineTwitter />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://www.instagram.com/palpreeti05/`}>
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
