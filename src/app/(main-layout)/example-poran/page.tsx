import React from "react";
import Breadcrumb from "./_components/Breadcrumb";
import { fetchData } from "@/actions/fetchData";

const ExampleRoute = async () => {
  const response = await fetchData({ route: "/brand" });
  return (
    <div>
      <Breadcrumb title="Smart Devices" elements={response?.data} />
    </div>
  );
};

export default ExampleRoute;
