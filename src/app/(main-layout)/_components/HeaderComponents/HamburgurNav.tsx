"use client";
import { Button } from "@/Components/Buttons";
import Modal from "@/Components/Modal";
import {
  mainMenus,
  storeSocialMedia,
  topMenus,
} from "@/constants/mainMenus.constants";
import { ICategory, ISubcategory } from "@/interfaces/category.interface";
import Logo from "@/utils/Logo";
import {
  IconArrowNarrowLeft,
  IconChevronRight,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import MainMenuItem from "./MainMenuItem";

const HamburgurNav = ({ categories }: { categories: ICategory[] }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<React.ReactNode>(false);
  const redirectPath = "/category/single-category";
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    router.push(`${redirectPath}?category=${categoryName}`);
    setShowMenu(false);
  };

  {
    /*===========================
     sub category
     ==========================*/
  }
  const createSubcategoryNode = (subcategories: ISubcategory[] | undefined) => (
    <div className="h-full w-full overflow-auto flex flex-col">
      <Button
        onClick={() => setContent(categoriesNode)}
        className="m-2 py-2 px-3 rounded-lg w-fit bg-gradient-primary-light hover:bg-gradient-primary hover:text-white"
      >
        <IconArrowNarrowLeft />
      </Button>
      <ul className="flex flex-col">
        {subcategories &&
          subcategories?.map((subcategory) => (
            <li
              key={subcategory?.subcategoryId}
              className="hover:bg-gradient-primary hover:text-white flex items-center justify-between group/category"
            >
              <span
                onClick={() =>
                  handleCategoryClick(subcategory?.subcategoryName)
                }
                className="py-3 px-2 flex w-full"
              >
                {subcategory?.subcategoryName}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );

  {
    /*    ===========================
    category  
    ===========================     */
  }
  const categoriesNode = (
    <div className="h-full w-full overflow-auto flex flex-col">
      <Button
        onClick={() => setContent(menusNode)}
        className="m-2 py-2 px-3 rounded-lg w-fit bg-gradient-primary-light hover:bg-gradient-primary hover:text-white"
      >
        <IconArrowNarrowLeft />
      </Button>
      <ul className="flex flex-col">
        {categories?.map((category) => (
          <li
            key={category?.categoryName}
            className="hover:bg-gradient-primary hover:text-white flex items-center justify-between group/category"
          >
            <span
              className={`py-3 px-2 flex ${
                category?.subcategories?.length ? "basis-10/12" : "basis-full"
              }`}
              onClick={() => handleCategoryClick(category?.categoryName)}
            >
              {category?.categoryName}
            </span>
            {category?.subcategories?.length && (
              <button
                className="basis-2/12 h-full group-hover/category:bg-gradient-primary"
                onClick={() => {
                  setContent(createSubcategoryNode(category?.subcategories));
                }}
              >
                <IconChevronRight />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  {
    /*========================
   Menu
   ======================== */
  }
  const menusNode = (
    <div className="h-full w-full overflow-auto flex flex-col">
      <div className="p-2">
        <Logo />
      </div>
      <button
        className="flex items-center gap-2 py-3 px-5 bg-gradient-primary w-full text-white"
        onClick={() => setContent(categoriesNode)}
      >
        <IconMenu2 color="white" />
        All Categories
      </button>
      {mainMenus.map((menu, i: number) => (
        <MainMenuItem
          parentClassName="list-none"
          className="!py-3 !px-5 !hover:font-bold list-none"
          key={i}
          menu={menu}
          onClick={() => setShowMenu(false)}
        />
        // <Link
        //   href={menu.href}
        //   key={menu.label}
        //   className="py-3 px-5 hover:text-gradient-primary hover:font-bold"
        //   onClick={() => setShowMenu(false)}
        // >
        //   {menu?.label}
        // </Link>
      ))}
      {topMenus.map((menu, i: number) => (
        <Link
          href={menu.href}
          key={i}
          className="py-3 px-5 hover:text-gradient-primary hover:font-bold"
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
            onClick={() => setShowMenu(false)}
          >
            <socialMedia.icon size={20} stroke={1} />
          </Link>
        ))}
      </div>
    </div>
  );

  // =====================
  // // burger and modal
  // =====================
  return (
    <div>
      <button
        onClick={() => {
          setShowMenu(true);
          setContent(menusNode);
        }}
      >
        <IconMenu2 />
      </button>

      {/* menu */}
      {showMenu && (
        <Modal
          alignment="left"
          className="w-60"
          setShow={setShowMenu}
          show={showMenu}
          isOnlySmallDevice={true}
        >
          {content}
        </Modal>
      )}
    </div>
  );
};

export default HamburgurNav;
