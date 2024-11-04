import CustomLoader from "@/Components/CustomLoader";
import Image from "next/image";
import React from "react";

const MergingIndicator = () => {
  return (
    <div className="absolute bg-white-transparent z-50 h-dvh w-dvw flex items-center justify-center">
      <div className="flex items-center ">
        <span className="text-2xl mr-4">Syncing cart...</span>
        <div className="relative w-16 h-16 flex items-center justify-center">
          <Image
            className="absolute top-0 left-0 w-full h-full animate-spin"
            src="https://www.svgrepo.com/show/70469/loading.svg"
            alt="Loading icon"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MergingIndicator;
