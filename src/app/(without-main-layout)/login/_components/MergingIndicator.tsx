import CustomLoader from "@/Components/CustomLoader";
import React from "react";

const MergingIndicator = () => {
  return (
    <div className="absolute bg-white-transparent z-50 h-dvh w-dvw flex items-center justify-center">
      <div className="flex items-center ">
        <span className="text-2xl mr-4">Syncing cart...</span>
        <div className="border-black-70 h-10 w-10 animate-spin rounded-full border-4 border-t-[#8b7cfd]" />
      </div>
    </div>
  );
};

export default MergingIndicator;
