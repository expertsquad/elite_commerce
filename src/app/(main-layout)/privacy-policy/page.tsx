import { fetchData } from "@/actions/fetchData";
import { fileWarning } from "@/assets";
import DescriptionReader from "@/Components/DescriptionReader";
import EmptyContent from "@/Components/EmptyContent";
import Image from "next/image";
import React from "react";

const PrivacyPolicy = async () => {
  const res = await fetchData({ route: "/settings/privacy-policy" });

  return (
    <div className="main-container  ">
      {res?.data?.content?.data !== "" ? (
        <div className="space-y-[30px]">
          <h1 className="text-black text-[clamp(20px,2.5vw,40px)] font-semibold">
            Privacy Policy{" "}
          </h1>
          <div className="px-5">
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
