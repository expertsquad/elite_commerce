export interface Order {
  _id: string;
  orderItems: Array<any>; // Replace 'any' with the specific type if available
  buyer: {
    // Define the structure of the buyer object here
    [key: string]: any; // Replace with specific fields
  };
  totalQuantity: number;
  totalDiscount: number;
  additionalDiscount: number;
  payment: {
    // Define the structure of the payment object here
    [key: string]: any; // Replace with specific fields
  };
  orderStatus: {
    // Define the structure of the orderStatus object here
    [key: string]: any; // Replace with specific fields
  };
  existOrderStatus?: {
    // Define the structure of the orderStatus object here
    [key: string]: any; // Replace with specific fields
  };
  createdAt: string;
  updatedAt: string;
  orderId: string;
  totalPrice: number;
  shippingCharge: number;
  totalPayable: number;
  __v: number;
  reasonOfRejection: string;
}
