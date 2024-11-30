import React from "react";
import ContactInfo from "./FooterComponents/ContactInfo";
import SocialMediaConnect from "./FooterComponents/SocialMediaConnect";
import AppStoreLink from "./FooterComponents/AppStoreLink";
import PaymentMethods from "./FooterComponents/PaymentMethods";
import Logo from "@/utils/Logo";
import { fetchData } from "@/actions/fetchData";
import FooterMenu from "./FooterComponents/FooterMenu";

const Footer = async () => {
  const footer = await fetchData({
    route: "/settings/footer",
  });
  const footerMenus = footer?.data?.menus;

  return (
    <footer className="min-h-72   bg-image-background md:py-10 py-5 md:pb-10 pb-24 px-5">
      <div className="main-container grid grid-cols-1 md:grid-cols-4 gap-5 ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:items-start items-center gap-3.5">
            {/* logo */}
            <div className="">
              <Logo alignLeft />
            </div>
            <p className="whitespace-pre-wrap text-black-80 md:text-sm text-xs md:text-start text-center">
              {footer?.data?.description}
            </p>
          </div>
          <hr className="md:hidden  border-black-10 " />
          <div className="md:flex flex-col gap-10 hidden">
            <ContactInfo />
            <SocialMediaConnect />
          </div>
        </div>
        <div className="flex  md:col-span-2  justify-between md:flex-row flex-col items-center md:items-start">
          {footerMenus?.map(
            (
              menu: {
                menu: {
                  menuName: string;
                  children: {
                    title: string;
                    link: string;
                  }[];
                };
              },
              index: number
            ) => {
              return <FooterMenu data={menu} key={index} />;
            }
          )}
        </div>
        <div className="flex md:items-end items-center md:flex-col flex-col-reverse md:gap-16 gap-3.5">
          <AppStoreLink footer={footer?.data} />
          <PaymentMethods footer={footer?.data} />
        </div>
        <div className="md:hidden flex flex-col items-center gap-3.5 ">
          <ContactInfo />
          <SocialMediaConnect />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
