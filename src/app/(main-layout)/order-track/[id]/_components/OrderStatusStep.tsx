import React from "react";
import Stepper from "./Stepper";

const OrderStatusStep = ({ orderStatus }: { orderStatus: any[] }) => {
  const statuses = [
    {
      title: "Order placed",
      loadingText: "Processing to Order Placed",
      serialNumber: "01",
    },
    {
      title: "Packaging",
      loadingText: "Processing to Packaging",
      serialNumber: "02",
    },
    {
      title: "Shipping",
      loadingText: "Processing to Shipping",
      serialNumber: "03",
    },
    {
      title: "Delivered",
      loadingText: "Processing to Delivered",
      serialNumber: "04",
    },
  ];

  return (
    <div className="bg-image-background p-5 flex flex-col gap-y-5 md:gap-y-5 md:flex-row md:items-center justify-between">
      {statuses.map((step, index) => {
        const statusMatch = orderStatus?.find(
          (status) => status.status === step.title
        );
        const isCompleted = !!statusMatch;
        const completedDate = isCompleted && statusMatch.time;
        const completedTime = isCompleted && statusMatch.time;

        return (
          <Stepper
            key={index}
            loadingText={step.loadingText}
            serialNumber={step.serialNumber}
            iscompletedTime={completedTime}
            iscompletedDate={completedDate}
            title={step.title}
            isCompleted={isCompleted}
          />
        );
      })}
    </div>
  );
};

export default OrderStatusStep;
