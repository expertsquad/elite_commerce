import React, { Fragment } from "react";
import SmallDeviceMegaMenu from "./HeaderComponents/SmallDeviceMegaMenu";
import TopThinNav from "./HeaderComponents/TopThinNav";
import BottomNavSmallDevice from "./HeaderComponents/BottomNavSmallDevice";
import LargeDeviceMegaMenu from "./HeaderComponents/LargeDeviceMegaMenu";

const Header = () => {
  return (
    <Fragment>
      <TopThinNav />
      <header className="border-b border-black-10 mb-3 sticky top-0 z-50 bg-white-transparent backdrop-blur-lg">
        <LargeDeviceMegaMenu />
        <SmallDeviceMegaMenu />
      </header>
      {/* <BottomNavSmallDevice /> */}
    </Fragment>
  );
};

export default Header;
