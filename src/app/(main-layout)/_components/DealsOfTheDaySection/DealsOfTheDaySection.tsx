import { fetchData } from "@/actions/fetchData";
import React from "react";
import DealsOfTheDayCard from "./DealsOfTheDayCard";

const DealsOfTheDaySection = async () => {
  const dealsOfTheDay = await fetchData({
    route: "/promotions/deals-of-the-day",
  });
  const firstDeal = dealsOfTheDay?.data?.firstDeal;
  const secondDeal = dealsOfTheDay?.data?.secondDeal;
  const thirdDeal = dealsOfTheDay?.data?.thirdDeal;
  const deals = [firstDeal, secondDeal, thirdDeal];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(20px,2.5vw,40px)] mt-5">
      {deals.map((deal, index) => {
        if (deal) {
          // Render the actual deal if it's defined
          return <DealsOfTheDayCard key={index} index={index} deal={deal} />;
        } else {
          // Render a placeholder if the deal is undefined
          return (
            <div
              key={index}
              className={` flex items-center justify-center border border-dashed border-black-10 p-5 rounded-lg text-center  ${
                index % 2 === 0
                  ? "bg-image-background"
                  : "bg-gradient-secondary-light"
              }`}
            >
              <span
                className={`${
                  index % 2 === 0
                    ? "text-gradient-primary"
                    : "text-gradient-secondary"
                }`}
              >
                {`The ${
                  index === 0 ? "first" : index === 1 ? "second" : "third"
                } deal will appear here`}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DealsOfTheDaySection;
