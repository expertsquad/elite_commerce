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
import { ICartProduct } from "@/interfaces/cart.interface";
import { postDataMutation } from "@/actions/postDataMutation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const QuickOrderModal = ({
  show,
  setShow,
  products,
  currencyIcon,
  shippingAmount,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  products: IProduct[] | ICartProduct[];
  currencyIcon?: string;
  shippingAmount: number;
}) => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const orderItems = products?.map((product: IProduct | ICartProduct) => ({
      productId: product?._id,
      variantName: product?.variant?.variantName
        ? product?.variant?.variantName
        : "Not specified",
      orderQuantity: product?.orderQuantity,
    }));

    const value = {
      orderItems: orderItems,
      buyer: {
        fullName: formValues?.fullName,
        phoneNumber: formValues?.phoneNumber,
        address: formValues?.address,
      },
    };

    try {
      const response = await postDataMutation({
        route: "/quick-order/add",
        dataType: "json",
        data: JSON.stringify(value),
        formatted: true,
      });

      if (response?.success) {
        toast.success(response?.message);
        const orderId = response?.data?._id;
        const isQuickOrder = "true";
        router.push(`/successfull/${orderId}?quick-order=${isQuickOrder}`);

        setFormValues(formValues);
        setShow(false);
      }
    } catch (error) {
      toast.error("Quick order failed, Try again!!");
      console.error("Order failed:", error);
    } finally {
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <div>
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
              <div className="flex flex-col gap-5 md:max-h-[540px] md:overflow-y-scroll scrollbar-y-remove">
                {products?.map((product, index) => (
                  <QuickOrderItem
                    key={index}
                    product={product}
                    currencyIcon={currencyIcon}
                  />
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

              <form
                action=""
                onSubmit={handleOrderSubmit}
                className="mt-7 flex flex-col "
              >
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
                  <div className="md:hidden block">
                    <ButtonPrimary
                      buttonType="submit"
                      className={`${
                        loading
                          ? "cursor-wait opacity-60"
                          : "hover:bg-gradient-primary-reverse"
                      }`}
                    >
                      {!loading && <IconBolt height={20} width={20} />}

                      <span className="uppercase text-sm">
                        {loading ? "Order Processing" : `Confirm Order - ${0}`}
                      </span>
                    </ButtonPrimary>
                  </div>
                </div>

                <div className="md:block hidden mt-5">
                  <OrderSummary
                    loading={loading}
                    products={products}
                    currencyIcon={currencyIcon}
                    shippingAmount={shippingAmount}
                  />
                </div>
              </form>
              <Link
                href={"/"}
                className="uppercase text-black-80 md:flex items-center justify-center mt-5 gap-x-1 hidden"
              >
                <IconArrowLeft size={20} />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
          <div className="block md:hidden mx-auto">
            <OrderSummary
              loading={loading}
              products={products}
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default QuickOrderModal;
