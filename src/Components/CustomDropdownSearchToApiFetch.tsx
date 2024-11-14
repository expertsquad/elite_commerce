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
  setSearchInputValue?: (value: string) => void; // Changed type to a function
}

const CustomDropdownSearchToApiFetch: React.FC<CustomDropdownProps> = ({
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
  setSearchInputValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredData = searchTerm
    ? data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  // Debounce logic for searchTerm
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (filteredData.length === 0 && setSearchInputValue) {
        setSearchInputValue(searchTerm); // Call only when no match is found
      }
    }, 300); // Adjust debounce delay as needed

    return () => {
      clearTimeout(debounceTimeout); // Cleanup timeout on searchTerm change
    };
  }, [searchTerm, filteredData, setSearchInputValue]);

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
      if (isOpen && filteredData.length > 0) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          setFocusedIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          setFocusedIndex(
            (prevIndex) =>
              (prevIndex - 1 + filteredData.length) % filteredData.length
          );
        } else if (event.key === "Enter" && focusedIndex >= 0) {
          event.preventDefault();
          handleOptionClick(filteredData[focusedIndex]);
        }
      }
    };

    if (isOpen && searchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, searchInput, setShowModal, focusedIndex, filteredData]);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onClick(value);
    if (setShowModal) {
      setShowModal(true);
    }
  };

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {label && <label className="text-black-50 text-base">{label}</label>}
      <div className="relative" ref={dropdownRef}>
        {data?.length ? (
          <div
            className={`cursor-pointer ${className}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center justify-between px-1">
              <div className="flex items-start justify-start gap-2">
                {leftIcon && (
                  <div className="flex items-center text-black-50">
                    <IconAdjustmentsHorizontal stroke={2} />
                  </div>
                )}

                {searchInput && isOpen ? (
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-2 outline-none rounded-md"
                    ref={searchInputRef}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <div>{selectedValue || defaultValue}</div>
                )}
              </div>

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
              filteredData.map((item, index) => (
                <li
                  key={item}
                  className={`px-4 py-2 cursor-pointer ${itemClassName} ${
                    index === focusedIndex ? "bg-black-10" : ""
                  }`}
                  onClick={() => handleOptionClick(item)}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  {item}
                </li>
              ))
            ) : (
              <p className={`px-4 py-2 pointer-events-none ${itemClassName}`}>
                No Data Found
              </p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdownSearchToApiFetch;
