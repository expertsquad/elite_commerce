export interface OrderItem {
  productName: string;
  productPhotos: string[];
  productId: string;
  brand: {
    brandName: string;
    brandId: string;
  };
  category: {
    categoryName: string;
    categoryId: string;
    subcategory: {
      subcategoryName: string;
      subcategoryId: string;
    };
    _id: string;
  };
  variant: {
    variantName: string;
    sellingPrice: number;
    discountPercentage: number;
    discountedPrice: number;
    _id: string;
  };
  bulk: {
    minOrder: number;
    discount: number;
  };
  orderQuantity: number;
  bulkDiscountAmount: number;
  subTotalPayable: number;
  isReviewed: boolean;
  _id: string;
}

export interface OrderItemWrapper {
  orderItem: OrderItem;
  key?: undefined;
}
