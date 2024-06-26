"use client";
import Modal from "@/Components/Modal";
import { IconArrowLeft, IconBolt } from "@tabler/icons-react";
import React, { useState } from "react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import Link from "next/link";
import { IProduct } from "@/interfaces/product.interface";
import { QuickOrderItem } from "./QuickOrderItems";
import { OrderSummary } from "./OrderSummary";
import CustomInput from "@/Components/CustomInput";

const QuickOrderModal = ({
  show,
  setShow,
  products,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  products: IProduct[];
}) => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <Modal
      show={show}
      setShow={setShow}
      alignment="center"
      className="max-h-screen md:w-[768px] lg:w-[950px] w-full overflow-y-scroll scrollbar-y-remove"
      showCancelBtnINSmallDevice={true}
    >
      <div className="">
        <div className="flex justify-between gap-5 md:flex-row flex-col-reverse md:p-2 p-3.5 relative">
          <div className="flex-1 flex md:border-r border-black-10  flex-col md:pr-5 ">
            <div className="md:flex flex-col gap-3.5 hidden">
              <span className="font-semibold  text-lg md:block hidden">
                Quick Order
              </span>
            </div>
            <hr className="border-black-10 my-5" />
            <span className="md:hidden block text-black-50 text-sm mb-5">
              Item lists
            </span>
            <div className="flex flex-col gap-5">
              {products.map((product, index) => (
                <QuickOrderItem key={index} product={product} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="md:hidden flex-col gap-3.5 flex md:my-10">
              <span className="font-semibold  text-lg md:block hidden">
                Quick Order
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="uppercase font-semibold text-lg">
                Cash on delivery
              </span>
              <span className="text-black-50 text-base">
                Enter Your shipping address
              </span>
            </div>

            <form action="" className="mt-7 flex flex-col ">
              <div className="flex flex-col gap-4">
                <CustomInput
                  placeholder="Type Name"
                  label="Full Name"
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                />
                <CustomInput
                  placeholder="+880"
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                />
                <CustomInput
                  placeholder="Dhaka, Bangladesh"
                  label="Address"
                  name="address"
                  type="text"
                  value={formValues.address}
                  onChange={handleInputChange}
                />
                <div className="md:hidden block ">
                  <ButtonPrimary buttonType="submit">
                    <IconBolt height={18} width={18} />
                    <span className="uppercase text-sm">
                      Confirm Order - $1264.00
                    </span>
                  </ButtonPrimary>
                </div>
              </div>

              <div className="md:block hidden mt-5">
                <OrderSummary />
              </div>
            </form>
            <Link
              href={"/"}
              className="uppercase text-black-80 md:flex items-center justify-center mt-5 gap-2  hidden"
            >
              <IconArrowLeft />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
        <div className="md:hidden mx-auto">
          <OrderSummary />
        </div>
      </div>
    </Modal>
  );
};

export default QuickOrderModal;
