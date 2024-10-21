import Image from "next/image";
import Link from "next/link";
import React from "react";
import notFoundImage from "@/assets/Images/notfound.webp";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="font-bold [font-size:_clamp(26px,2.5vw,26px)]">
          404 PAGE NOT FOUND!
        </h2>
        <div className="relative w-[450px] h-[450px]">
          <Image
            src={notFoundImage}
            alt="Not Found Image"
            fill
            className="inset-0 object-contain w-full h-full"
          />
        </div>
        <Link
          className="bg-gradient-primary text-white rounded-md px-5 py-2.5 transition-all hover:scale-105 duration-300"
          href={`/`}
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
