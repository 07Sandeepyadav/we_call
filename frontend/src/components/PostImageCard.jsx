import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function PostImageCard() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white relative">
      {/* Main Image */}
      <div className="relative flex justify-center items-center">
        <img
          className="w-[300px] h-[400px]  object-cover rounded-lg"
          src="/tree.jpg"
          alt="Post image"
        />
        {/* Follow Button */}
        <button
          className={` flex gap-1 absolute top-2 right-2 bg-teal-600 bg-opacity-20 text-white text-sm py-1 px-3 rounded-full shadow-lg hover:bg-teal-600 focus:outline-none`}
        >
          <FaPlus className="mt-1" />
          Follow
        </button>
      </div>
      <div className="pl-4  text-sm">
        <p>This is a very beautiful image</p>
      </div>
      {/* Profile Section */}
      <div className="flex items-center px-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="/profile_man.png"
            alt="Profile"
          />
        </div>

        {/* User Info */}
        <div className="ml-4 mb-1">
          <p className="text-gray-700 text-base font-semibold">pk_78</p>
          <p className="text-gray-500 text-sm">Level 3</p>
        </div>
      </div>
    </div>
  );
}
