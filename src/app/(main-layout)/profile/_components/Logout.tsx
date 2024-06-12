"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { profileNavMenu } from "@/constants/profileNavMenu.constants";
import { useRouter } from "next/navigation";
import React from "react";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });
      if (res.ok) {
        router.push("/login"); // Redirect to the login page
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("An error occurred while logging out:", error);
    }
  };

  return (
    <>
      {profileNavMenu.slice(-1).map((item, index) => (
        <div className="flex gap-5 w-full " key={index}>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 py-4 px-7 my-2 rounded-full group w-full hover:bg-gradient-primary-light"
          >
            <div className="w-6 h-6">
              <item.icon stroke={1} className="group-hover:hidden" />
              <GenerateGradientIcon
                IconComponent={item.icon}
                className="hidden group-hover:block"
              />
            </div>
            <span className="text-base group-hover:text-gradient-primary group-hover:font-bold  ml-3">
              {item.name}
            </span>
          </button>
        </div>
      ))}
    </>
  );
};

export default Logout;
