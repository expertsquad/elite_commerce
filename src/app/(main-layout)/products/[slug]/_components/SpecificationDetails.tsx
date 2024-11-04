import React from "react";

const SpecificationDetails = ({ specificationDetails }: any) => {
  return (
    <div className="w-full">
      <div className="rounded-lg w-full">
        {specificationDetails?.map((data: any, index: number) => (
          <div key={index} className="w-full">
            <div className="bg-image-background w-full py-2 pl-4 mt-1">
              <span className="font-semibold [font-size:_clamp(16px,4vw,20px)] text-gradient-primary">
                {data.sectionName}
              </span>
            </div>
            <div className="">
              {data?.blocks?.map((block: any, index: number) => (
                <div
                  key={index}
                  className="flex justify-between w-full items-center even:bg-[#f8f8f8]"
                >
                  <p className="py-3.5 pl-4 [font-size:_clamp(13px,5vw,15px)] w-36 md:w-60 h-auto flex items-center justify-start">
                    {block?.title}
                  </p>
                  <p className="w-full [font-size:_clamp(13px,5vw,15px)] text-wrap pl-5 py-3.5">
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
