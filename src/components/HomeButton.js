"use client";
import { useRouter } from "next/navigation";
import React from "react";

const HomeButton = () => {
  const router = useRouter();

  const handleNavigate = () => {
    console.log("Navigating to /login");
    router.push("/login"); // Replace with your target route
  };

  return (
    <div className="flex justify-center items-center h-fit z-5">
      <button
        onClick={() => {
          handleNavigate();
        }}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-transparent rounded-md group-hover:bg-opacity-0">
          Get Started
        </span>
      </button>
    </div>
  );
};

export default HomeButton;
