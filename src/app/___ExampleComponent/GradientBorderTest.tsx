import React from "react";

const GradientBorderTest = () => {
  return (
    // padding is mandatory for this component to work properly. Use padding for border thickness
    <div className="border-gradient-primary p-[2px] rounded-lg mt-1">
      <div className="p-10">Hello</div>
    </div>
  );
};

export default GradientBorderTest;
