"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import SpecificationsMenu from "./SpecificationsMenu";
import Specifications from "./Specifications";
import CustomerReview from "./CustomerReview";
import SpecBulkProduct from "./SpecBulkProduct";
import { IProduct } from "@/interfaces/product.interface";

const SpecificationsAndBulkProductSection = ({
  productId,
  averageRating,
  product,
}: {
  productId: string;
  averageRating: number;
  product: IProduct;
}) => {
  const [isSpecBulkVisible, setIsSpecBulkVisible] = useState(false);
  const specBulkRef = useRef<HTMLDivElement>(null);

  // Create the observer only once using useCallback
  const observeBulkProduct = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsSpecBulkVisible(true); // Trigger state change once
          observer.disconnect(); // Disconnect after triggering
        }
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );
    if (specBulkRef.current) {
      observer.observe(specBulkRef.current);
    }
  }, []); // Empty dependency array to ensure it's created only once

  useEffect(() => {
    observeBulkProduct(); // Call the observer creation only once when the component mounts

    return () => {
      if (specBulkRef.current) {
        const observer = new IntersectionObserver(() => {});
        observer.disconnect(); // Cleanup observer on unmount
      }
    };
  }, [observeBulkProduct]); // Observe only once when the component mounts

  return (
    <section>
      <SpecificationsMenu />
      <div className="flex justify-between md:gap-7 gap-0 w-full">
        <div className="w-full">
          <div>
            <Specifications product={product} />
          </div>
          <div id="customerreview">
            <CustomerReview
              productId={productId}
              averageRating={averageRating}
            />
          </div>
        </div>

        {/* SpecBulkProduct wrapper */}
        <div
          ref={specBulkRef}
          className={`transition-opacity duration-500 ease-in-out ${
            isSpecBulkVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {isSpecBulkVisible && <SpecBulkProduct productdata={product} />}
        </div>
      </div>
    </section>
  );
};

export default SpecificationsAndBulkProductSection;
