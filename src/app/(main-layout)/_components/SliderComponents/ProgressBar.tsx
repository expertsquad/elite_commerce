"use client";
import React, { useState, useEffect } from "react";

type IProgressBarProps = {
  progressValue?: number;
};

const ProgressBar = ({ progressValue }: IProgressBarProps) => {
  const [progress, setProgress] = useState(progressValue);

  useEffect(() => {
    setProgress(progressValue);
  }, [progressValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProgress(Number(value));
  };

  return (
    <div className="relative w-[96%] h-3">
      <div className="relative w-full bg-black-10 rounded-full h-1.5">
        <div
          className="absolute top-0 left-0 bg-gradient-primary rounded-full h-1.5 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className="absolute md:-top-3 -top-2 md:w-[30px] w-[25px] md:h-[30px] h-[25px] bg-white rounded-full text-black-80 text-[10px] flex items-center justify-center select-none transition-all duration-300"
        style={{
          left: `calc(${progress}% - 10px)`,
          border: "1.5px solid #1A69B3",
        }}
      >
        {progress ? progress : 0}%
      </div>
      <input
        type="range"
        value={progress}
        min="0"
        max="100"
        onChange={handleInputChange}
        className="w-full hidden pointer-events-none"
      />
    </div>
  );
};

export default ProgressBar;
