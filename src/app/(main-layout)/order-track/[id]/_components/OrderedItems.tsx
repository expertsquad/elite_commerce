import OrderItemsTop from "./OrderItemsTop";
import OrderedItemsTableData from "./OrderedItemsTableData";

type OrderItemsProps = {
  orderId: number;
  orderQuanity: number;
  createdAt: string;
  updatedAt: string;
  orderItems: any;
  id: string;
  orderStatusLength: number;
};

const OrderedItems = ({
  createdAt,
  orderId,
  orderItems,
  orderQuanity,
  updatedAt,
  id,
  orderStatusLength,
}: OrderItemsProps) => {
  return (
    <div className="md:border border-black-10 md:p-[30px] p-5 md:rounded-lg w-full">
      <OrderItemsTop
        createdAt={createdAt}
        orderId={orderId}
        orderItemsLength={orderItems?.length}
        orderQuanity={orderQuanity}
        updatedAt={updatedAt}
      />

      <OrderedItemsTableData
        id={id}
        orderItems={orderItems}
        orderStatusLength={orderStatusLength}
      />
    </div>
  );
};

export default OrderedItems;
