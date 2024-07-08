import React from "react";
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
