import { server_url } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const ImageZoomComponent = ({ selectedImage }: { selectedImage: any }) => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-center justify-center rounded-lg w-full border border-black-10 bg-gradient-primary-light">
      {selectedImage && (
        <div
          className="relative shrink-0 flex-1 h-[400px] md:h-[515px] overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "zoom-in" }}
        >
          <Image
            src={`${server_url + selectedImage}`}
            alt="Product Photo"
            className="object-contain rounded-lg py-10 px-5 md:px-0"
            style={{
              width: "100%",
              height: "100%",
              transition: "transform 0.2s ease-in-out",
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transform: isHovered ? "scale(2)" : "scale(1)",
            }}
            fill
          />
        </div>
      )}
    </div>
  );
};

export default ImageZoomComponent;
