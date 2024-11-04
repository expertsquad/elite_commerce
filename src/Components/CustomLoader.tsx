import Image from "next/image";
import React from "react";

const CustomLoader = () => {
  return (
    <div className=" bg-white absolute opacity-60 z-50 h-full w-full flex items-center justify-center">
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
  );
};

export default CustomLoader;
