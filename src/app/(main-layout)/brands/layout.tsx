import React from "react";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import { fetchData } from "@/actions/fetchData";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Brands | ${shopInfo?.data?.shopName}`,
      description: `Browse top brands at ${shopInfo?.data?.shopName}. Discover exclusive products and trusted names in various categories to meet all your shopping needs.`,
    };
  } catch (error) {
    return {
      title: "Brands",
      description:
        "Browse top brands and discover exclusive products across various categories. Find trusted names and quality items for every need.",
    };
  }
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Breadcrumb title="All Brands" />
      </div>
      <div className="main-container mt-[30px]">{children}</div>
    </div>
  );
};

export default layout;
