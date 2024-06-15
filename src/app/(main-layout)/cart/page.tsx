import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";
import CartItems from "./_components/CartItems";

const CartView = async () => {
  const productsData = await fetchData({
    route: "/product",
    query: "sortBy=averageRating",
    limit: 3,
  });
  return (
    <div>
      <div>
        <Breadcrumb title="Shopping Cart" />
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <CartItems suggestions={productsData?.data} />
      </div>
    </div>
  );
};

export default CartView;
