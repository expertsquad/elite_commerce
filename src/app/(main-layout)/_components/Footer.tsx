import React from "react";
import ContactInfo from "./FooterComponents/ContactInfo";
import SocialMediaConnect from "./FooterComponents/SocialMediaConnect";
import {
  Categories,
  Helps,
  myAccount,
} from "@/constants/footerMenus.constants";
import AppStoreLink from "./FooterComponents/AppStoreLink";
import PaymentMethods from "./FooterComponents/PaymentMethods";

const Footer = () => {
  return (
    <div className="min-h-72   bg-gradient-primary-light md:py-10 py-5 md:pb-10 pb-24 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:items-start items-center gap-3.5">
            {/* logo */}
            <div className="">
              <span className="text-2xl text-gradient-primary font-semibold ">
                LOGO
              </span>
            </div>
            <p className="whitespace-pre-wrap text-black-80 md:text-sm text-xs md:text-start text-center">
              Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet faucibus
              malesuada vitae. Amet imperdiet pulvinar blandit pulvinar. Quam
              consectetur aliquam sit libero eu ultrices sed{" "}
            </p>
          </div>
          <hr className="md:hidden border-black-50 " />
          <div className="md:flex flex-col gap-10 hidden">
            <ContactInfo />
            <SocialMediaConnect />
          </div>
        </div>
        <div className="flex  md:col-span-2  justify-between md:flex-row flex-col items-center md:items-start">
          <div className="flex flex-col md:items-start items-center md:gap-5 gap-3.5">
            <h6 className="text-black md:font-medium md:text-base text-lg ">
              My Account
            </h6>
            <ul className="flex flex-col md:items-start items-center  md:gap-1 gap-3.5 ">
              {myAccount.map((item: string, index: number) => (
                <li className="md:text-black-80 text-black-50" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="md:hidden bg-black-50 h-[1px] w-full"></div>
          </div>

          <div className="flex flex-col md:items-start items-center md:gap-5 gap-3.5 ">
            <h6 className="text-black md:font-medium md:text-base text-lg ">
              Helps
            </h6>
            <ul className="flex flex-col md:items-start items-center  md:gap-1 gap-3.5 ">
              {Helps.map((item: string, index: number) => (
                <li className="md:text-black-80 text-black-50" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="md:hidden bg-black-50 h-[1px] w-full"></div>
          </div>

          <div className="flex flex-col md:items-start items-center md:gap-5 gap-3.5">
            <h6 className="text-black md:font-medium md:text-base text-lg ">
              Categories
            </h6>
            <ul className="flex flex-col md:items-start items-center md:gap-1 gap-3.5 ">
              {Categories.map((item: string, index: number) => (
                <li className="md:text-black-80 text-black-50" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex md:items-end items-center md:flex-col flex-col-reverse md:gap-16 gap-3.5">
          <AppStoreLink />
          <PaymentMethods />
        </div>
        <div className="md:hidden flex flex-col items-center gap-3.5 ">
          <ContactInfo />
          <SocialMediaConnect />
        </div>
      </div>
    </div>
  );
};

export default Footer;
