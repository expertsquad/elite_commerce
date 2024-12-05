import { fetchData } from "@/actions/fetchData";
import DescriptionReader from "@/Components/DescriptionReader";
import EmptyContent from "@/Components/EmptyContent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetchData({ route: "/settings/privacy-policy" });

  const metaTitle = res?.data?.metaTitle || "Privacy Policy";
  const metaDescription =
    res?.data?.metaDescription || "This is privacy policy page";

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

const PrivacyPolicy = async () => {
  const res = await fetchData({ route: "/settings/privacy-policy" });

  return (
    <div className="main-container h-dvh  ">
      {res?.data?.content?.data !== "" ? (
        <div className="space-y-[30px]">
          <div className=" space-y-5">
            <h1 className="text-black text-[clamp(20px,2.5vw,30px)] font-semibold">
              Privacy Policy{" "}
            </h1>
            <div className="h-1 bg-[#D9D9D9] w-2/12"></div>
          </div>
          <div className="my-10">
            <DescriptionReader description={res?.data?.content?.data} />
          </div>
        </div>
      ) : (
        <EmptyContent title="Privacy Policy" />
      )}
    </div>
  );
};

export default PrivacyPolicy;
