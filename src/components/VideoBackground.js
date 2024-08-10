"use client";
import { useRef, useState, useEffect } from "react";

const VideoBackground = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [showVideo2, setShowVideo2] = useState(false);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    // Initially hide Video 2
    video2.style.display = "none";

    const handleVideo1End = () => {
      setShowVideo2(true);
      video2.style.display = "block"; // Show Video 2
      video2.play(); // Ensure Video 2 starts playing when it becomes visible
    };

    // Set up the timer to hide Video 1 and show Video 2 after 7 seconds
    const timer = setTimeout(() => {
      video1.style.display = "none"; // Hide Video 1
      handleVideo1End(); // Trigger the switch to Video 2
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-screen h-screen justify-center items-center">
      <video
        ref={video1Ref}
        className="flex justify-center items-center w-full h-full object-fill"
        autoPlay
        muted
      >
        <source src="/primary.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={video2Ref}
        className={`flex justify-center items-center w-full h-full object-fill transition-opacity duration-500 ${
          showVideo2 ? "block" : "hidden"
        }`}
        autoPlay
        muted
        loop
      >
        <source src="/init.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
