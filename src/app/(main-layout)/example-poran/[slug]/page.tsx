import React from "react";
import Breadcrumb from "../_components/Breadcrumb";

const ExampleName = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return (
    <div>
      <Breadcrumb title={params.slug} />
    </div>
  );
};

export default ExampleName;
