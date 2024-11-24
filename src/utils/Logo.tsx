"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useGetLogo from "./useGetLogo";
import { server_url } from "@/constants";
import { logoPlaceholder } from "@/assets";

const Logo = () => {
  const { logo, loading } = useGetLogo();

  return (
    <>
      {!logo ? (
        // Skeleton initial state
        <div className="h-[40px] w-[180px] bg-black-10 animate-pulse rounded"></div>
      ) : (
        <>
          {loading ? (
            // Skeleton loading state
            <div className="h-[40px] w-[180px] bg-black-10 animate-pulse rounded"></div>
          ) : (
            <Link href="/">
              <div className="relative h-[40px] w-[180px] ">
                <Image
                  src={`${
                    logo ? server_url + logo : server_url + logoPlaceholder
                  }`}
                  fill
                  className="object-contain h-auto border border-danger w-full absolute left-0"
                  alt="logo"
                />
              </div>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default Logo;
