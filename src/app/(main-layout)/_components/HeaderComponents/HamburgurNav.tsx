"use client";
import Modal from "@/Components/Modal";
import { mainMenus } from "@/constants/mainMenus.constants";
import { ICategory } from "@/interfaces/category.interface";
import Logo from "@/utils/Logo";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const HamburgurNav = ({ categories }: { categories: ICategory[] }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>
        <IconMenu2 />
      </button>
      {show && (
        <Modal
          alignment="left"
          className="w-60 p-0 md:hidden"
          setShow={setShow}
          show={show}
        >
          <div className="h-full w-full overflow-auto flex flex-col">
            <div className="p-2">
              <Logo />
            </div>
            <button className="flex items-center gap-2 py-3 px-2 bg-gradient-primary w-full text-white">
              <IconMenu2 color="white" />
              All Categories
            </button>
            {mainMenus.map((menu) => (
              <Link href={menu.href} key={menu.label} className="py-3 px-2">
                {menu?.label}
              </Link>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HamburgurNav;
