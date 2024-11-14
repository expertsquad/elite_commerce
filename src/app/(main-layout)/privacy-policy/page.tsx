import { fetchData } from "@/actions/fetchData";
import DescriptionReader from "@/Components/DescriptionReader";
import React from "react";

const PrivacyPolicy = async () => {
  const res = await fetchData({ route: "/settings/privacy-policy" });
  return (
    <div className="main-container space-y-[30px] h-[calc(100vh-100px)]">
      <h1 className="text-black text-[clamp(20px,2.5vw,40px)] font-semibold">
        Privacy Policy{" "}
      </h1>
      <DescriptionReader data={res} />
    </div>
  );
};

export default PrivacyPolicy;
