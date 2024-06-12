import { formatDate } from "@/constants/formateDate.constants";
import React from "react";

type StepperProps = {
  serialNumber: string;
  title: string;
  loadingText: string;
  isCompleted: boolean;
  iscompletedTime: string;
  iscompletedDate: string;
};

const Stepper = ({
  iscompletedTime,
  iscompletedDate,
  loadingText,
  serialNumber,
  title,
  isCompleted,
}: StepperProps) => {
  return (
    <div
      className={`flex items-center gap-x-2.5 ${
        isCompleted ? "text-gradient-primary" : "text-black-50"
      }`}
    >
      <span className="font-bold text-[30px] md:text-5xl">{serialNumber}</span>
      <div>
        <span>{title}</span>
        <div>
          {isCompleted ? (
            <div>
              <span>{formatDate(iscompletedDate)}</span>{" "}
              <span>{new Date(iscompletedTime).toLocaleTimeString()}</span>
            </div>
          ) : (
            <span>{loadingText}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
