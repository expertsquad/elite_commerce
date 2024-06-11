import React from "react";
import OrderItemsRightSection from "./_components/OrderItemsRightSection";

const layout = ({
  children,
  orderItemsRightSection,
}: {
  children: React.ReactNode;
  orderItemsRightSection: React.ReactNode;
}) => {
  return (
    <div className="max-w-7xl mx-auto flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">{children}</div>

      <div className="">
        {" "}
        <OrderItemsRightSection />
      </div>
    </div>
  );
};

export default layout;
