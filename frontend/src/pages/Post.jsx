import React, { useState, useEffect } from "react";
import PostImageCard from "../components/PostImageCard";
import { FaPlus } from "react-icons/fa6";
import ImageUpload from "../components/ImageUpload";
import { GiCrossedBones } from "react-icons/gi";

export default function Post() {
  const [buttonClick, setButtonClick] = useState("follow");
  const [createPost, setCreatePost] = useState(false);

  // UseEffect to handle scroll lock when modal is open
  useEffect(() => {
    if (createPost) {
      // Lock the scroll when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Unlock the scroll when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Clean up by resetting the overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [createPost]);

  return (
    <div className="px-28 py-10 bg-gray-100 min-h-screen relative">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
        <div className="space-x-4">
          {/* Follow Button */}
          <button
            onClick={() => {
              console.log("Follow button clicked");
              setButtonClick("follow");
            }}
            className={`px-4 py-2  ${
              buttonClick === "follow"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700"
            } font-semibold rounded-lg hover:bg-teal-600 hover:text-white shadow-md focus:outline-none`}
          >
            Follow
          </button>

          {/* All Button */}
          <button
            onClick={() => {
              console.log("All button clicked");
              setButtonClick("all");
            }}
            className={`px-4 py-2 ${
              buttonClick === "all"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700"
            } font-semibold rounded-lg hover:bg-teal-600 hover:text-white shadow-md  focus:outline-none`}
          >
            All
          </button>

          {/* Create Post Button */}
          <button
            onClick={() => {
              console.log("Create Post button clicked");
              setCreatePost(true);
              //   setButtonClick("createpost");
            }}
            className={`px-4 py-2    font-semibold rounded-lg bg-gray-200 text-gray-700 hover:bg-teal-600 hover:text-white shadow-md  focus:outline-none`}
          >
            <span className="flex items-center gap-2">
              <FaPlus className="mt-0" />
              Create Post
            </span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div>
        {buttonClick === "all" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
            <PostImageCard />
          </div>
        )}
      </div>

      {/* Image Upload Modal */}
      {createPost && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg p-4">
            <button
              onClick={() => {
                setCreatePost(false);
              }}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <GiCrossedBones size={24} />
            </button>
            <ImageUpload />
          </div>
        </div>
      )}
    </div>
  );
}