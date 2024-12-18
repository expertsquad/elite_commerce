"use client";
import { ISocialMedia } from "@/interfaces/footer.interface";
import Logo from "@/utils/Logo";
import {
  IconBrandMessenger,
  IconBrandWhatsapp,
  IconMessageCircleFilled,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const MessegeBtn = ({ data }: { data?: any }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <button
        aria-label="message-btn"
        onClick={() => setShow(!show)}
        className="bg-gradient-primary hover:bg-gradient-primary-reverse transition-all duration-300 rounded-full flex items-center justify-center p-[clamp(10px,2.5vw,14px)] cursor-pointer shadow-circle-shadow outline-none"
      >
        {show ? (
          <IconX className="text-white" />
        ) : (
          <IconMessageCircleFilled className="text-white" />
        )}
      </button>
      {show && (
        <div className="bg-white rounded-[10px] p-5 fixed md:right-10 right-5 md:bottom-[120px] bottom-[150px]  max-w-[350px]   shadow-messege-card-shadow transition-all duration-700">
          <div className="flex items-end justify-end">
            <button className="self-end" onClick={() => setShow(!show)}>
              <IconX className="text-black-50" />
            </button>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-2.5">
              <Logo />
              <p className="text-black-80 [font-size:_clamp(14px,2.5vw,16px)]">
                Best online ecommerce website for you
              </p>
            </div>

            <div className="flex flex-col gap-5 items-center ">
              {data?.socialMedias?.map((socialMedia: ISocialMedia) => {
                if (socialMedia?.isActive) {
                  const href =
                    socialMedia?.mediaName?.toLowerCase() === "whatsapp"
                      ? `https://wa.me/${socialMedia?.phoneNumber}`
                      : socialMedia?.mediaName?.toLowerCase() === "messenger"
                      ? `https://m.me/${socialMedia?.userName}`
                      : "#";

                  return (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer" // For security best practices
                      className={`px-5 py-3 flex gap-2.5 items-center justify-center rounded-md cursor-pointer ${
                        socialMedia?.mediaName === "Whatsapp"
                          ? "hover:bg-[#1e432b]"
                          : socialMedia?.mediaName === "Messenger"
                          ? "hover:bg-messenger-bg-reverse"
                          : ""
                      } ${
                        socialMedia?.mediaName === "Whatsapp"
                          ? "bg-[#25D366]"
                          : socialMedia?.mediaName === "Messenger"
                          ? "bg-messenger-bg"
                          : ""
                      } w-full text-white `}
                      key={socialMedia?._id}
                    >
                      {socialMedia?.mediaName === "Whatsapp" ? (
                        <IconBrandWhatsapp size={20} />
                      ) : socialMedia?.mediaName === "Messenger" ? (
                        <IconBrandMessenger />
                      ) : (
                        ""
                      )}
                      {socialMedia?.mediaName}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessegeBtn;
