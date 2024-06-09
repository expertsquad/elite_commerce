"use client";
import Modal from "@/Components/Modal";
import {
  mainMenus,
  storeSocialMedia,
  topMenus,
} from "@/constants/mainMenus.constants";
import { ICategory } from "@/interfaces/category.interface";
import Logo from "@/utils/Logo";
import { IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const HamburgurNav = ({ categories }: { categories: ICategory[] }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showCategory, setShowCategory] = React.useState(false);
  const [showSubcategory, setShowSubcategory] = React.useState<
    { subcategoryName: string; subcategoryId: string }[] | boolean | undefined
  >(false);
  return (
    <div>
      <button onClick={() => setShowMenu(true)}>
        <IconMenu2 />
      </button>

      {/* menu */}
      {showMenu && (
        <Modal
          alignment="left"
          className="w-60 md:hidden"
          setShow={setShowMenu}
          show={showMenu}
        >
          <div className="h-full w-full overflow-auto flex flex-col">
            <div className="p-2">
              <Logo />
            </div>
            <button
              className="flex items-center gap-2 py-3 px-2 bg-gradient-primary w-full text-white"
              onClick={() => {
                setShowCategory(true);
                setShowMenu(false);
              }}
            >
              <IconMenu2 color="white" />
              All Categories
            </button>
            {mainMenus.map((menu) => (
              <Link
                href={menu.href}
                key={menu.label}
                className="py-3 px-2"
                onClick={() => setShowMenu(false)}
              >
                {menu?.label}
              </Link>
            ))}
            {topMenus.map((menu) => (
              <Link
                href={menu.href}
                key={menu.label}
                className="py-3 px-2"
                onClick={() => setShowMenu(false)}
              >
                {menu?.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-auto mb-3 w-full justify-center">
              {storeSocialMedia.map((socialMedia) => (
                <Link
                  key={socialMedia.label}
                  href={socialMedia.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <socialMedia.icon size={20} stroke={1} />
                </Link>
              ))}
            </div>
          </div>
        </Modal>
      )}

      {/* category modal */}
      {showCategory && (
        <Modal
          alignment="left"
          className="w-60 p-0 md:hidden"
          setShow={setShowCategory}
          show={showCategory}
        >
          <div className="h-full w-full overflow-auto flex flex-col">
            <div className="p-2">
              <Logo />
            </div>
            <ul className="flex flex-col">
              {categories.map((category) => (
                <li
                  key={category.categoryName}
                  className="hover:bg-gradient-primary hover:text-white flex items-center justify-between group/category"
                >
                  <Link
                    href={"/category/" + category._id}
                    className={`py-3 px-2 flex ${
                      category?.subcategories?.length
                        ? "basis-10/12"
                        : "basis-full"
                    }`}
                    onClick={() => setShowCategory(false)}
                  >
                    {category?.categoryName}
                  </Link>
                  {category?.subcategories?.length && (
                    <button
                      className="basis-2/12 h-full group-hover/category:bg-gradient-primary"
                      onClick={() => {
                        setShowSubcategory(category.subcategories);
                        setShowCategory(false);
                      }}
                    >
                      <IconChevronRight />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      )}

      {/* suubcategory modal */}
      {showSubcategory && (
        <Modal
          alignment="left"
          className="w-60 p-0 md:hidden"
          setShow={setShowSubcategory}
          show={showSubcategory}
        >
          <div className="h-full w-full overflow-auto flex flex-col">
            <div className="p-2">
              <Logo />
            </div>
            <ul className="flex flex-col">
              {showSubcategory &&
                Array.isArray(showSubcategory) &&
                showSubcategory.map((subcategory) => (
                  <li
                    key={subcategory.subcategoryId}
                    className="hover:bg-gradient-primary hover:text-white flex items-center justify-between group/category"
                  >
                    <Link
                      href={"/subcategory/" + subcategory.subcategoryId}
                      className="py-3 px-2 flex w-full"
                      onClick={() => setShowSubcategory(false)}
                    >
                      {subcategory?.subcategoryName}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HamburgurNav;
