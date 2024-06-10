import React from "react";
import Hero from "./_components/Hero/Hero";
import InfiniteSlider from "./_components/InfiniteSlider/InfiniteSlider";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-3">
      {/* Hero section added */}
      <Hero />
      <InfiniteSlider />
    </div>
  );
};

export default page;
