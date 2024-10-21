"use client";
import CustomInput from "@/Components/CustomInput";
import SubmitButton from "@/Components/SubmitButton";
import React, { useContext, useState } from "react";
import { loginServerAction } from "./loginServerAction";
import { useRouter } from "next/navigation";
import { fetchProtectedData } from "@/actions/fetchData";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { storages } from "@/constants";
import { mergeProducts } from "@/utils/mergeProduct.utils";
import { updatedCartMutation } from "@/utils/updateCart.utils";
import PasswordInput from "@/app/(main-layout)/profile/_components/PasswordInput";
import MergingIndicator from "./MergingIndicator";
import { CartContext } from "@/Provider/CartProvider";
import Loading from "@/app/loading";
import { IErrorMessages } from "@/interfaces/error.interface";
import CustomLoader from "@/Components/CustomLoader";

const LoginForm = () => {
  const { setRefetch } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<IErrorMessages[] | null>(null);

  const [merging, setMerging] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // handle login action
    const formData = new FormData(event.currentTarget);
    const result = await loginServerAction(formData);

    if (result?.success) {
      setIsLoading(false);
      setMerging(true);
      // merge remote and local cart items
      const remoteCart = await fetchProtectedData({
        route: "/cart/me",
      });
      const localProducts = getLocalStorageData(storages.cartProducts) || [];
      const remoteProducts = remoteCart?.data?.products || [];
      const mergedProducts = mergeProducts(localProducts, remoteProducts);
      await updatedCartMutation(mergedProducts);
      // refetch to show updated cart
      setRefetch((prev) => prev + 1);
      router.back();
      setMerging(false);
    } else {
      setError(result?.errorMessages);
      setIsLoading(false);
    }
  };

  if (merging) {
    return <MergingIndicator />;
  }

  const globalError = error?.find(
    (err) => !err.path || err.path.includes("/login")
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-start justify-center relative"
    >
      {isLoading && <CustomLoader />}
      <fieldset className="w-3/4 flex flex-col gap-3 border-t border-black-10">
        <legend className="mx-auto">Log in</legend>

        <CustomInput placeholder="Email or Phone" name="email" errors={error} />
        <PasswordInput
          placeholder="Type your password"
          name="password"
          error={error?.find((err) => err.path === "password")?.message}
        />
        <small className="ml-auto">Forgot password</small>

        {globalError && (
          <small className="text-danger text-xs text-center">
            {globalError.message}
          </small>
        )}
        <SubmitButton
          className={"bg-gradient-primary w-full py-3 text-white rounded-md"}
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
