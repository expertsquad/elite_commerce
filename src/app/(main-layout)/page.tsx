import React from "react";
import Hero from "./_components/Hero/Hero";
import GradientBorderTest from "../___ExampleComponent/GradientBorderTest";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-3">
      {/* Hero section added */}

      <Hero />

      <div className="flex flex-col gap-5 md:gap-7 md:col-span-3 p-10 m-5 border-4 border-gradient-primary rounded-lg">
        Hello
      </div>
    </div>
  );
};

export default page;
