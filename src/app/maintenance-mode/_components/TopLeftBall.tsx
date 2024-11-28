import React from "react";
import Blurball from "./Blurball";

const TopLeftBall = () => {
  return (
    <>
      <Blurball className="bg-[#10D4FF] w-32 h-32  rounded-full filter-blur blur-[120px] absolute top-[-140px] left-20" />
      <Blurball className="bg-[#10D4FF] w-32 h-32  rounded-full filter-blur blur-[120px] absolute top-0 left-20" />
      <Blurball className="bg-[#FB8E48] w-32 h-32  rounded-full filter-blur blur-[120px] absolute top-60 left-0" />
      <Blurball className="bg-[#FB8E48] w-32 h-32  rounded-full filter-blur blur-[120px] absolute top-60 left-0" />
    </>
  );
};

export default TopLeftBall;
