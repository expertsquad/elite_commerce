import { fetchData } from "@/actions/fetchData";
import React from "react";
import DealsOfTheDayCard from "./DealsOfTheDayCard";

const DealsOfTheDaySection = async () => {
  const dealsOfTheDay = await fetchData({
    route: "/promotions/deals-of-the-day",
  });
  const firstDeal = dealsOfTheDay?.data?.firstDeal;
  const secondDeal = dealsOfTheDay?.data?.secondDeal;
  const deals = [firstDeal, secondDeal];

  return (
    <div className="flex items-center md:flex-row flex-col justify-center gap-5 mt-5">
      {deals?.map((deal, index) => {
        return <DealsOfTheDayCard key={index} index={index} deal={deal} />;
      })}
    </div>
  );
};

export default DealsOfTheDaySection;
