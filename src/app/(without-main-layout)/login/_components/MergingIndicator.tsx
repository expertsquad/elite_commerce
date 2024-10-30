import CustomLoader from "@/Components/CustomLoader";
import React from "react";

const MergingIndicator = () => {
  return (
    <div className="absolute bg-white-transparent z-50 h-dvh w-dvw flex items-center justify-center">
      <div className="flex items-center ">
        <span className="text-2xl mr-4">Syncing cart...</span>
        <CustomLoader />
      </div>
    </div>
  );
};

export default MergingIndicator;
