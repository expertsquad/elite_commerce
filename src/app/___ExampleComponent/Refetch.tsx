"use client";
import { Button } from "@/Components/Buttons";
import { revalidateTagAction } from "@/actions/revalidateTag";
import React from "react";

const Refetch = () => {
  const handleRefetch = () => {
    revalidateTagAction("/brand");
  };
  return (
    <div>
      <Button
        className="p-2 bg-gradient-primary-light ml-10"
        onClick={handleRefetch}
      >
        Refetch
      </Button>
    </div>
  );
};

export default Refetch;
