"use client";
import React, { Fragment, useState } from "react";
import warningIcon from "@/assets/Images/warningIcon.svg";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { formatDate } from "@/constants/formateDate.constants";

const MaintainanceBtn = ({ data }: { data?: any }) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div
        onClick={() => setShow(!show)}
        className={`border bg-white rounded-full border-warning  items-center justify-center p-[clamp(10px,2.5vw,14px)] cursor-pointer shadow-circle-shadow ${
          data?.isMaintenanceActive ? "flex" : "hidden"
        }`}
      >
        <div className="relative w-[22px] h-[22px]">
          <Image
            src={warningIcon}
            alt="warningIcon"
            fill
            className="object-contain inset-0 w-full h-full"
          />
        </div>
      </div>
      {show && (
        <div className="bg-white shadow-maintainance-shadow  flex items-center border gap-4  border-l-8 border-warning rounded-[5px]  px-5 py-2.5 fixed md:bottom-12 bottom-16 md:left-[5%] left-0">
          <div className="flex items-center justify-center bg-[#FFF9E9] rounded-full p-3">
            <div className=" relative  w-[22px] h-[22px]">
              <Image
                src={warningIcon}
                fill
                className="object-contain w-full h-full inset-0"
                alt="Maintainance Mode img"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-warning [font-size:_clamp(16px,2.5vw,20px)] font-semibold ">
              Warning
            </span>
            <p>
              Our Website is go to{" "}
              <i className="text-danger">Maintenance Mode</i> in (
              <span className="text-black-80 font-semibold">
                {formatDate(data?.startTime)}
              </span>{" "}
              to{" "}
              <span className="text-black-80 font-semibold">
                {formatDate(data?.endTime)}
              </span>
              )
            </p>
          </div>

          <div className="flex items-end justify-end text-danger">
            <button onClick={() => setShow(!show)}>
              <IconX stroke={1} />
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MaintainanceBtn;
