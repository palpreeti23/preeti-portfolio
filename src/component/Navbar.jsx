import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 left-0 w-full  shadow-xl z-[100] bg-white">
      <div className="flex justify-between h-20  items-center w-full px-2 2xl:px-16">
        <div className=" uppercase text-3xl font-bold  top-8 text-[#5651e5] font-charm ">
          <Link to="/">preetibuilds</Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>

            <Link to="/skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link to="/projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link to="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link
              to={`https://drive.google.com/file/d/1MTZ7ntYRi2KL6VQjEhE2hFk_dTfx2viV/view`}
            >
              <li className="ml-10 text-sm uppercase hover:border-b text-[#5651e5]">
                Resume
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "   fixed left-0 top-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className=" uppercase text-3xl font-bold  top-8 text-[#5651e5] font-charm ">
                preetibuilds
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link to="/">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Home
                </li>
              </Link>
              <Link to="/skills">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Skills
                </li>
              </Link>
              <Link to="/projects">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Contact
                </li>
              </Link>
              <Link
                to={`https://drive.google.com/file/d/13c0lNmBi4GaRc22k5yN9lRLboo_t84by/view?usp=sharing`}
              >
                <li
                  className="py-4 text-sm text-[#5651e5]"
                  onClick={() => setNav(false)}
                >
                  Resume
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e9]">
                Lets Connect
              </p>
              <div className="flex justify-between items-center py-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link to={`https://www.linkedin.com/in/preeti-pal-dev/`}>
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link to={`https://www.instagram.com/palpreeti05/`}>
                    <BsInstagram />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link to={`https://github.com/palpreeti23`}>
                    <AiFillGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link to={`https://x.com/Palpreeti05`}>
                    <AiOutlineTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
