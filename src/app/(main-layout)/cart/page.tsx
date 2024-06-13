import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import Image from "next/image";
import StarRating from "@/Components/StarRating";
import IncreaseDecrease from "../brands/_components/IncreaseDecrease";
import { IconBolt, IconX } from "@tabler/icons-react";
import ButtonPrimary from "../brands/_components/ButtonPrimary";
import ButtonPrimaryLight from "../brands/_components/ButtonPrimaryLight";
import Link from "next/link";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import { ICartProduct, IProduct } from "@/interfaces/product.interface";
import { server_url } from "@/constants";

const CartItem = ({ product }: { product: ICartProduct }) => {
  const price =
    product?.variant?.discountedPrice || product?.variant?.sellingPrice;
  return (
    <div className="flex items-center md:cart-item-data border-b pb-5 border-black-10">
      <div className="flex items-center gap-x-2.5 w-full">
        <div className="bg-gradient-primary-light p-1.5 rounded-[10px]">
          <div className="relative md:w-[44px] md:h-[44px] w-[50px] h-[50px]">
            <Image
              alt="product"
              src={server_url + product?.productPhoto}
              fill
              objectFit="cover"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-4 w-full">
          <div className="flex items-center justify-between gap-x-1 w-full">
            <span className="line-clamp-1 [font-size:clamp(10px,5vw,14px)]">
              {product?.productName}
            </span>
            <button className="md:border rounded-full border-danger p-0.5 block md:hidden">
              <IconX stroke={1} color="#FF3838" width={16} height={16} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-positive text-xs md:text-sm whitespace-nowrap">
              {product?.brandName}
            </span>
            <span className="text-black-10 text-xs ">|</span>
            <StarRating rating={product?.averageRating || 0} />
          </div>
          <div className="md:hidden flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <strong className="text-black-800 text-xs font-normal">
                ${price}
              </strong>
              <IncreaseDecrease orderQuantity={product?.orderQuantity} />
            </div>
            <span className="font-bold text-gradient-primary">
              ${price * product?.orderQuantity}
            </span>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col items-center justify-between hidden">
        <span className="text-sm text-black-80">U Price</span>
        <strong className="text-gradient-primary">${price}</strong>
      </div>
      <div className="md:flex flex-col gap-y-1 items-center justify-between hidden">
        <span className="text-sm text-black-80">Qty</span>
        <IncreaseDecrease orderQuantity={product?.orderQuantity} />
      </div>
      <div className="md:flex flex-col gap-y-0.5 items-center justify-between hidden">
        <span className="text-sm text-black-80">Sub Total</span>
        <strong className="text-gradient-primary">
          ${price * product?.orderQuantity}
        </strong>
      </div>
      <div className="md:flex flex-col md:items-center items-end md:justify-center hidden justify-between">
        <button className="md:border rounded-full border-danger p-0.5">
          <IconX stroke={1} color="#FF3838" width={16} height={16} />
        </button>
        <strong className="text-gradient-primary md:hidden block">
          ${price * product?.orderQuantity}
        </strong>
      </div>
    </div>
  );
};

const CartView = async () => {
  const productsData = await fetchData({
    route: "/product",
    query: "sortBy=averageRating",
    limit: 3,
  });
  const cartProductsData = await fetchProtectedData({
    route: "/cart/me",
  });

  const calculateTotalPriceAndDiscount = (products: ICartProduct[]) => {
    let totalPrice = 0;
    let totalDiscount = 0;

    products.forEach((product) => {
      const pricePerUnit =
        product.variant.discountedPrice || product.variant.sellingPrice;
      let orderTotal = pricePerUnit * product.orderQuantity;

      if (product.bulk && product.orderQuantity >= product.bulk.minOrder) {
        const discountAmount = (product.bulk.discount / 100) * orderTotal;
        orderTotal -= discountAmount;
        totalDiscount += discountAmount;
      }

      totalPrice += orderTotal;
    });

    return { totalPrice, totalDiscount };
  };
  const { totalDiscount, totalPrice } = calculateTotalPriceAndDiscount(
    cartProductsData?.data?.products
  );

  console.log(totalPrice, totalDiscount);
  const shippingFee = 100;
  const calculateTotalWithShipping = totalPrice + shippingFee;
  const calculateTotal = calculateTotalWithShipping - totalDiscount;

  return (
    <div>
      <div>
        <Breadcrumb title="Shopping Cart" />
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <div className="md:flex hidden items-center justify-center bg-gradient-primary-light py-3 my-5">
          🔥 Your cart will expire in <span>09:56</span> minutes! Please
          checkout now before your items sell out!
        </div>

        <div className="flex flex-col-reverse gap-2.5">
          <input
            type="range"
            className="w-full  pointer-events-none"
            value={10}
          />
          <span className="block text-base">
            Buy <span className="text-gradient-primary">$900</span> more to get{" "}
            <span className="text-gradient-primary font-semibold">
              Freeship
            </span>{" "}
            🔥
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-5 mt-7">
          <div className=" flex flex-col gap-5 md:border border-black-10 md:p-[30px] md:basis-4/6 rounded-[10px]">
            {cartProductsData?.data?.products?.map((product: ICartProduct) => {
              return <CartItem key={product?._id} product={product} />;
            })}
          </div>
          <div className="md:basis-1/3">
            <div className="bg-white p-5 md:shadow-2xl rounded-[10px] md:border-none border border-black-10">
              <span className="text-gradient-primary font-semibold text-xl ">
                Cart Total
              </span>
              <div className="flex flex-col gap-3.5 mt-5">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-base text-black-80">Sub Total</span>
                  <strong className="text-base font-semibold">
                    ${totalPrice}
                  </strong>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <span className="text-base text-black-80">Sub Shipping</span>
                  <strong className="text-base font-semibold">${100}</strong>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <span className="text-base text-black-80 capitalize">
                    discount
                  </span>
                  <strong className="text-base font-semibold text-danger">
                    -${totalDiscount}
                  </strong>
                </div>
                <hr className="border border-black-10" />
              </div>
              <div className="flex items-center justify-between mt-5 gap-5">
                <span className="font-semibold text-2xl">Total</span>
                <span className="text-gradient-primary font-semibold text-2xl">
                  ${calculateTotal}
                </span>
              </div>
              <div className="flex flex-col gap-2.5 mt-12">
                <ButtonPrimary className="!rounded-full">
                  Proceed To Checkout &rarr;
                </ButtonPrimary>
                <ButtonPrimaryLight className="!text-black !rounded-full">
                  <IconBolt />
                  Quick Order
                </ButtonPrimaryLight>
              </div>
              <div className="mt-5">
                <Link
                  href={"/"}
                  className="flex items-center justify-center uppercase font-semibold text-sm"
                >
                  &larr; Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 flex flex-col gap-7">
          <span className="font-semibold text-2xl">
            You May be Interested in...
          </span>
          <div className="grid grid-cols-product-grid gap-5 overflow-y-auto scrollbar-x-remove">
            {productsData?.data?.map((product: IProduct) => {
              return <ProductCard key={product?._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
