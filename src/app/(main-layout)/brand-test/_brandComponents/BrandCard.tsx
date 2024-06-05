import { server_url } from "@/constants";
import Image from "next/image";

export type IBrandCardProps = {
  brandData: {
    brandName: string;
    brandPhoto: string;
    productCount: number;
  };
};

const BrandCard = ({ brandData }: IBrandCardProps) => {
  return (
    <div className="border  border-black-10 rounded-[10px] px-2.5 md:py-5 py-4 w-[calc(310px,2vw,168px)] flex flex-col gap-5 cursor-pointer">
      <div className="flex flex-col items-center md:gap-5 gap-2.5">
        <div className="relative md:w-[100px] md:h-[100px] w-[50px] h-[50px] overflow-hidden rounded-[10px] ">
          <Image
            fill
            src={`${server_url}${brandData?.brandPhoto}`}
            alt="brand image"
            className="object-cover"
            placeholder="blur"
            blurDataURL={`${server_url}${brandData?.brandPhoto}`}
          />
        </div>
        <span className="text-lg font-semibold text-gradient-primary">
          {brandData.brandName}
        </span>
      </div>
      <hr className="h-[1px] border-black-50" />
      <div className="flex flex-col items-center gap-4">
        <span className="text-lg text-center text-black-80">
          {brandData?.productCount} product available
        </span>
      </div>
    </div>
  );
};

export default BrandCard;
