import { orderHistoryMenus } from "@/constants/orderHistory.constants";
import React from "react";
import OrderHistoryMenu from "./_components/OrderHistoryMenu";
import { fetchData } from "@/actions/fetchData";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Order History | My Profile | ${shopInfo?.data?.shopName}`,
      description: `View your order history at ${shopInfo?.data?.shopName}. Track past orders, view details, and monitor your shopping activity from your profile.`,
    };
  } catch (error) {
    return {
      title: "Order History | My Profile",
      description:
        "View your order history. Track past orders, view details, and monitor your shopping activity from your profile.",
    };
  }
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-3.5 mt-5">
      <div className="flex items-center md:gap-5 gap-2.5 overflow-x-auto scrollbar-x-remove ">
        {orderHistoryMenus?.map((menu: any, i) => (
          <OrderHistoryMenu
            href={`/profile/order-history/${menu?.href}`}
            key={i}
            label={menu?.label}
          />
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
