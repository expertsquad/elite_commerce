import { fetchData } from "@/actions/fetchData";
import BottomSmallBanner from "./BottomSmallBanner";
import HeroItemSlide from "./HeroItemSlide";
import TopSmallBanner from "./TopSmallBanner";

const Hero = async () => {
  const data = await fetchData({ route: "/promotions/slider" });

  const sliderArray = Object.values(data?.data?.slider || {});
  console.log(sliderArray);

  return (
    <section className="flex flex-col lg:flex-row gap-5 w-full">
      {/* === Left side slider with three nested section === */}
      <div className="h-[280px] md:h-[450px] w-full lg:w-[65%]">
        <HeroItemSlide sliderArray={sliderArray} />
      </div>

      {/* === right top and right bottom === */}
      <div className="flex flex-col md:flex-row lg:flex-col gap-5 w-full lg:w-[35%]">
        <div className="h-[215px] w-full">
          <TopSmallBanner topOffer={data?.data?.topOffer} />
        </div>
        <div className="h-[215px] w-full">
          <BottomSmallBanner bottomOffer={data?.data?.bottomOffer} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
