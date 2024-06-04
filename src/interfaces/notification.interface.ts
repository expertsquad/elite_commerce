export interface INotification {
  title: string;
  subTitle: string;
  productPhoto: string;
  price?: number;
  orderId?: string;
  onlineOrderId?: string;

  isReaded?: boolean;
  userId: string;
}
