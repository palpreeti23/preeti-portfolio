import React from "react";
import blog from "../assets/blog.png";
import { Link } from "react-router";
import { RiRadioButtonFill } from "react-icons/ri";

function Blog() {
  return (
    <div className="w-full mt-24">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <img
          src={blog}
          alt="/"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Blog App</h2>
          <h3>React JS / Tailwind / Appwrite</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3 className="text-2xl">Key Features</h3>
          <p>
            <strong>User Authentication:</strong> Secure authentication powered
            by Appwrite, allowing users to sign up, log in, and manage their
            accounts safely.
          </p>

          <p>
            <strong>Create, Edit & Delete Posts:</strong> Users can write new
            blog posts, update existing ones, and remove their content with full
            control.
          </p>

          <p>
            <strong>Search Posts:</strong> Implemented post search functionality
            to help users quickly find relevant content.
          </p>

          <p>
            <strong>Comments System:</strong> Users can comment on posts and
            delete their own comments for better interaction and moderation.
          </p>

          <p>
            <strong>Like & Dislike Posts:</strong> Interactive like and dislike
            feature to engage users and reflect post popularity.
          </p>

          <p>
            <strong>User Dashboard:</strong> Each user has a dedicated profile
            page to view and manage their own published posts.
          </p>

          <Link to={`https://github.com/palpreeti23/blog-project`}>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link to={`https://preeti-blog.netlify.app/login`}>
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
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Appwrite
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

export default Blog;
