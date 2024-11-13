import React from "react";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import { fetchData } from "@/actions/fetchData";
import CartItems from "./_components/CartItems";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Shopping Cart | ${shopInfo?.data?.shopName}`,
      description: `View and manage items in your cart at ${shopInfo?.data?.shopName}. Easily review your selected products and proceed to checkout when ready.`,
    };
  } catch (error) {
    return {
      title: "Shopping Cart",
      description:
        "View and manage items in your cart. Easily review your selected products and proceed to checkout when ready.",
    };
  }
}

const CartView = async () => {
  const productsData = await fetchData({
    route: "/product",
    query: "sortBy=totalSoldQuantity",
    limit: 8,
  });
  const currency = await fetchData({ route: "/settings/shop" });
  const shippingCharge = await fetchData({
    route: "/settings/shipping-charge",
  });
  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  return (
    <div>
      <div>
        <Breadcrumb title="Shopping Cart" />
      </div>
      <div className="main-container px-5">
        <CartItems
          suggestions={productsData?.data}
          currencyIcon={currency?.data?.currencySymbol}
          shippingCharge={shippingCharge?.data}
          shippingAmout={quickOrderServices?.data?.deliveryCharge}
          isQuickOrderActive={
            quickOrderServices?.data?.isQuickOrderServiceActive
          }
        />
      </div>
    </div>
  );
};

export default CartView;
