"use client";
import Modal from "@/Components/Modal";
import React from "react";
import LoginForm from "../login/_components/LoginForm";
import Logo from "@/utils/Logo";
import Link from "next/link";

const LoginInterceptingPage = () => {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          className="w-[600px]"
          alignment="center"
          showCancelBtnINSmallDevice={show}
          isIntercepting={true}
        >
          <div className="flex items-center justify-center h-full w-full relative">
            <div className="w-[clamp(350px,90vw,450px)] h-[500px] bg-white aspect-square flex flex-col items-center justify-center gap-3 z-20 rounded-lg">
              <Logo />
              <p>Best Online ecommerce website for you</p>
              <LoginForm />
              <p className="text-sm mt-3">
                Don&apos;t have your account?{" "}
                <Link
                  href="/sign-up"
                  className="text-gradient-primary font-bold"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LoginInterceptingPage;
