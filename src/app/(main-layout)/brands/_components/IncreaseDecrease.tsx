"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";

const IncreaseDecrease = () => {
  return (
    <div className="bg-gradient-primary-light rounded-full px-1 py-[3px] flex items-center gap-2">
      <button className="bg-gradient-primary rounded-full p-1">
        <IconMinus className="text-white" stroke={1.5} width={13} height={13} />
      </button>
      <strong className="text-[10px] font-normal">3</strong>
      <button className="bg-gradient-primary rounded-full p-1">
        <IconPlus className="text-white" stroke={1.5} width={13} height={13} />
      </button>
    </div>
  );
};

export default IncreaseDecrease;
