import {
  applePay,
  discoverPay,
  mastercardPay,
  securePayment,
  visaPay,
} from "@/assets";
import { server_url } from "@/constants";
import { IFooter } from "@/interfaces/footer.interface";
import { IconLock } from "@tabler/icons-react";
import Image from "next/image";
import React, { Fragment } from "react";

const PaymentMethods = ({ footer }: { footer: IFooter }) => {
  return (
    <Fragment>
      {footer?.paymentLogos ? (
        <div className="relative overflow-hidden rounded-md w-full h-10">
          <Image
            src={`${server_url}${footer?.paymentLogos}`}
            alt="payment-method"
            fill
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative overflow-hidden rounded-md w-[50px] h-10">
            <Image src={applePay} alt="payment-method" fill />
          </div>
          <div className="relative overflow-hidden rounded-md w-[50px] h-10">
            <Image src={visaPay} alt="payment-method" fill />
          </div>
          <div className="relative overflow-hidden rounded-md w-[50px] h-10">
            <Image src={discoverPay} alt="payment-method" fill />
          </div>
          <div className="relative overflow-hidden rounded-md w-[50px] h-10">
            <Image src={mastercardPay} alt="payment-method" fill />
          </div>
          <div className="bg-black rounded-md text-white py-0.5 px-2 flex flex-col ">
            <div className="flex items-center gap-0.5">
              <span>
                <IconLock
                  className="text-white"
                  stroke={1}
                  width={10}
                  color="#fff"
                  height={10}
                />
              </span>
              <span className="text-[10px]">Secure</span>
            </div>
            <span className="text-[10px] font-semibold">Payment</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PaymentMethods;
