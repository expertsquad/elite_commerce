import React from "react";

const SpecificationDetails = ({ specificationDetails }: any) => {
  return (
    <div className="w-full">
      <div className="rounded-lg w-full">
        {specificationDetails?.map((data: any) => (
          <div key={data._id} className="w-full">
            <div className="bg-gradient-primary-light">
              <h2 className="text-gradient-primary [font-size:_clamp(16px,4vw,20px)] py-2 pl-4">
                {data.sectionName}
              </h2>
            </div>
            <div className="">
              {data?.blocks?.map((block: any) => (
                <div
                  key={block._id}
                  className="flex justify-between w-full items-center bg-[#F8F8F8]"
                >
                  <p className="py-2 pl-4 [font-size:_clamp(12px,5vw,14px)] w-36 md:w-60 h-10 md:h-16 flex items-center justify-start">
                    {block?.title}
                  </p>{" "}
                  <p className="w-full [font-size:_clamp(13px,5vw,15px)] text-wrap pl-5">
                    {block?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificationDetails;
