import React from "react";
import Hero from "./_components/Hero/Hero";
import GradientBorderTest from "../___ExampleComponent/GradientBorderTest";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-3">
      {/* Hero section added */}

      <Hero />
      <GradientBorderTest />
    </div>
  );
};

export default page;
