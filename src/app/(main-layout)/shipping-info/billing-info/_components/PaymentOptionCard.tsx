import Image from "next/image";

const PaymentOptionCard = ({
  name,
  cardIcon,
  title,
  onSelect,
  selected,
}: {
  name: string;
  cardIcon: string;
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
      <Image alt="Card Image" src={cardIcon} height={30} width={30} />
      <p>{title}</p>
    </div>
  );
};

export default PaymentOptionCard;
