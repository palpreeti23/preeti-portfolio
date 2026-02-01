import React, { useEffect } from "react";
import js from "../assets/js-img.png";
import react from "../assets/react-img.png";
import tailwind from "../assets/tailwind-img.png";
import html from "../assets/html-img.png";
import css from "../assets/css.img.png";
import git from "../assets/git-img.png";
import github from "../assets/github-img.png";
import { motion, useAnimation } from "framer-motion";

function Skills() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3 },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        // // repeat: Infinity,
        // repeat: 3,
        // repeatDelay: 4,
      },
    },
  };

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
      >
        <motion.p
          variants={items}
          className="text-xl tracking-widest uppercase text-[#5651e5]"
        >
          Skills
        </motion.p>
        <motion.h2 variants={items}>What I Can Do</motion.h2>
        <motion.div
          variants={items}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={react}
                  className=" w-[64px] h-[64px] object-contain "
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ReactJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={js} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={html} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={tailwind}
                  className=" w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={css} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={git} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GIT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={github}
                  className=" w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Skills;
