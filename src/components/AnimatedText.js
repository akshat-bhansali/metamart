import React from "react";

const AnimatedText = () => {
  return (
    <div className="w-full h-full overflow-hidden z-10">
      <div className="absolute inset-0 animate-slide">
        <div className="flex justify-center mt-[10%] text-white text-8xl font-bold text-white-800">
          Welcome to metaverse
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
