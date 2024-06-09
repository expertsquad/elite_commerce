import React from "react";

const OrderCardHeader = ({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <small className="text-black-50">{title}</small>
      <p className={`${className}`}>{value}</p>
    </div>
  );
};

export default OrderCardHeader;
