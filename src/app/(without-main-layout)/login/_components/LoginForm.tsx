"use client";
import CustomInput from "@/Components/CustomInput";
import SubmitButton from "@/Components/SubmitButton";
import React, { useState } from "react";
import { loginServerAction } from "./loginServerAction";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { fetchProtectedData } from "@/actions/fetchData";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { storages } from "@/constants";
import { mergeProducts } from "@/utils/mergeProduct.utils";
import { updatedCartMutation } from "@/utils/updateCart.utils";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const rounter = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // handle login action
    const formData = new FormData(event.currentTarget);
    const result = await loginServerAction(formData);

    if (result?.success) {
      setIsLoading(false);
      // merge remote and local cart items
      const remoteCart = await fetchProtectedData({
        route: "/cart/me",
      });
      const localProducts = getLocalStorageData(storages.cartProducts) || [];
      const remoteProducts = remoteCart?.data?.products || [];
      const mergedProducts = mergeProducts(localProducts, remoteProducts);
      await updatedCartMutation(mergedProducts);
      rounter.back();
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-start justify-center"
    >
      <fieldset className="w-3/4 flex flex-col gap-3 border-t border-black-10">
        <legend className="mx-auto">Log in</legend>

        <CustomInput placeholder="Email or Phone" name="email" />
        <CustomInput placeholder="Type your password" name="password" />
        <small className="ml-auto">Forgot password</small>
        <SubmitButton
          className={"bg-gradient-primary w-full py-1 text-white rounded-md"}
        >
          Login
        </SubmitButton>
        <div className="flex mx-auto gap-2 text-xs">
          <input type="checkbox" id="expandDate" name="isDayExtended" />
          <label htmlFor="expandDate">Remember me for 30 days</label>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
