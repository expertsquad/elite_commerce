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
import { postDataUnauthenticatedMutation } from "@/actions/postDataMutation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  handleDecreaseQuickOrderQuantity,
  handleIncreaseQuickOrderQuantity,
  handleRemoveQuickOrderProduct,
} from "@/utils/quickorder/quickOrdersFunctions";
import CustomLoading from "@/Components/CustomLoader";

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
  const [productList, setProductList] = useState(
    products?.map((product) => ({
      ...product,
      orderQuantity: product?.orderQuantity ? product?.orderQuantity : 1,
    }))
  );
  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    phoneNumber: false,
    address: false,
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // <== Check for empty fields and set errors ==>
    const errors = {
      fullName: formValues.fullName === "",
      phoneNumber: formValues.phoneNumber === "",
      address: formValues.address === "",
    };
    setFormErrors(errors);

    // <== If any errors exist, don't proceed with the submission ==>
    if (Object.values(errors).some((error) => error)) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    const orderItems = productList.map((product) => ({
      productId: product?._id,
      variantName: product?.variant?.variantName || "Not specified",
      orderQuantity: product?.orderQuantity,
    }));

    const value = {
      orderItems: orderItems,
      buyer: {
        fullName: formValues.fullName,
        phoneNumber: formValues.phoneNumber,
        address: formValues.address,
      },
    };

    try {
      const response = await postDataUnauthenticatedMutation({
        route: "/quick-order/add",
        dataType: "json",
        data: JSON.stringify(value),
        formatted: true,
      });

      if (response?.success) {
        toast.success(response.message);
        const orderId = response?.data?._id;
        router.push(
          `/successfull/${orderId}?quickorder=true&quickorderId=${orderId}`
        );
        setFormValues({ fullName: "", phoneNumber: "", address: "" });
        setShow(false);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Quick order failed, Try again!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Modal
        show={show}
        setShow={setShow}
        alignment="center"
        className={`max-h-screen md:w-[768px] lg:w-[950px] w-full overflow-y-scroll scrollbar-y-remove ${
          loading && "relative overflow-hidden"
        }`}
        showCancelBtnINSmallDevice={true}
      >
        {loading && <CustomLoading />}
        <div className="flex justify-between gap-5 md:flex-row flex-col-reverse md:p-2 p-3.5 relative">
          <div className="flex-1 flex md:border-r border-black-10 flex-col md:pr-5">
            <div className="md:flex flex-col gap-3.5 hidden">
              <span className="font-semibold text-lg md:block hidden">
                Quick Order
              </span>
            </div>
            <hr className="border-black-10 my-5" />
            <span className="md:hidden block text-black-50 text-sm mb-5">
              Item lists
            </span>
            <div className="flex flex-col gap-5 md:max-h-[540px] md:overflow-y-scroll scrollbar-y-remove">
              {productList?.length > 0 ? (
                productList?.map((product, index) => (
                  <QuickOrderItem
                    key={index}
                    product={product}
                    currencyIcon={currencyIcon}
                    onIncreaseQuantity={() =>
                      handleIncreaseQuickOrderQuantity(
                        product?._id,
                        setProductList,
                        product?.variant
                      )
                    }
                    onDecreaseQuantity={() =>
                      handleDecreaseQuickOrderQuantity(
                        product?._id,
                        setProductList,
                        product?.variant
                      )
                    }
                    onRemoveProduct={() =>
                      handleRemoveQuickOrderProduct(
                        product?._id,
                        setProductList,
                        product?.variant
                      )
                    }
                  />
                ))
              ) : (
                <div className="flex flex-col justify-center items-center h-full">
                  <span className="text-danger text-sm">
                    No products available
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="md:hidden flex-col gap-3.5 flex md:my-10">
              <span className="font-semibold text-lg md:block hidden">
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

            <form onSubmit={handleOrderSubmit} className="mt-7 flex flex-col">
              <div className="flex flex-col gap-4">
                <CustomInput
                  placeholder="Type Name"
                  label="Full Name"
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  required={true}
                  // inputStyle={`${
                  //   formValues.fullName === "" &&
                  //   "border-danger border-opacity-10"
                  // }`}
                />
                <CustomInput
                  placeholder="+880"
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                  required={true}
                  // inputStyle={`${
                  //   formValues.phoneNumber === "" &&
                  //   "border-danger border-opacity-10"
                  // }`}
                />
                <CustomInput
                  placeholder="Dhaka, Bangladesh"
                  label="Address"
                  name="address"
                  type="text"
                  value={formValues.address}
                  onChange={handleInputChange}
                  required={true}
                  // inputStyle={`${
                  //   formValues.address === "" &&
                  //   "border-danger border-opacity-10"
                  // }`}
                />
                <div className="md:hidden block">
                  <ButtonPrimary
                    buttonType="submit"
                    disabled={productList?.length === 0}
                    className={`!py-3 ${
                      loading
                        ? "cursor-wait opacity-60"
                        : "hover:bg-gradient-primary-reverse"
                    }`}
                  >
                    {!loading && <IconBolt height={20} width={20} />}
                    <span className="uppercase text-sm">
                      {loading
                        ? "Order Processing"
                        : `Confirm Order - ${currencyIcon || ""}0`}
                    </span>
                  </ButtonPrimary>
                </div>
              </div>
              <div className="md:block hidden mt-5">
                <OrderSummary
                  loading={loading}
                  products={productList}
                  currencyIcon={currencyIcon}
                  shippingAmount={shippingAmount}
                />
              </div>
            </form>
            <Link
              href="/"
              className="uppercase text-black-80 md:flex items-center justify-center mt-5 gap-x-1 hidden hover:text-primary-light"
            >
              <IconArrowLeft size={20} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
        <div className="block md:hidden mx-auto">
          <OrderSummary
            loading={loading}
            products={productList}
            currencyIcon={currencyIcon}
            shippingAmount={shippingAmount}
          />
        </div>
      </Modal>
    </div>
  );
};

export default QuickOrderModal;
