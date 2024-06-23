import React from "react";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Breadcrumb title="All Brands" />
      </div>
      <div className="max-w-7xl mx-auto mt-[30px]">{children}</div>
    </div>
  );
};

export default layout;
