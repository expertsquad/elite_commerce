import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import React from "react";
import { IconHeadphonesFilled } from "@tabler/icons-react";

const ContactInfo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center justify-center">
        <GenerateGradientIcon
          IconComponent={IconHeadphonesFilled}
          className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] "
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-gradient-primary font-medium text-xs md:text-sm">
          (219) 555-0114
        </span>
        <div className="bg-gradient-primary h-[1.5px]"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
