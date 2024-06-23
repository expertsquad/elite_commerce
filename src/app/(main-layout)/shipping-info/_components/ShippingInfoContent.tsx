"use client";
import { IGetMeResponse, IUser } from "@/interfaces/user.interface";
import { useRouter } from "next/navigation";

const ShippingInfoContent = ({ getMe }: { getMe: IGetMeResponse }) => {
  const router = useRouter();

  if (!getMe || !getMe.data) {
    router.push("/login");
  }

  return (
    <>
      {/* contact information here */}
      <div className="my-2">
        <h3 className="uppercase text-lg font-semibold text-gradient-primary my-5">
          Contact Information
        </h3>
        <div className="flex justify-center items-center lg:flex-row flex-col w-full gap-4 text-black-50">
          <p className="p-3 border border-black-10 rounded-lg w-full">
            {getMe?.data?.email}
          </p>
          <p className="p-3 border border-black-10 rounded-lg w-full">
            {getMe?.data?.phoneNumber}
          </p>
        </div>
      </div>
    </>
  );
};

export default ShippingInfoContent;
