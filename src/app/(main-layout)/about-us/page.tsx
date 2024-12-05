import { fetchData } from "@/actions/fetchData";
import DescriptionReader from "@/Components/DescriptionReader";
import EmptyContent from "@/Components/EmptyContent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetchData({ route: "/settings/about-us" });

  const metaTitle = res?.data?.metaTitle || "About Us";
  const metaDescription = res?.data?.metaDescription || "This is About Us page";

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

const AboutUs = async () => {
  const res = await fetchData({ route: "/settings/about-us" });

  return (
    <div className="main-container h-dvh">
      {res?.data?.content?.data !== "" ? (
        <div className=" space-y-[30px]">
          <h1 className="text-black text-[clamp(20px,2.5vw,40px)] font-semibold">
            About Us
          </h1>
          <div className="my-10">
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
