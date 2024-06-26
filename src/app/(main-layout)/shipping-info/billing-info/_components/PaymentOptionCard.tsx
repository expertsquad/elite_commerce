import Image from "next/image";
import React from "react";

const PaymentOptionCard = ({
  name,
  cardIcon,
  title,
  onSelect,
}: {
  name: string;
  cardIcon: string;
  title: string;
  onSelect: () => void; // Add this line
}) => {
  return (
    <div className="flex items-center justify-start gap-4 bg-gradient-primary-light p-5 rounded-lg ">
      <input
        type="radio"
        className="h-5 w-5"
        name="paymentOption"
        onChange={onSelect}
      />{" "}
      {/* Update this line */}
      <Image alt="Card Image" src={cardIcon} height={30} width={30} />
      <p>{title}</p>
    </div>
  );
};

export default PaymentOptionCard;
