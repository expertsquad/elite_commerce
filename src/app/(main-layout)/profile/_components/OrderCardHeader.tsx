import React from "react";

const OrderCardHeader = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <small className="text-black-50">{title}</small>
      <strong>{value}</strong>
    </div>
  );
};

export default OrderCardHeader;
