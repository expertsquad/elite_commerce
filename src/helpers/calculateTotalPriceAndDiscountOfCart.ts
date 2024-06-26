import { ICartProduct } from "@/interfaces/cart.interface";

const calculateTotalPriceAndDiscountOfCart = (products: ICartProduct[]) => {
  let totalPrice = 0;
  let totalDiscount = 0;

  products?.forEach((product) => {
    const pricePerUnit =
      product?.variant.discountedPrice || product?.variant.sellingPrice;
    let orderTotal = pricePerUnit * product?.orderQuantity;

    if (product?.bulk && product?.orderQuantity >= product?.bulk.minOrder) {
      const discountAmount = (product?.bulk.discount / 100) * orderTotal;
      orderTotal -= discountAmount;
      totalDiscount += discountAmount;
    }

    totalPrice += orderTotal;
  });

  return { totalPrice, totalDiscount };
};

export default calculateTotalPriceAndDiscountOfCart;
