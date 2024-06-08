import React, { Fragment } from "react";
import LargeDeviceMegaMenu from "./HeaderComponents/LargeDeviceMegaMenu";
import SmallDeviceMegaMenu from "./HeaderComponents/SmallDeviceMegaMenu";

const Header = () => {
  return (
    <Fragment>
      <header className="border-b border-black-10 mb-3 sticky top-0 z-50 bg-white">
        <LargeDeviceMegaMenu />
        <SmallDeviceMegaMenu />
      </header>
    </Fragment>
  );
};

export default Header;
