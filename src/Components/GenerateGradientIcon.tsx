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

const GenerateGradientIcon: React.FC<GradientIconProps> = ({
  IconComponent,
  className = "",
  ...props
}) => (
  <div className="relative inline-block">
    <IconComponent
      className={`${className}`}
      // this url comes from main layout svg layer
      style={{ stroke: "url(#gradient1)" }}
      {...props}
    />
  </div>
);

export default GenerateGradientIcon;
