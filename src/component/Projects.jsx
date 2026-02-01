import React from "react";
import ProjectItems from "./ProjectItems";
import preetify from "../assets/preetify.png";
import blog from "../assets/blog.png";
import { motion } from "framer-motion";

function Projects() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        // repeat: 1,
        // repeatDelay: 4,
      },
    },
  };
  return (
    <div id="projects" className="w-full lg:h-screen p-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-[1240px] mx-auto px-2 py-16"
      >
        <motion.p
          variants={items}
          className="text-xl tracking-widest uppercase text-[#5651e5]"
        >
          Projects
        </motion.p>
        <motion.h2 variants={items} className="py-4">
          What I&apos;ve Built
        </motion.h2>
        <motion.div variants={items} className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Preetify"
            backgroundImg={preetify}
            projectUrl="/preetify"
            tech={["Reactjs, tailwindcss"]}
          />
          <ProjectItems
            title="Blog"
            backgroundImg={blog}
            projectUrl="/blog"
            tech={["Reactjs, tailwindcss, Appwrite"]}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
