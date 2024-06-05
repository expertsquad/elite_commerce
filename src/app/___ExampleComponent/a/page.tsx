import Link from "next/link";
import React from "react";

const APage = () => {
  return (
    <div>
      <p>A page</p>

      <Link href="/a/b">Go to B</Link>
    </div>
  );
};

export default APage;
