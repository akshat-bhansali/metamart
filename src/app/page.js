"use client";
import { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import VideoBackground from "../components/VideoBackground";
import HomeButton from "@/components/HomeButton";

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
      <div className="relative w-screen h-full z-1">
        <VideoBackground />
      </div>
      <div className="absolute inset-0 z-10  flex h-full w-full justify-center items-center">
        <div className="flex flex-col justify-between h-full">
          <AnimatedText />
          {showMain && <HomeButton />}
        </div>
      </div>
    </div>
  );
}
