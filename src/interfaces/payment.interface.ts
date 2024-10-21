export interface IPayment {
  paymentStatus: "Paid" | "Unpaid";
  paymentMethod: "Card" | "COD";
  paymentMethodName: string;
}
