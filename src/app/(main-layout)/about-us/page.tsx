import { fetchData } from "@/actions/fetchData";
import DescriptionReader from "@/Components/DescriptionReader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Elite Commerce Dashboard",
  description: "Elite Commerce Dashboard by ExpertSquad.net",
};

const AboutUs = async () => {
  const res = await fetchData({ route: "/settings/about-us" });
  return (
    <div className="main-container space-y-[30px] h-[calc(100vh-100px)]">
      <h1 className="text-black text-[clamp(20px,2.5vw,40px)] font-semibold">
        About The Elite Commerce
      </h1>
      <DescriptionReader data={res} />
    </div>
  );
};

export default AboutUs;
