"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import TopLeftBall from "./TopLeftBall";
import BottomBlurBall from "./BottomBlurBall";
import Image from "next/image";
import { server_url } from "@/constants";
import { maintenanceMode } from "@/assets";
import { ISocialMedias } from "@/interfaces/socialMedias.interface";
import SocialMediaLink from "./SocialMediaLink";
import CountdownTimer from "@/app/(main-layout)/_components/BestDealsSection/CountDownTimer";

const MiantenanceModePageContent = ({
  logo,
  socialMedia,
  maintainance,
}: {
  logo: string;
  socialMedia: ISocialMedias[];
  maintainance?: any;
}) => {
  const router = useRouter();

  useEffect(() => {
    const startTime = new Date(maintainance?.startTime);
    const endTime = new Date(maintainance?.endTime);
    const currentTime = new Date();

    const isWithinMaintenanceTime =
      currentTime >= startTime && currentTime <= endTime;

    if (isWithinMaintenanceTime) {
      const handleBeforeUnload = () => {
        router.push("/maintenance");
      };
      window.addEventListener("popstate", handleBeforeUnload);

      return () => {
        window.removeEventListener("popstate", handleBeforeUnload);
      };
    }
  }, [maintainance, router]);

  return (
    <section className="bg-white h-screen backdrop-blur-xl relative">
      <TopLeftBall />
      <BottomBlurBall />

      <div className="absolute top-0 left-0 right-0 bg-primary-light h-screen backdrop-blur-xl opacity-10"></div>
      <div className="py-[clamp(20px,2.5vw,30px)]">
        <div className="flex flex-col items-center gap-[clamp(30px,2.5vw,40px)]">
          <div className="flex items-center justify-center">
            <Image
              src={`${server_url + logo}`}
              alt="Shop logo at maintenance mode"
              width={250}
              height={150}
            />
          </div>
          <h2 className="[font-size:_clamp(18px,4.5vw,28px)] font-bold text-black-80 uppercase text-center">
            The site is currently down for <br /> maintenance
          </h2>
        </div>
        <div className="flex items-center justify-center my-[clamp(20px,2.5vw,30px)]">
          <Image
            src={maintenanceMode}
            alt="Shop logo at maintenance mode"
            width={740}
            height={370}
          />
        </div>
        <div className="flex items-center flex-col gap-10 justify-center">
          <CountdownTimer
            startDate={maintainance?.startTime}
            endDate={maintainance?.endTime}
          />
          <div className="border rounded-full border-secondary p-[2px]">
            <div className="bg-gradient-secondary text-white rounded-full py-2 px-16 uppercase">
              Coming Soon
            </div>
          </div>
        </div>
        <SocialMediaLink socialMedia={socialMedia} />
      </div>
    </section>
  );
};

export default MiantenanceModePageContent;
