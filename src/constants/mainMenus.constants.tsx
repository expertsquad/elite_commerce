import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMercedes,
  IconBrandPinterest,
  IconBrandTwitter,
  IconCategory,
  IconGardenCart,
  IconHome,
} from "@tabler/icons-react";

export const mainMenus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Category",
    href: "/category",
  },
  {
    label: "Brand",
    href: "/brands",
  },
];

export const topMenus = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Track order",
    href: "/track-order",
  },
  {
    label: "Wishlist",
    href: "/wishlist",
  },
];

export const bottomNavMenus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Brands",
    href: "/brands",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Products",
    href: "/category",
  },
];

const websiteUrl = "https://elite-commerce.vercel.app/";

export const storeSocialMedia = [
  {
    label: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      websiteUrl
    )}`,
    icon: IconBrandFacebook,
  },
  {
    label: "Instagram",
    href: `https://www.instagram.com/?url=${encodeURIComponent(websiteUrl)}`, // Instagram does not support direct URL sharing
    icon: IconBrandInstagram,
  },
  {
    label: "Twitter",
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      websiteUrl
    )}`,
    icon: IconBrandTwitter,
  },
  {
    label: "Pinterest",
    href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      websiteUrl
    )}`,
    icon: IconBrandPinterest,
  },
  {
    label: "Linkedin",
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      websiteUrl
    )}`,
    icon: IconBrandLinkedin,
  },
];
