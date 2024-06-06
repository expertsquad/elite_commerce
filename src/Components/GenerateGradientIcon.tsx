// components/GradientIcon.tsx
import React from "react";
import { IconProps, Icon } from "@tabler/icons-react";

type GradientIconProps = {
  IconComponent: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<Icon>
  >;
  className?: string;
  [key: string]: any;
};

const GradientIconLayer = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#294393", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#04a4e6", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

const GenerateGradientIcon: React.FC<GradientIconProps> = ({
  IconComponent,
  className = "",
  ...props
}) => (
  <div className="relative inline-block">
    <GradientIconLayer />
    <IconComponent
      className={`${className}`}
      style={{ stroke: "url(#gradient1)" }}
      {...props}
    />
  </div>
);

export default GenerateGradientIcon;
