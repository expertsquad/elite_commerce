import { demoProductPhoto } from "@/assets";
import Image from "next/image";

export const FeaturedProduct = () => {
  return (
    <div className="flex items-center border rounded border-black-10 p-3 gap-3">
      <div className="w-20 h-20 relative ">
        <Image
          src={demoProductPhoto}
          alt="featured-products"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-black-80 line-clamp-2">
          Samsung Electronics Samsung Galexy S21 5G
        </p>
        <strong className="text-sm text-gradient-primary font-semibold">
          $160
        </strong>
      </div>
    </div>
  );
};
