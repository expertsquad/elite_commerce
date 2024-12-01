import { fetchData } from "@/actions/fetchData";
import { storeSocialMedia } from "@/constants/mainMenus.constants";
import Link from "next/link";
import React from "react";

const TopThinNav = async () => {
  const aboutUs = await fetchData({ route: "/settings/about-us" });
  const termsAndConditions = await fetchData({
    route: "/settings/terms-and-conditions",
  });
  const privacyPolicy = await fetchData({
    route: "/settings/privacy-policy",
  });

  const isAboutUsActive = aboutUs?.data?.isActive;
  const isTermsAndConditionsActive = termsAndConditions?.data?.isActive;
  const isPrivacyPolicyActive = privacyPolicy?.data?.isActive;

  return (
    <div id="header">
      <div className="hidden md:flex justify-between items-center bg-black-10  text-black text-xs px-3 py-1">
        <div className="flex items-center gap-6">
          {isAboutUsActive ? (
            <Link href={`/about-us`} className="hover:underline">
              About Us
            </Link>
          ) : (
            ""
          )}
          {isPrivacyPolicyActive ? (
            <Link href={`/privacy-policy`} className="hover:underline">
              Privacy Policy
            </Link>
          ) : (
            ""
          )}
          {isTermsAndConditionsActive ? (
            <Link href={`/terms-and-conditions`} className="hover:underline">
              Terms and Conditions
            </Link>
          ) : (
            ""
          )}
          <Link href={`/wishlist`} className="hover:underline">
            Wishlist
          </Link>
        </div>
        <ul className="flex items-center gap-6">
          Share
          {storeSocialMedia.map((socialMedia, i: number) => (
            <li key={i} className="list-none">
              <Link
                href={socialMedia.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <socialMedia.icon
                  size={16}
                  stroke={1}
                  className="hover:text-primary-light"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopThinNav;
