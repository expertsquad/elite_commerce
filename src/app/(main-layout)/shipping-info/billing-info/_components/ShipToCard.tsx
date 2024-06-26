import { fetchProtectedData } from "@/actions/fetchData";
import Link from "next/link";
import React, { useContext } from "react";
import { IconEdit } from "@tabler/icons-react";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IApiResponse } from "@/interfaces/apiResponse.interface";
import { IUserMe } from "@/interfaces/getMe.interface";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { IAddress } from "@/interfaces/address.interface";
import { UserContext } from "@/Provider/UserProvider";

const ShipToCard = () => {
  const { user } = useContext(UserContext);

  const { orderData } = useContext(OrderInitContext);
  const shippingAddress = orderData.shippingAddress as IAddress;
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
                Email: <p className="text-base text-black-80"> {user?.email}</p>
              </small>
              <small className="flex items-center justify-center text-sm  gap-2">
                Phone:{" "}
                <p className="text-base text-black-80"> {user.phoneNumber}</p>
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
              {shippingAddress.firstName + " " + shippingAddress.lastName}
            </strong>
            <p>{shippingAddress.streetAddress}</p>
            <p>
              {shippingAddress.country +
                " " +
                shippingAddress.state +
                " " +
                shippingAddress.zipCode}
            </p>
            <p>{shippingAddress.phoneNumber}</p>
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
