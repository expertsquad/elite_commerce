import { fetchData } from "@/actions/fetchData";
import React from "react";

const PrivacyPolicy = async () => {
  const res = await fetchData({ route: "/settings/privacy-policy" });
  return (
    <div className="main-container h-[calc(100vh-100px)]">
      <h1>Privacy Policy</h1>
      <div
        id="preview"
        className="mt-2 p-4 border border-gray-300 rounded-md"
        dangerouslySetInnerHTML={{ __html: res?.data?.description }}
      />
    </div>
  );
};

export default PrivacyPolicy;
