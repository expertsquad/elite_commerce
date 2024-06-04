const ProductCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`2xl:w-72 lg:w-60 w-56 bg-gradient-primary-light aspect-4/5 ${className}`}
    >
      {children}
    </div>
  );
};

export default ProductCard;
