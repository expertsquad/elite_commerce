import style from "./DealsOfTheDaySection.module.css";
import React from "react";

const DealsOfTheDaySection = () => {
  return (
    <div className="md:flex justify-around mt-5">
      <div
        className={`w-[clamp(250px,25vw,300px)] border h-96 mx-auto ${style?.cornerGold}`}
      ></div>
      <div
        className={`w-[clamp(250px,25vw,300px)] border h-96 mx-auto ${style?.cornerBlue}`}
      ></div>
      <div
        className={`w-[clamp(250px,25vw,300px)] border h-96 mx-auto ${style?.cornerGold}`}
      ></div>
    </div>
  );
};

export default DealsOfTheDaySection;
