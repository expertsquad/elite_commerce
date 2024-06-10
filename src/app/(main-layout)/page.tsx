import React from "react";
import Hero from "./_components/Hero/Hero";
import InfiniteSlider from "./_components/InfiniteSlider/InfiniteSlider";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-3">
      {/* Hero section added */}
      <Hero />
      <p className="text-sm text-gradient-secondary mt-10">Shop by Category</p>
      <p className="text-xl text-gradient-primary font-semibold">
        Browse Our Hottest Categories
      </p>
      <InfiniteSlider />
    </div>
  );
};

export default page;
