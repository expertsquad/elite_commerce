import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import Modal from "@/Components/Modal";
import {
  IconBolt,
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCart,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useContext } from "react";
import ProductVariantColor from "../../products/[id]/_components/ProductVariantColor";
import Link from "next/link";
import { IProduct } from "@/interfaces/product.interface";
import { server_url, storages } from "@/constants";
import ProgressBar from "../../_components/SliderComponents/ProgressBar";
import { formatProductForCart } from "@/utils/formatProductForCart.utils";
import { setLocalStorageData } from "@/helpers/localStorage.helper";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import QuickOrderButton from "./QuickOrderButton";
import { CartContext } from "@/Provider/CartProvider";
import ProdViewCartIncreamentDecreamentBtn from "../../products/[id]/_components/ProdViewCartIncreamentDecreamentBtn";
import ProductViewCartBtn from "../../products/[id]/_components/ProductViewCartBtn";
import BuyNowSingleProduct from "../../products/[id]/_components/BuyNowSingleProduct";
import { cookies } from "next/headers";

const ProductQuickViewModal = ({
  show,
  setShow,
  product,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProduct;
}) => {
  const { orderData, setRefetch } = useContext(OrderInitContext);

  const { cartProducts } = useContext(CartContext);

  const isCarted = cartProducts.find((item) => item._id === product._id);

  const productOrderQuantity = isCarted?.orderQuantity || 0;

  const bulkItems = product?.bulk?.minOrder || 0;
  // const bulkItems = 15;

  const percentage = Math.min(
    (productOrderQuantity / bulkItems) * 100,
    100
  ).toFixed(0);

  //handling single product to direct order
  const handleSingleProductClick = (product: IProduct) => {
    const formattedProduct = formatProductForCart({
      product: product,
    });

    // Update the orderItems with the formatted product
    setLocalStorageData(storages.orderInit, {
      ...orderData,
      orderItems: [formattedProduct],
    });
    setRefetch((prev) => prev + 1);
  };

  return (
    <Modal
      show={show}
      setShow={setShow}
      alignment="right"
      className="w-full md:w-2/4 scrollbar-y-remove md:overflow-auto overflow-y-auto"
      showCancelBtnINSmallDevice={show}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-7 md:p-3.5 p-2.5">
        <div className="col-span-2 md:order-none order-2 md:flex md:flex-col md:flex-nowrap flex-wrap justify-center md:justify-normal gap-5 items-center scrollbar-y-remove h-[850px] overflow-y-auto  ">
          {product?.productPhotos?.map((img, i) => {
            return (
              <div
                key={i}
                className="bg-gradient-primary-light rounded-2xl  px-6 py-10 flex items-center justify-center border border-black-10"
              >
                <div className="relative w-[250px] h-[250px] overflow-hidden">
                  <Image src={`${server_url + img}`} fill alt="product photo" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:col-span-3 ">
          <span className="text-lg text-black-80">Quick View</span>
          <div className="mt-[30px]">
            <h1 className="text-2xl font-semibold">{product?.productName}</h1>
            <div className="flex flex-col gap-5 my-5">
              <div className="flex items-center gap-1.5">
                <div className="relative w-16 h-4">
                  <Image
                    src={`${server_url + product?.brand?.brandPhoto}`}
                    alt="brand img"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-black-10 text-sm">|</span>
                <span className="text-black-80">
                  Category: {product?.category?.categoryName}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-gradient-secondary text-sm">
                  <IconStarFilled height={14} width={14} color="#FB8E48" />
                  {product?.averageRating}.0
                </span>
                <span className="text-black-10 text-sm">|</span>
                <div className="flex items-center gap-1.5">
                  <button className="border rounded-full border-black-10 p-1 flex items-center justify-center">
                    <GenerateGradientIcon IconComponent={IconHeart} />
                  </button>
                  <span className="text-black-80 text-sm">Add to Wishlist</span>
                </div>
                <span className="text-black-10 text-sm">|</span>
                <span className="text-positive text-sm">In Stock: {}</span>
                <span className="text-black-10 text-sm">|</span>
                <span className="text-black-80 text-sm">
                  Sold : {product?.variants[0]?.soldQuantity}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <ProgressBar progressValue={Number(percentage)} />
              <span className="text-base text-black-80">
                Buy <span className="text-gradient-primary">8</span> item more
                to get off <span className="text-black">15% Extra!</span>
              </span>
            </div>
            {/* price section */}
            <div className="flex items-center gap-2.5 mt-6">
              <strong className="text-gradient-primary text-3xl">
                ${product?.variants[0]?.discountedPrice}
              </strong>
              <span className="text-black-10 text-sm">|</span>
              <strong className="text-black-50 line-through font-normal">
                ${product?.variants[0]?.sellingPrice}
              </strong>
              <span className="text-black-10 text-sm">|</span>
              <div className="bg-gradient-secondary-light rounded-full px-5 py-1.5">
                <span>{product?.variants[0]?.discountPercentage}% OFF</span>
              </div>
            </div>
            {/* price section */}
            <div className="my-6">
              <ProductVariantColor variants={product?.variants} />
            </div>
            <hr className="border border-black-10 my-5" />
            <div>
              <div className="flex items-center gap-x-3 mb-5">
                <ProdViewCartIncreamentDecreamentBtn product={product} />
                <div className=" w-full">
                  <ProductViewCartBtn product={product} />
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-2.5">
                <div className="bg-gradient-primary-light rounded-md w-full">
                  <Link
                    href={"/shipping-info"}
                    className="flex items-center justify-center gap-x-1.5 text-gradient-primary py-2"
                    onClick={() => handleSingleProductClick(product)}
                  >
                    <GenerateGradientIcon
                      IconComponent={IconShoppingBag}
                      stroke={2}
                      size={20}
                    />
                    BUY NOW
                  </Link>
                </div>
                <QuickOrderButton
                  product={{
                    ...product,
                    orderQuantity: 1,
                    variant: product?.variants[0],
                  }}
                  buttonStyle="text-white bg-gradient-primary flex items-center justify-center gap-x-1.5 py-2 rounded-md w-full text-base"
                  buttonIcon={<IconBolt size={20} fill="#fff" />}
                  buttonText="QUICK ORDER"
                />
              </div>
            </div>
            {product?.description ? (
              <div className="flex flex-col gap-5 mt-5 overflow-y-auto scrollbar-y-remove h-[300px]">
                <span className="font-semibold text-2xl">Description</span>
                <p className="">{product?.description}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductQuickViewModal;
