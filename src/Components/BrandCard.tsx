import { fetchData } from "@/actions/fetchData";
import { server_url } from "@/constants";
import Image from "next/image";

export type IBrandCardProps = {
  brand: {
    _id: string;
    brandName: string;
    brandPhoto: string;
    productCount: number;
  };
};

const BrandCard = ({ brand }: IBrandCardProps) => {
  return (
    <div className="border  border-black-10 rounded-[10px] px-2.5 md:py-5 py-4 w-[calc(300px,2vw,168px)] flex flex-col gap-5 cursor-pointer">
      <div className="flex flex-col items-center md:gap-5 gap-2.5">
        <div className="relative md:w-[100px] md:h-[100px] w-[50px] h-[50px] overflow-hidden rounded-[10px] ">
          <Image
            fill
            src={`${server_url}${brand?.brandPhoto}`}
            alt="brand image"
            className="object-cover"
            placeholder="blur"
            blurDataURL={`${server_url}${brand?.brandPhoto}`}
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className="text-lg font-semibold text-gradient-primary">
          {brand?.brandName}
        </span>
      </div>
      <hr className="h-[1px] border-black-10" />
      <div className="flex flex-col items-center gap-4">
        <span className="text-lg text-center text-black-80">
          {brand?.productCount} product available
        </span>
      </div>
    </div>
  );
};

export default BrandCard;
