"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import Modal from "@/Components/Modal";
import { ICategory } from "@/interfaces/category.interface";
import { Icon12Hours, IconMenu2 } from "@tabler/icons-react";
import React from "react";

const HamburgurNav = ({ categories }: { categories: ICategory[] }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>
        <IconMenu2 />
      </button>
      {show && (
        <Modal alignment="left" setShow={setShow} show={show}>
          <div className="h-full min-w-56 overflow-auto">
            {categories.map((category) => (
              <h3 key={category?._id}>{category?.categoryName}</h3>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HamburgurNav;
