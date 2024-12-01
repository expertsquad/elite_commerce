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
        ""
      )}
    </Fragment>
  );
};

export default PaymentMethods;
