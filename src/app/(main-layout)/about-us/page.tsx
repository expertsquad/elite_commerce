import { fetchData } from "@/actions/fetchData";
import React from "react";

const AboutUs = async () => {
  const res = await fetchData({ route: "/settings/about-us" });
  return (
    <div className="main-container h-[calc(100vh-100px)]">
      <h1>About Us</h1>
      <div
        id="preview"
        className="mt-2 p-4 border border-gray-300 rounded-md"
        dangerouslySetInnerHTML={{ __html: res?.data?.description }}
      />
    </div>
  );
};

export default AboutUs;
