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
        <CartItems />
        <div className="my-10 flex flex-col gap-7">
          <span className="font-semibold text-2xl">
            You May be Interested in...
          </span>
          <div className="grid grid-cols-product-grid gap-5 overflow-y-auto scrollbar-x-remove">
            {productsData?.data?.map((product: IProduct) => {
              return <ProductCard key={product?._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
