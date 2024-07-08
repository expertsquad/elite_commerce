import React from "react";

import Link from "next/link";
import { Button } from "@/Components/Buttons";
// import ProductReviewComponents from "./_components/ProductReviewComponents";
import AllReviewHistory from "./allReviewHistory/page";
import ProductReviewComponents from "./reviewPage/page";

const page = () => {
  return (
    <div>
      <ProductReviewComponents />
      <AllReviewHistory />
    </div>
  );
};

export default page;
