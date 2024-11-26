"use client";
import { logoutServerAction } from "@/actions/logoutServerAction";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { profileNavMenu } from "@/constants/profileNavMenu.constants";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Logout = () => {
  const router = useRouter();
  // const handleLogout = async () => {
  //   try {
  //     const res = await fetch("/api/logout", {
  //       method: "POST",
  //     });

  //     if (res.ok) {
  //       localStorage.removeItem("userSession");
  //       router.replace("/");
  //     } else {
  //       toast.error("Failed to logout");
  //       console.error("Failed to logout");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while logging out:", error);
  //   }
  // };

  const handleLogout = async () => {
    await logoutServerAction();
  };

  return (
    <>
      {profileNavMenu.slice(-1).map((item, index) => (
        <div className="flex gap-5 w-full " key={index}>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 py-2 px-7 my-2 rounded-full group w-full "
          >
            <div className="w-6 h-6">
              <item.icon stroke={1} className="group-hover:hidden" />
              <GenerateGradientIcon
                IconComponent={item.icon}
                className="hidden group-hover:block"
              />
            </div>
            <span className="text-base group-hover:text-gradient-primary   ml-3">
              {item.name}
            </span>
          </button>
        </div>
      ))}
    </>
  );
};

export default Logout;
