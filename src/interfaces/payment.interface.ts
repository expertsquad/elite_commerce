export interface IPayment {
  paymentStatus: "Paid" | "Unpaid" | any;
  paymentMethod: "Card" | "COD";
}
