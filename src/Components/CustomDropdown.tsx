"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  IconAdjustmentsHorizontal,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";

interface CustomDropdownProps {
  data: string[];
  defaultValue?: string;
  label?: string;
  className?: string;
  onClick: (value: string) => void;
  itemClassName?: string;
  leftIcon?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  emptyMsg?: string;
  emptyMsgClassName?: string;
  searchInput?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  defaultValue,
  label,
  onClick,
  className,
  itemClassName,
  leftIcon,
  setShowModal,
  emptyMsg,
  emptyMsgClassName,
  searchInput,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        if (setShowModal) {
          setShowModal(false);
        }
      }
    };

    if (isOpen && searchInput && searchInputRef.current) {
      // Focus the search input when the dropdown is opened
      searchInputRef.current.focus();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, searchInput, setShowModal]);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onClick(value);
    if (setShowModal) {
      setShowModal(true);
    }
  };

  const filteredData = searchTerm
    ? data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {label && <label className="text-black-50 text-base">{label}</label>}
      <div className="relative" ref={dropdownRef}>
        {data?.length ? (
          <div
            className={`cursor-pointer ${className}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Icon and default text */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-start justify-start gap-2">
                {/* Left icon if needed */}
                {leftIcon && (
                  <div className="flex items-center text-black-50">
                    <IconAdjustmentsHorizontal stroke={2} />
                  </div>
                )}

                {/* Show search input if no defaultValue or selectedValue */}
                {searchInput && isOpen ? (
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-2 outline-none rounded-md"
                    ref={searchInputRef} // Add reference for focusing
                    onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing
                  />
                ) : (
                  <div>{selectedValue || defaultValue}</div>
                )}

                {/* Selected or default value */}
              </div>

              {/* Right Icon */}
              <div className="flex items-center text-black-50">
                {isOpen ? <IconChevronUp /> : <IconChevronDown />}
              </div>
            </div>
          </div>
        ) : (
          <small className={`text-center ${emptyMsgClassName}`}>
            {emptyMsg}
          </small>
        )}
        {isOpen && (
          <ul className="absolute left-0 mt-1 w-full bg-white border border-black-10 rounded-md shadow-lg z-20 transition-all duration-300 ease-in-out md:max-h-[300px] max-h-[200px] overflow-y-auto">
            {filteredData.length ? (
              filteredData.map((item) => (
                <li
                  key={item}
                  className={`px-4 py-2 cursor-pointer ${itemClassName}`}
                  onClick={() => handleOptionClick(item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <p className={`px-4 py-2 cursor-pointer ${itemClassName}`}>
                No matching results
              </p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
