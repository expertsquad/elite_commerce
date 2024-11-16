import { fetchData } from "@/actions/fetchData";
import DescriptionReader from "@/Components/DescriptionReader";
import EmptyContent from "@/Components/EmptyContent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Elite Commerce Dashboard",
  description: "Elite Commerce Dashboard by ExpertSquad.net",
};

const AboutUs = async () => {
  const res = await fetchData({ route: "/settings/about-us" });
  console.log(res);
  return (
    <div className="main-container ">
      {res?.data?.content?.data !== "" ? (
        <div className=" space-y-[30px]">
          <h1 className="text-black text-[clamp(20px,2.5vw,40px)] font-semibold">
            About Us
          </h1>
          <div className="px-5">
            <DescriptionReader description={res?.data?.content?.data} />
          </div>
        </div>
      ) : (
        <EmptyContent title="About Us" />
      )}
    </div>
  );
};

export default AboutUs;
