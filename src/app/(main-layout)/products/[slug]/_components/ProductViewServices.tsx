import Image from "next/image";
import { deliveryTruck } from "@/assets";
import { customerCare } from "@/assets";
import { shoppingBag } from "@/assets";
import { moneyBack } from "@/assets";
import { productViewServices } from "@/constants/productsview-services.contstants";

const ProductViewServices = () => {
  return (
    <section className="flex items-center justify-between md:flex-row flex-col">
      {productViewServices.map((item) => (
        <div key={item._id} className="py-5 md:py-10">
          {item.type === "freeShipping" && (
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <Image src={deliveryTruck} alt="Free Shipping" />
              <div className="flex gap-1 flex-col">
                <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                  {item.title}
                </h3>
                <p className="text-black-80 [font-size:_clamp(12px,5vw,14px)]">
                  {item.description}
                </p>
              </div>
            </div>
          )}

          {item.type === "customerSupport" && (
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <Image src={customerCare} alt="Customer Support" />
              <div className="flex gap-1 flex-col">
                <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                  {item.title}
                </h3>
                <p className="text-black-80 [font-size:_clamp(12px,5vw,14px)]">
                  {item.description}
                </p>
              </div>
            </div>
          )}

          {item.type === "securePayment" && (
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <Image src={shoppingBag} alt="Secure Payment" />

              <div className="flex gap-1 flex-col">
                <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                  {item.title}
                </h3>
                <p className="text-black-80 [font-size:_clamp(12px,5vw,14px)]">
                  {item.description}
                </p>
              </div>
            </div>
          )}

          {item.type === "guarantee" && (
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <Image src={moneyBack} alt="Money Back" />

              <div className="flex gap-1 flex-col">
                <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                  {item.title}
                </h3>
                <p className="text-black-80 [font-size:_clamp(12px,5vw,14px)]">
                  {item.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductViewServices;
