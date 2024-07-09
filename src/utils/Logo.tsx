import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link href="/" className="text-2xl text-gradient-primary" onClick={onClick}>
      <Image src="/full-logo.svg" width={100} height={100} alt="logo" />
    </Link>
  );
};

export default Logo;
