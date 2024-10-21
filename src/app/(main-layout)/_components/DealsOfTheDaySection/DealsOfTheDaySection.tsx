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
    <div className="flex items-center flex-col md:flex-row justify-center  gap-[clamp(20px,2.5vw,40px)] mt-5">
      {deals?.map((deal, index) => {
        return <DealsOfTheDayCard key={index} index={index} deal={deal} />;
      })}
    </div>
  );
};

export default DealsOfTheDaySection;
