import StarRating from "@/Components/StarRating";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import { ICartProduct } from "@/interfaces/cart.interface";
import { server_url, storages } from "@/constants";
import IncreaseDecreaseOrderItems from "../../brands/_components/IncreaseDecreaseOrderItems";
import { useContext } from "react";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { setLocalStorageData } from "@/helpers/localStorage.helper";

export const ShippingInfoOrderItems = ({
  product,
  currencySymbol,
}: {
  product: ICartProduct;
  currencySymbol: string;
}) => {
  console.log(product?.variant);
  const { orderData, setRefetch } = useContext(OrderInitContext);
  const handleRemoveItem = () => {
    let updateOrderItems = orderData?.orderItems;
    const productIndex = orderData?.orderItems?.findIndex(
      (item) => item.productId === product.productId
    );
    const existProduct = orderData?.orderItems?.find(
      (item) => item.productId === product.productId
    );
    updateOrderItems = [
      ...updateOrderItems.slice(0, productIndex),
      ...updateOrderItems.slice(productIndex + 1),
    ] as ICartProduct[];

    setLocalStorageData(storages.orderInit, {
      ...orderData,
      orderItems: updateOrderItems,
    });
    setRefetch((prev) => prev + 1);
  };
  // product price
  const price =
    product?.variant?.discountedPrice || product?.variant?.sellingPrice;

  return (
    <div className="flex  justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light p-1.5 rounded-[10px]">
            <div className="relative md:w-[70px] md:h-[70px] w-[50px] h-[50px]">
              <Image
                alt="product"
                src={server_url + product?.productPhoto}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-3">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-1 md:text-base text-sm text-black-80">
              {product?.productName}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">
                {product?.brandName}
              </span>
              {product?.averageRating && (
                <>
                  <span className="text-black-10">|</span>
                  <StarRating rating={product?.averageRating || 0} />
                </>
              )}
              {product?.variant?.variantName !== "Not specified" &&
                product?.variant?.variantName !== "" && (
                  <>
                    <span className="text-black-10">|</span>
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: product?.variant?.variantName,
                      }}
                    ></div>
                  </>
                )}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black-80 text-sm md:text-base whitespace-nowrap">
              {currencySymbol}
              {price}
            </span>
            <span>
              <IconX stroke={1} height={12} width={12} />
            </span>
            <IncreaseDecreaseOrderItems product={product} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button onClick={handleRemoveItem}>
          <IconX
            stroke={1}
            color="red"
            height={16}
            width={16}
            onClick={handleRemoveItem}
          />
        </button>
        <strong className="font-semibold text-gradient-primary text-sm md:text-base whitespace-nowrap">
          {currencySymbol}
          {price * product?.orderQuantity}
        </strong>
      </div>
    </div>
  );
};
