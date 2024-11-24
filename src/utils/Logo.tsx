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
            <Link href="/" className="overflow-hidden">
              <div className="relative h-[40px] w-[180px] flex items-center justify-start">
                <Image
                  src={`${
                    logo ? server_url + logo : server_url + logoPlaceholder
                  }`}
                  width={180}
                  height={40}
                  className="object-contain h-[40px]  w-auto "
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
