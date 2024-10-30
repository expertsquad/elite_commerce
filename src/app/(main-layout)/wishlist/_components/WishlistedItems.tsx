import {
  IconBolt,
  IconCheck,
  IconEye,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import QuickOrderButton from "../../_components/QuickOrder/QuickOrderButton";
import ButtonPrimaryLight from "../../brands/_components/ButtonPrimaryLight";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import StarRating from "@/Components/StarRating";
import Image from "next/image";
import { server_url } from "@/constants";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { useContext } from "react";
import { WishlistContext } from "@/Provider/WishlistProvider";
import { CartContext } from "@/Provider/CartProvider";
import { updateWishlist } from "@/utils/updateWishlist.utils";
import { updateCart } from "@/utils/updateCart.utils";
import QuickViewButton from "../../brands/_components/QuickViewButton";

const WishlistedItems = ({
  product,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
  accessToken,
}: {
  product: IWishlistProduct;
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
  accessToken?: string;
}) => {
  const { setRefetch } = useContext(WishlistContext);
  const { cartProducts, setRefetch: setRefetchCart } = useContext(CartContext);

  const handleRemoveFromFav = () => {
    updateWishlist({ product: product, variant: product?.variant });
    setRefetch((prev) => prev + 1);
  };

  const handleAddToCart = ({ product }: { product: IWishlistProduct }) => {
    updateCart({ actionType: "add", product, variant: product?.variant });
    setRefetch((prev) => prev + 1);
    setRefetchCart && setRefetchCart((prev) => prev + 1);
  };

  const isProductInCart = cartProducts.some(
    (cartProduct) =>
      cartProduct._id === product._id &&
      cartProduct?.variant?.variantName === product?.variant?.variantName
  );
  return (
    <tr>
      <td className="px-5 border border-black-10 border-collapse">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRemoveFromFav();
          }}
        >
          <IconX color="#FF3838" stroke={1} />
        </button>
      </td>
      <td className="border border-black-10 border-collapse px-5 py-6">
        <div className="flex gap-5">
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px] flex items-center justify-center">
            <div className="relative md:w-[60px] md:h-[60px] w-[50px] h-[50px]">
              <Image
                alt="product"
                src={server_url + product?.productPhoto}
                fill
                style={{
                  objectFit: "contain",
                }}
                className="inset-0 top-0 left-0 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="line-clamp-2 [font-size:_clamp(12px,5vw,18px)]">
              {product?.productName}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-sm">
                {product?.brandName}
              </span>
              {product?.variant &&
                product?.variant?.variantName !== "Not specified" && (
                  <>
                    <span className="text-black-10">|</span>
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: product?.variant?.variantName,
                      }}
                    ></div>
                    <span className="text-xs">
                      {product?.variant?.variantName}
                    </span>
                  </>
                )}
            </div>
          </div>
        </div>
      </td>
      <td className="border border-black-10 border-collapse px-5 text-center">
        <span className="text-gradient-primary text-lg font-semibold text-center">
          {currencyIcon}
          {product?.variant?.discountedPrice || product?.variant?.sellingPrice}
        </span>
      </td>
      <td className="border border-black-10 border-collapse">
        <span className="[font-size:_clamp(14px,2.5vw,18px)] text-positive whitespace-nowrap flex items-center justify-center px-5">
          {product?.variant?.inStock} In Stock
        </span>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <div className="flex items-center justify-center">
          <QuickViewButton
            product={product}
            btnClassName="!pl-0"
            currencyIcon={currencyIcon}
            shippingAmount={shippingAmount}
            isQuickOrderActive={isQuickOrderActive}
            accessToken={accessToken ? accessToken : ""}
          >
            <span className="border border-black-10 flex items-center justify-center p-2.5 rounded-full hover:bg-gradient-primary hover:text-white transition duration-300">
              <IconEye size={18} stroke={1.7} />
            </span>
          </QuickViewButton>

          {isProductInCart ? (
            <div className="text-positive flex items-center justify-center gap-x-1">
              <IconCheck size={20} stroke={1.7} />
              <span>Carted</span>
            </div>
          ) : (
            <ButtonPrimaryLight
              className="!rounded-full !text-black-80 !whitespace-nowrap !py-2 !px-3.5 !gap-x-2"
              onClick={() => handleAddToCart({ product })}
            >
              <GenerateGradientIcon
                size={20}
                stroke={1}
                IconComponent={IconShoppingCart}
              />
              <span className="text-gradient-primary">Add To Cart</span>
            </ButtonPrimaryLight>
          )}
        </div>
      </td>
      <td
        className={`border border-black-10 border-collapse transition duration-300 ${
          isQuickOrderActive === false && "hidden"
        }`}
      >
        <div className="flex items-center justify-center px-5">
          {isQuickOrderActive && (
            <QuickOrderButton
              product={{
                ...product,
                orderQuantity: 1,
                variant: product?.variant
                  ? product?.variant
                  : product?.variants[0],
              }}
              buttonStyle="bg-gradient-primary hover:bg-gradient-primary-reverse whitespace-nowrap text-white rounded-full transition-transform duration-300 px-3.5 uppercase flex items-center justify-center gap-x-1.5 text-sm py-2 group"
              buttonIcon={
                <IconBolt size={19} stroke={1.5} className="fill-white" />
              }
              buttonText="QUICK ORDER"
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default WishlistedItems;
