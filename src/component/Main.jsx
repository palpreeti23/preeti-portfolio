import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, time, transform } from "framer-motion";
import { i } from "framer-motion/client";

function Main() {
  const container = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        times: [0, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeIn",
      },
    },
  };

  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={items}
            className="uppercase text-sm tracking-widest text-gray-600"
          >
            LETS BUILD SOMETHING TOGETHER
          </motion.p>
          <motion.h1 variants={items} className="py-4 text-gray-700">
            Hi, Im <span className="text-[#5651e5]">Preeti</span>
          </motion.h1>
          <motion.h1 variants={items} className="py-2 text-gray-600">
            A Frontend Developer
          </motion.h1>
          <motion.p
            variants={items}
            className="py-4 text-gray-600 max-w-[70%] m-auto"
          >
            I am preeti, a skilled Frontend Web Developer. My expertise spans
            React, JavaScript, TailwindCSS, HTML, and CSS, enabling me to create
            captivating web applications that elevate businesses.
          </motion.p>
          <motion.div
            variants={items}
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
