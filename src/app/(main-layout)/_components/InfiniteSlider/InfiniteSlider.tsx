import style from "./InfiniteSlider.module.css";
import { fetchData } from "@/actions/fetchData";
import Image from "next/image";
import { server_url } from "@/constants";
import { ICategory } from "@/interfaces/category.interface";

const InfiniteSlider = async () => {
  const cateogriesData: { data: ICategory[] } = await fetchData({
    route: "/category",
    revalidate: 86400,
  });

  const element = cateogriesData?.data?.map((category) => (
    <div key={category?._id} className="flex flex-col items-center gap-2">
      <div className="h-16 w-16 md:h-28 md:w-28 relative border border-black-10 rounded-full overflow-hidden">
        <Image
          src={server_url + category.categoryPhoto}
          fill
          alt="category photo"
          className="z-0 object-contain"
        />
      </div>
      <p className="text-gradient-primary font-semibold">
        {category?.categoryName}
      </p>
    </div>
  ));

  return (
    <div className={style.container}>
      <div className={style.slider} id="infinite-slider">
        {element}
        {element}
      </div>
    </div>
  );
};

export default InfiniteSlider;
