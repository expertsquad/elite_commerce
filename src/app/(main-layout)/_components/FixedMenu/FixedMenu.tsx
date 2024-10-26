import React from "react";
import ClickToTopBtn from "./ClickToTopBtn";
import MaintainanceBtn from "./MaintainanceBtn";
import MessegeBtn from "./MessegeBtn";
import { fetchData } from "@/actions/fetchData";

const FixedMenu = async () => {
  const socialMedia = await fetchData({ route: "/settings/social-media" });
  const maintainance = await fetchData({ route: "/settings/maintenance" });

  return (
    <div className="flex flex-col gap-5 items-center fixed md:bottom-14 bottom-24  md:right-16 right-5">
      <ClickToTopBtn />
      <MaintainanceBtn data={maintainance?.data} />
      <MessegeBtn data={socialMedia?.data} />
    </div>
  );
};

export default FixedMenu;
