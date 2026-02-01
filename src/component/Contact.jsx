import React, { useEffect } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import Preeti from "../assets/preeti-img.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("xzblbzao");

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
      },
    },
  };

  const mainDiv = {
    hidden: { y: 0 },
    hover: {
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };
  const divItems = {
    hidden: { y: 15 },
    hover: {
      y: 0,
      // transition: { type: "spring", stiffness: 300, damoing: 8 },
      transition: { duration: 0.5, ease: "esaeInOut" },
    },
  };

  return (
    <div id="contact" className="w-full lg:h-screen pt-14">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-[1240px] m-auto px-2 py-16 w-full "
      >
        <motion.p
          variants={items}
          className="text-xl tracking-widest uppercase text-[#5651e5]"
        >
          Contact
        </motion.p>
        <motion.h2 variants={items} className="py-4">
          Get In Touch
        </motion.h2>
        <motion.div variants={items} className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <motion.div
            variants={mainDiv}
            whileHover="hover"
            initial="hidden"
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
          >
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={Preeti}
                  alt="/"
                />
              </div>
              <div>
                <motion.h2 variants={divItems} className="py-2">
                  Preeti
                </motion.h2>
                <motion.p variants={divItems}>Frontend Developer</motion.p>
                <motion.p variants={divItems} className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </motion.p>
              </div>
              <div>
                <motion.p variants={divItems} className="uppercase pt-8">
                  Connect With Me
                </motion.p>
                <motion.div
                  variants={divItems}
                  className="flex items-center justify-between py-4"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link to={`https://www.linkedin.com/in/preeti-pal-dev/`}>
                      <FaLinkedinIn />
                    </Link>
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link to={`https://github.com/palpreeti23`}>
                      <FaGithub />
                    </Link>
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link to={`https://www.instagram.com/palpreeti05/`}>
                      <BsInstagram />
                    </Link>
                  </div>
                  <Link
                    to={`https://drive.google.com/file/d/1MTZ7ntYRi2KL6VQjEhE2hFk_dTfx2viV/view`}
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {state.succeeded ? (
                <div className="text-center mt-16">
                  <p className="text-red-600 text-xl font-semibold ">
                    Thanks for connecting!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      name="message"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <motion.button
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 0.93 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    className="w-full p-4 text-gray-100 mt-4"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
