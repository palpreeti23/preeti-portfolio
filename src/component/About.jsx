import React from "react";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            explicabo totam sapiente. Qui dignissimos dolorem nihil pariatur
            quas placeat amet sequi, repellat quam sed minus asperiores itaque,
            nisi nemo dolore!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            explicabo totam sapiente. Qui dignissimos dolorem nihil pariatur
            quas placeat amet sequi, repellat quam sed minus asperiores itaque,
            nisi nemo dolore!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center  hover:scale-105 ease-in duration-300  ">
          <img src={preeti} alt="preeti" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
