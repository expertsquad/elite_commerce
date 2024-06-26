// "use client";
// import { FilterContext } from "@/Provider/FilteringProvider";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useContext, useEffect, useState } from "react";
// import Slider from "react-slider";

// const PriceRange = ({ redirectPath }: { redirectPath: string }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const minValue = 0;
//   const maxValue = 5000;

//   const { filter, setFilter } = useContext(FilterContext);

//   const handleChange = (newValues: number[]) => {
//     setFilter({
//       ...filter,
//       "variants.sellingPrice[gte]": newValues[0],
//       "variants.sellingPrice[lte]": newValues[1],
//     });

//     if (pathname !== redirectPath) {
//       router.push(redirectPath);
//     }
//   };

//   const min = filter?.["variants.sellingPrice[gte]"]
//     ? filter["variants.sellingPrice[gte]"]
//     : minValue;
//   const max = filter?.["variants.sellingPrice[lte]"]
//     ? filter["variants.sellingPrice[lte]"]
//     : maxValue;

//   // useEffect(() => {
//   //   const debounceTimer = setTimeout(() => {
//   //     setFilter({
//   //       ...filter,
//   //       "variants.sellingPrice[gte]": min,
//   //       "variants.sellingPrice[lte]": max,
//   //     });
//   //   }, 1000);
//   //   return () => clearTimeout(debounceTimer);
//   // }, [min, max, filter, setFilter]);

//   return (
//     <div className="">
//       <h2 className="mb-5 md:mb-[30px] font-bold [font-size:_clamp(18px,10vw,24px)]">
//         PRICE RANGE
//       </h2>
//       <div>
//         <Slider
//           className="w-full h-1.5 bg-gradient-primary rounded-full cursor-pointer slider"
//           min={0}
//           max={1000}
//           value={[min, max]}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="flex items-center justify-between mt-3.5">
//         <span className="text-base">Min Price: ${min}</span>
//         <span className="text-base">Max Price: ${max}</span>
//       </div>
//     </div>
//   );
// };

// export default PriceRange;

"use client";
import { FilterContext } from "@/Provider/FilteringProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState, useCallback } from "react";
import Slider from "react-slider";

const PriceRange = ({ redirectPath }: { redirectPath: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const minValue = 0;
  const maxValue = 5000;

  const { filter, setFilter } = useContext(FilterContext);
  const [values, setValues] = useState([minValue, maxValue]);

  useEffect(() => {
    const min = filter?.["variants.sellingPrice[gte]"] || minValue;
    const max = filter?.["variants.sellingPrice[lte]"] || maxValue;
    setValues([min, max]);
  }, [filter]);

  // Custom debounce function
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return (...args: any[]) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Handle changes with debouncing
  const handleChange = (newValues: number[]) => {
    setValues(newValues);
    debouncedHandleChange(newValues);
  };

  const debouncedHandleChange = useCallback(
    debounce((newValues) => {
      setFilter({
        ...filter,
        "variants.sellingPrice[gte]": newValues[0],
        "variants.sellingPrice[lte]": newValues[1],
      });

      if (pathname !== redirectPath) {
        router.push(redirectPath);
      }
    }, 1000),
    [filter, setFilter, pathname, redirectPath, router]
  );

  return (
    <div className="">
      <h2 className="mb-5 md:mb-[30px] font-bold [font-size:_clamp(18px,10vw,24px)]">
        PRICE RANGE
      </h2>
      <div>
        <Slider
          className="w-full h-1.5 bg-gradient-primary rounded-full cursor-pointer slider"
          min={minValue}
          max={maxValue}
          value={values}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between mt-3.5">
        <span className="text-base">Min Price: ${values[0]}</span>
        <span className="text-base">Max Price: ${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRange;
