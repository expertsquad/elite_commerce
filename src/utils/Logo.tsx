"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useGetLogo from "./useGetLogo";
import { server_url } from "@/constants";
import { logoPlaceholder } from "@/assets";

const Logo = ({ onClick }: { onClick?: () => void }) => {
  const { logo } = useGetLogo();

  return (
    <Link href="/" onClick={onClick}>
      <div className="relative h-[40px] w-[140px]">
        <Image
          src={`${logo ? server_url + logo : server_url + logoPlaceholder}`}
          fill
          className="object-contain w-full h-auto inset-0"
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
