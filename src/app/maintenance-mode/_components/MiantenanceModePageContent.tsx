import TopLeftBall from "./TopLeftBall";
import BottomBlurBall from "./BottomBlurBall";
import Image from "next/image";
import { server_url } from "@/constants";
import { maintenanceMode } from "@/assets";
import { ISocialMedias } from "@/interfaces/socialMedias.interface";
import SocialMediaLink from "./SocialMediaLink";

const MiantenanceModePageContent = ({
  logo,
  socialMedia,
}: {
  logo: string;
  socialMedia: ISocialMedias[];
}) => {
  return (
    <section className="bg-white h-screen backdrop-blur-xl relative">
      {/* TOP LEFT BLUR BALL */}
      <TopLeftBall />
      {/* BOTTOM RIGHT BLUR BALL */}
      <BottomBlurBall />

      <div className=" absolute top-0 left-0 right-0 bg-primary-light h-screen backdrop-blur-xl opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-screen flex text-center justify-center flex-col px-10 md:px-20">
        <div className="flex items-center justify-center">
          <Image
            src={`${server_url + logo}`}
            alt="Shop logo at maintenance mode"
            width={250}
            height={150}
          />
        </div>
        <h2 className="[font-size:_clamp(18px,4.5vw,28px)]">
          The site is currently down for <br /> maintenance mode
        </h2>
        <div className="flex items-center justify-center">
          <Image
            src={maintenanceMode}
            alt="Shop logo at maintenance mode"
            width={450}
            height={300}
          />
        </div>

        <div>Number count is coming soon</div>

        <SocialMediaLink socialMedia={socialMedia} />
      </div>
    </section>
  );
};
export default MiantenanceModePageContent;
