import { server_url } from "@/constants";
import { IWidgetCard } from "@/interfaces/widget.interface";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WidgetCard = async ({
  className,
  widget,
}: {
  className?: string;
  widget?: IWidgetCard;
}) => {
  console.log(widget);
  return (
    <div
      className={`flex flex-col items-center gap-3.5 justify-center bg-gradient-primary rounded-[10px] p-5 md:w-full max-w-[300px] ${className}`}
    >
      <div className="flex flex-col items-center gap-1.5 text-white">
        <span className="text-sm">{widget?.tag || ""}</span>
        <span className="text-[26px] font-bold">{widget?.title || ""}</span>
        <span className="text-sm">{widget?.description || ""}</span>
      </div>
      <Link
        href={widget?.link || ""}
        className="uppercase flex items-center justify-center text-white gap-2.5 py-2.5 px-3.5 rounded transition-all duration-300 hover:scale-105 bg-gradient-secondary "
      >
        <span className=" text-base">{widget?.buttonText || ""}</span>
        <IconArrowRight size={20} />
      </Link>
      <div className="relative w-[165px] h-[220px] mt-5">
        <Image
          src={`${server_url}${widget?.productPhoto}`}
          alt="widget image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WidgetCard;
