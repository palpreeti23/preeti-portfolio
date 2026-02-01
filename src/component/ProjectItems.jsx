import React from "react";
import { Link } from "react-router-dom";
import { motion, scale } from "framer-motion";

function ProjectItems({ title, backgroundImg, tech, projectUrl }) {
  const container = {
    hidden: { scale: 1, rotateX: 0, rotateY: 0 },
    visible: {
      scale: 1.1,
      rotateX: 3,
      rotateY: 12,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const mainDiv = {
    hidden: { y: 7 },
    visible: {
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };
  const items = {
    hidden: { y: 7 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 300, damoing: 10 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] overflow-hidden"
    >
      <motion.img
        variants={container}
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <motion.div
        variants={mainDiv}
        className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <motion.h3
          variants={items}
          className="text-2xl text-white tracking-wider text-center"
        >
          {title}
        </motion.h3>
        <motion.p variants={items} className="pb-4 pt-2 text-white text-center">
          {tech}
        </motion.p>
        <Link to={projectUrl}>
          <motion.p
            variants={items}
            className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
          >
            More Info
          </motion.p>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default ProjectItems;
