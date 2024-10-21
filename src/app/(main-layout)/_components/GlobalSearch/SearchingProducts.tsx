"use client";
import { fetchData } from "@/actions/fetchData";
import Loading from "@/app/loading";
import AnimatedLoading from "@/Components/AnimatedLoading";
import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import emptyState from "@/assets/Images/empty_item.svg";

const SearchingProducts = ({
  searchValue,
  setShow,
  setSearchValue,
}: {
  searchValue: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchData({
          route: "/product",
          query: `searchTerm=${searchValue}`,
        });
        setProducts(response?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (searchValue) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [searchValue]);

  const router = useRouter();
  const handleProductView = (product: IProduct) => {
    router.push("/products/" + product?._id);
    setShow(false);
    setSearchValue("");
  };

  return (
    <div className="mb-5 flex flex-col overflow-y-auto h-[500px] scrollbar-y-remove  ">
      {loading ? (
        <div className="flex items-center justify-center h-full ">
          <AnimatedLoading />
        </div>
      ) : searchValue ? (
        products?.length > 0 ? (
          products?.map((product) => (
            <div
              key={product?._id}
              onClick={() => handleProductView(product)}
              className="flex items-center gap-x-5 mb-5 cursor-pointer border-b border-black-10 pb-5"
            >
              <div className="bg-gradient-primary-light w-[70px] h-[70px] shrink-0 relative rounded-md">
                <Image
                  src={`${server_url + product?.productPhotos[0]}`}
                  alt="Product Photo"
                  style={{
                    objectFit: "cover",
                  }}
                  fill
                  className="top-0 left-0 w-full h-full object-cover p-[5px]"
                />
              </div>
              <div>
                <span className="line-clamp-2 text-black-80">
                  {product.productName}
                </span>
                <div className="flex items-center gap-x-0.5">
                  <span className="font-semibold text-gradient-primary">
                    ${product.variants[0]?.sellingPrice}
                  </span>
                  <span className="text-black-10 mx-0.5">|</span>
                  <span className="text-positive [font-size:_clamp(0.5em,4vw,0.8em)]">
                    {product.brand?.brandName}
                  </span>
                  <span className="text-black-10 mx-0.5">|</span>
                  <span>
                    <StarRating
                      rating={Math.round(product.averageRating || 0)}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="relative w-52 h-52">
              <Image
                src={emptyState}
                alt="No Products Found"
                fill
                className="object-cover inset-0 w-full h-full"
              />
            </div>
          </div>
        )
      ) : (
        <div className="flex items-center justify-center h-full">
          Start typing to search for products...
        </div>
      )}
    </div>
  );
};

export default SearchingProducts;
