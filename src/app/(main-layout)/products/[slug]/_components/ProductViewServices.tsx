import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { extraServices } from "@/constants/extraServices.constants";

const ProductViewServices = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between  text-center md:text-left gap-10 ${className}`}
    >
      {extraServices?.map((service, index) => (
        <div
          className="flex flex-col lg:flex-row gap-y-3 md:gap-2 items-center"
          key={index}
        >
          <GenerateGradientIcon
            IconComponent={service.icon}
            className="size-12"
            stroke={1}
          />
          <div>
            <h5 className="font-bold text-sm whitespace-nowrap">
              {service.title}
            </h5>
            <p className="text-black-50 text-xs md:text-sm">
              {service.tagline}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductViewServices;
