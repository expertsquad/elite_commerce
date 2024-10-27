import React, { useState } from "react";
import Slider from "react-slider";

const PercentageSlider = () => {
  return (
    <div className="slider-container">
      <input
        id="medium-range"
        type="range"
        value="50"
        className="w-full h-2 bg-gradient-primary-light rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default PercentageSlider;
