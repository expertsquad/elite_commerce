import React from "react";

const CustomLoader = () => {
  return (
    <div className=" bg-white absolute opacity-60 z-50 h-full w-full flex items-center justify-center">
      <div className="border-black-70 h-10 w-10 animate-spin rounded-full border-4 border-t-primary-[#8b7cfd]" />
    </div>
  );
};

export default CustomLoader;
