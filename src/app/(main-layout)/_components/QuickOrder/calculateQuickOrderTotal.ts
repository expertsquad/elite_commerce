import { IProduct } from "@/interfaces/product.interface";

interface ICalculateQuickOrderTotalProps {
  products: IProduct[];
  shippingAmount?: number;
  discountAmount?: number;
}

export const calculateQuickOrderTotal = ({
  products,
  discountAmount = 0,
  shippingAmount = 0,
}: ICalculateQuickOrderTotalProps) => {
  const subtotal = products?.reduce((acc, product) => {
    const productTotal =
      product.orderQuantity *
      (product.variant?.discountedPrice ?? product.variant?.sellingPrice ?? 0);

    if (product.bulk && product.orderQuantity >= product.bulk.minOrder) {
      return acc + productTotal * (1 - product.bulk.discount / 100);
    }

    return acc + productTotal;
  }, 0);

  const total = subtotal + shippingAmount - discountAmount;
  return total;
};
