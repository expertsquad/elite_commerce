export interface IOrderApiResponse {
  success: boolean;
  message: string;
  meta: Meta;
  data: Order[];
}

interface Meta {
  limit: number;
  page: number;
  total: number;
}

interface Order {
  _id: string;
  orderItems: OrderItem[];
  buyer: Buyer;
  totalQuantity: number;
  totalDiscount: number;
  additionalDiscount: number;
  payment: Payment;
  orderStatus: OrderStatus;
  createdAt: string;
  updatedAt: string;
  orderId: string;
  totalPrice: number;
  shippingCharge: number;
  totalPayable: number;
  __v: number;
}

interface OrderItem {
  productName: string;
  productPhotos: string[];
  productId: string;
  brand: Brand;
  category: Category;
  variant: Variant;
  bulk: Bulk;
  orderQuantity: number;
  bulkDiscountAmount: number;
  subTotalPayable: number;
  isReviewed: boolean;
  _id: string;
}

interface Brand {
  brandName: string;
  brandId: string;
}

interface Category {
  categoryName: string;
  categoryId: string;
  subcategory: Subcategory;
  _id: string;
}

interface Subcategory {
  subcategoryName: string;
  subcategoryId: string;
}

interface Variant {
  variantName: string;
  sellingPrice: number;
  discountPercentage: number;
  discountedPrice: number;
  _id: string;
}

interface Bulk {
  minOrder: number;
  discount: number;
}

interface Buyer {
  userId: string;
  fullName: string;
  profilePhoto: string;
  email: string;
  phoneNumber: string;
  shippingAddress: Address;
  billingAddress: Address;
}

interface Address {
  firstName: string;
  lastName: string;
  streetAddress: string;
  state: string;
  country: string;
  zipCode: number;
  phoneNumber: string;
  companyName?: string; // Optional property for billing address
  _id: string;
}

interface Payment {
  paymentMethod: string;
  paymentStatus: string;
}

interface OrderStatus {
  status: string;
  time: string;
  _id: string;
}
