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
    link: "/profile",
    icon: IconLayoutDashboard,
  },
  {
    name: "Order History",
    link: "/profile/order-history",
    icon: IconHistory,
  },
  {
    name: "Account Details",
    link: "/profile/account-details",
    icon: IconUser,
  },
  {
    name: "Address",
    link: "/profile/address",
    icon: IconMapPin,
  },
  {
    name: "To Review",
    link: "/profile/review",
    icon: IconStar,
  },
  {
    name: "Logout",
    link: "/profile/logout",
    icon: IconLogout,
  },
];
