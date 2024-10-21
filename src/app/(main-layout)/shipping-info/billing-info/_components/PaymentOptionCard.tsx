import Image from "next/image";
import CODIcon from "@/assets/Images/CODIcon.svg";
import CardIcon from "@/assets/Images/card.png";

const PaymentOptionCard = ({
  name,
  title,
  onSelect,
  selected,
}: {
  name: string;
  title: string;
  onSelect: () => void;
  selected: boolean; // Update type to boolean
}) => {
  return (
    <div
      className="w-full flex items-center justify-start gap-4 bg-gradient-primary-light p-5 rounded-lg cursor-pointer"
      onClick={onSelect}
    >
      <input
        type="radio"
        className="h-5 w-5"
        name={name}
        checked={selected}
        readOnly
      />
      <Image
        alt="Card Image"
        src={
          title === "sslcommerz"
            ? CardIcon
            : title === "COD"
            ? CODIcon
            : title === "stripe"
            ? CardIcon
            : ""
        }
        height={30}
        width={30}
      />
      <p>
        {title === "sslcommerz"
          ? "Debit / Credit Card"
          : title === "COD"
          ? "Cash On Delivery"
          : title === "stripe"
          ? "Debit / Credit Card"
          : ""}
      </p>
    </div>
  );
};

export default PaymentOptionCard;
