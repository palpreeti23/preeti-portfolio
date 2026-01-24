import React from "react";
import ProjectItems from "./ProjectItems";
import preetify from "../assets/preetify.png";
import blog from "../assets/blog.png";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
