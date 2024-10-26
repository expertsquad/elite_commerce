import React from "react";
import Blurball from "./Blurball";

const BottomBlurBall = () => {
  return (
    <>
      <Blurball className="bg-[#52FF78] w-32 h-32  rounded-full filter-blur blur-[120px] absolute bottom-60 right-0" />
      <Blurball className="bg-[#52FF78] w-32 h-32  rounded-full filter-blur blur-[120px] absolute bottom-60 right-0" />
      <Blurball className="bg-[#FB8E48] w-32 h-32  rounded-full filter-blur blur-[120px] absolute bottom-[-140px] right-20" />
      <Blurball className="bg-[#FB8E48] w-32 h-32  rounded-full filter-blur blur-[120px] absolute bottom-0 right-20" />
    </>
  );
};

export default BottomBlurBall;
