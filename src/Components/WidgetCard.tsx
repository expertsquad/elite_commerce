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
  const isInternalLink = widget?.link?.startsWith("/");
  return (
    <div
      className={`relative flex flex-col items-center gap-3.5 justify-center bg-gradient-primary rounded-[10px] p-5  w-full max-w-[340px] md:h-[500px] h-[450px]  ${className} overflow-hidden text-center`}
    >
      <div className="flex flex-col items-center gap-1.5 text-white z-20">
        <span className="text-sm">{widget?.tag || ""}</span>
        <span className="text-[clamp(22px,2.5vw,26px)] font-bold line-clamp-2">
          {widget?.title || ""}
        </span>
        <span className="text-[clamp(10px,2.5vw,12px)] line-clamp-2">
          {widget?.description || ""}
        </span>
      </div>
      <Link
        href={
          isInternalLink && widget?.link
            ? `/products/${widget.link}`
            : widget?.link || "#"
        }
        target={isInternalLink ? "_self" : "_blank"}
        className="uppercase flex items-center justify-center text-white gap-2.5 py-2.5 px-3.5 rounded transition-all duration-300 hover:scale-105 bg-gradient-secondary z-10 "
      >
        <span className=" text-base">{widget?.buttonText || ""}</span>
        <IconArrowRight size={20} />
      </Link>
      <div className="relative w-[165px] h-[220px] mt-5">
        <Image
          src={`${server_url}${widget?.productPhoto}`}
          alt="widget image"
          fill
          className="object-contain w-full h-full inset-0"
        />
      </div>
    </div>
  );
};
export default WidgetCard;
