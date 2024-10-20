import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import React from "react";
import { IconHeadphonesFilled } from "@tabler/icons-react";
import { fetchData } from "@/actions/fetchData";
import Link from "next/link";

const ContactInfo = async () => {
  const getContact = await fetchData({
    route: "/settings/shop",
  });

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center justify-center">
        <GenerateGradientIcon
          IconComponent={IconHeadphonesFilled}
          className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] "
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <Link
          href={`tel:${getContact?.data?.phoneNumber}` || ""}
          className="text-gradient-primary font-medium text-xs md:text-sm"
        >
          <span>+88</span> {getContact?.data?.phoneNumber || "+880123456789"}
        </Link>
        <div className="bg-gradient-primary h-[1.5px]"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
