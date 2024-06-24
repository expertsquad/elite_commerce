"use client";
import React, { useState } from "react";

type IProgressBarProps = {
  progressValue?: number;
};

const ProgressBar = ({ progressValue }: IProgressBarProps) => {
  const [progress, setProgress] = useState(progressValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProgress(Number(value));
  };

  return (
    <div className="relative w-full h-6">
      <div className="relative w-full bg-black-10 rounded-full h-2">
        <div
          className="absolute top-0 left-0 bg-gradient-primary rounded-full h-2"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className="absolute -top-3 w-[30px] h-[30px]  bg-white rounded-full text-black-80 flex items-center justify-center text-xs select-none"
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
        className="w-full  hidden pointer-events-none"
      />
    </div>
  );
};

export default ProgressBar;
