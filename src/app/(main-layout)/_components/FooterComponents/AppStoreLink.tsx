import appStore from "@/assets/Images/appStore.svg";
import googlePlay from "@/assets/Images/GooglePlay.svg";
import { IFooter } from "@/interfaces/footer.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppStoreLink = ({ footer }: { footer: IFooter }) => {
  return (
    <div className="flex md:items-end items-center justify-center md:justify-end md:flex-col gap-5 w-full">
      <Link target="_blank" href={`${footer?.playstoreLink}`}>
        <div className="md:w-[168px] w-[140px] h-[50px] relative">
          <Image
            src={googlePlay}
            alt="google play"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <Link target="_blank" href={`${footer?.appstoreLink}`}>
        <div className="md:w-[168px] w-[140px] h-[50px] relative">
          <Image
            src={appStore}
            alt="google play"
            fill
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default AppStoreLink;
