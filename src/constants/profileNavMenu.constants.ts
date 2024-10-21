import {
  IconLayoutDashboard,
  IconHistory,
  IconUser,
  IconMapPin,
  IconStar,
  IconLogout,
} from "@tabler/icons-react";

export const profileNavMenu = [
  {
    name: "Dashboard",
    link: "/profile/dashboard",
    icon: IconLayoutDashboard,
  },
  {
    name: "Order History",
    link: "/profile/order-history/all-orders",
    icon: IconHistory,
  },
  {
    name: "Account Details",
    link: "/profile/account-details",
    icon: IconUser,
  },
  {
    name: "Address",
    link: "/profile/shipping-address",
    icon: IconMapPin,
  },
  {
    name: "To Review",
    link: "/profile/review",
    icon: IconStar,
  },
  {
    name: "Logout",
    link: "",
    icon: IconLogout,
  },
];
