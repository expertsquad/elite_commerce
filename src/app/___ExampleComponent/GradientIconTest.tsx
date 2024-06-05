import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IconTrash, IconX } from "@tabler/icons-react";
import React from "react";

const GradientIconTest = () => {
  return (
    <div>
      <GenerateGradientIcon IconComponent={IconX} stroke={5} />
      <GenerateGradientIcon IconComponent={IconTrash} stroke={5} />
    </div>
  );
};

export default GradientIconTest;
