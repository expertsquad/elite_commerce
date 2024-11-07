import React from "react";
import ProfileTopCard from "../_components/ProfileTopCard";
import OrderSection from "../_components/OrderSection";
import { fetchProtectedData } from "@/actions/fetchData";

import { fetchData } from "@/actions/fetchData";

// export async function generateMetadata() {
//   try {
//     const shopInfo = await fetchData({
//       route: "/settings/shop",
//     });

//     return {
//       title: `Dashboard | My Profile | ${shopInfo?.data?.shopName}`,
//       description: `Access your personal dashboard at ${shopInfo?.data?.shopName}. View recent orders, track activities, and manage your account efficiently from one place.`,
//     };
//   } catch (error) {
//     return {
//       title: "Dashboard | My Profile",
//       description:
//         "Access your personal dashboard to view recent orders, track activities, and manage your account efficiently from one place.",
//     };
//   }
// }

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  return (
    <div className="">
      <ProfileTopCard getMe={getMe?.data} />
      <OrderSection getMe={getMe} />
    </div>
  );
};

export default page;
