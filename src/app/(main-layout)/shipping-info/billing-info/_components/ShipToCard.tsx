import { fetchProtectedData } from "@/actions/fetchData";
import Link from "next/link";
import React, { useContext } from "react";
import { IconEdit } from "@tabler/icons-react";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IApiResponse } from "@/interfaces/apiResponse.interface";
import { IUserMe } from "@/interfaces/getMe.interface";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";

const ShipToCard = ({ getMe }: { getMe: IApiResponse<IUserMe> }) => {
  const { orderData } = useContext(OrderInitContext);
  console.log(orderData);

  return (
    <div className="">
      <h3 className="uppercase text-lg font-semibold text-gradient-primary my-3 ">
        {" "}
        Contact Information
      </h3>
      <div className="border border-black-10 rounded-lg p-5">
        {/* Phone number and email */}
        <div className=" ">
          <div className="flex items-center justify-between  gap-2 border-b border-black-10 py-2">
            <div className="flex lg:flex-row flex-col gap-2 lg:justify-between justify-start">
              <small className="flex items-center justify-center text-sm  gap-2">
                Email:{" "}
                <p className="text-base text-black-80"> {getMe?.data?.email}</p>
              </small>
              <small className="flex items-center justify-center text-sm  gap-2">
                Phone:{" "}
                <p className="text-base text-black-80">
                  {" "}
                  {getMe?.data?.phoneNumber}
                </p>
              </small>
            </div>
            <Link
              href="/profile/account-details"
              className="text-gradient-primary flex items-center justify-center gap-2"
            >
              <GenerateGradientIcon IconComponent={IconEdit} /> Edit
            </Link>
          </div>
        </div>
        {/* Ship to section */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-start justify-start gap-3 flex-col ">
            <h4 className="text-black-50">Ship to</h4>
            <strong>
              {orderData?.shippingAddress?.firstName +
                " " +
                orderData?.shippingAddress?.lastName}
            </strong>
            <p>{orderData?.shippingAddress?.streetAddress}</p>
            <p>
              {orderData?.shippingAddress?.country +
                " " +
                orderData?.shippingAddress?.state +
                " " +
                orderData?.shippingAddress?.zipCode}
            </p>
            <p>{orderData?.shippingAddress?.phoneNumber}</p>
          </div>

          <div className="flex items-center justify-center ">
            <Link
              href="/shipping-info"
              className="text-gradient-primary flex items-center justify-center gap-2"
            >
              <GenerateGradientIcon IconComponent={IconEdit} /> Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipToCard;
