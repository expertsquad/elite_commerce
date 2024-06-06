"use client";
import { IconFilter } from "@tabler/icons-react";
import React, { Fragment, useState } from "react";
import BrandFilterDrawer from "./BrandFilterDrawer";

const Filter = () => {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  return (
    <Fragment>
      <div
        onClick={() => setShowFilterDrawer(true)}
        className="md:hidden flex items-center gap-2.5 border-black-10 border rounded-md py-2  px-2.5 cursor-pointer"
      >
        <span>
          <IconFilter className="text-black-50" width={16} height={16} />
        </span>
        <span className="text-xs text-black-80">Filter</span>
      </div>
      {showFilterDrawer && (
        <BrandFilterDrawer
          showFilterDrawer={showFilterDrawer}
          setShowFilterDrawer={setShowFilterDrawer}
        />
      )}
    </Fragment>
  );
};

export default Filter;
