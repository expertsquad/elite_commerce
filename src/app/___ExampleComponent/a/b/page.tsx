import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p>B Page</p>
      <Link href="/a">Go to A</Link>
    </div>
  );
};

export default page;
