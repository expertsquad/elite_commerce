import { fetchData } from "@/actions/fetchData";
import DescriptionReader from "@/Components/DescriptionReader";
import React from "react";

const TermsAndConditions = async () => {
  const res = await fetchData({ route: "/settings/terms-and-conditions" });

  return (
    <div className="main-container space-y-[30px] h-[calc(100vh-100px)]">
      <h1 className="text-black text-[clamp(20px,2.5vw,40px)] font-semibold">
        Terms And Conditions{" "}
      </h1>
      <DescriptionReader data={res} />
    </div>
  );
};

export default TermsAndConditions;
