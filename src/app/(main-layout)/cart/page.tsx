import React from "react";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import { fetchData } from "@/actions/fetchData";
import CartItems from "./_components/CartItems";

const CartView = async () => {
  const productsData = await fetchData({
    route: "/product",
    query: "sortBy=averageRating",
    limit: 4,
  });
  const currency = await fetchData({ route: "/settings/shop" });
  return (
    <div>
      <div>
        <Breadcrumb title="Shopping Cart" />
      </div>
      <div className="main-container px-5">
        <CartItems
          suggestions={productsData?.data}
          currencyIcon={currency?.data?.currencySymbol}
        />
      </div>
    </div>
  );
};

export default CartView;
