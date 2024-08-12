"use client";
import { useEffect, useState } from "react";
import AnimatedText from "../components/HomePage/AnimatedText";
import VideoBackground from "../components/HomePage/VideoBackground";
import HomeButton from "@/components/HomePage/HomeButton";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 6000);

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="relative">
      <div className="relative w-screen h-full">
        <VideoBackground />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col justify-around w-full h-full ">
          <AnimatedText />
          {showMain ? <HomeButton /> : <div></div>}
        </div>
      </div>
    </div>
  );
}
