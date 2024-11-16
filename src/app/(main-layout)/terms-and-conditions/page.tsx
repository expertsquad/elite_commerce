import { fetchData } from "@/actions/fetchData";
import DescriptionReader from "@/Components/DescriptionReader";
import EmptyContent from "@/Components/EmptyContent";
import React from "react";

const TermsAndConditions = async () => {
  const res = await fetchData({ route: "/settings/terms-and-conditions" });

  return (
    <div className="main-container  my-10 ">
      {res?.data?.content?.data !== "" ? (
        <div className="space-y-[30px]">
          <h1 className="text-black text-[clamp(20px,2.5vw,40px)] font-semibold">
            Terms And Conditions{" "}
          </h1>
          <div className="pl-5">
            <DescriptionReader description={res?.data?.content?.data} />
          </div>
        </div>
      ) : (
        <EmptyContent title="Terms & Conditions" />
      )}
    </div>
  );
};

export default TermsAndConditions;
