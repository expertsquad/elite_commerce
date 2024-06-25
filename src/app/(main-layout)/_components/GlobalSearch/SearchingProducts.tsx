"use client";
import { fetchData } from "@/actions/fetchData";
import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchingProducts = ({
  searchValue,
  setShow,
  setSearchValue,
}: {
  searchValue: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchData({
          route: "/product",
          query: `searchTerm=${searchValue}`,
        });
        setProducts(response?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchValue]);

  const router = useRouter();
  const hanldeProductView = (product: IProduct) => {
    router.push("/products/" + product?._id);
    setShow(false);
    setSearchValue("");
  };
  return (
    <div className="mb-5">
      {searchValue ? (
        products.length > 0 ? (
          products.map((product: IProduct) => (
            <div
              key={product?._id}
              onClick={() => hanldeProductView(product)}
              className="flex items-center gap-x-5 mb-5 cursor-pointer"
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
                  {product?.productName}
                </span>
                <div className="flex items-center gap-x-0.5">
                  <span className="font-semibold text-gradient-primary">
                    ${product?.variants[0]?.sellingPrice}
                  </span>
                  <span className="text-black-10 mx-0.5">|</span>
                  <span className="text-positive [font-size:_clamp(0.5em,4vw,0.8em)]">
                    {product?.brand?.brandName}
                  </span>
                  <span className="text-black-10 mx-0.5">|</span>
                  <span>
                    <StarRating
                      rating={Math.round(product?.averageRating || 0)}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            No Product Found!!!
          </div>
        )
      ) : (
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      )}
    </div>
  );
};

export default SearchingProducts;
