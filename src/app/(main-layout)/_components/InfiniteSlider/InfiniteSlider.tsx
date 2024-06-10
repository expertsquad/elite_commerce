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

  return (
    <div className={style.container}>
      <div className={style.slider} id="infinite-slider">
        {cateogriesData?.data?.map((category) => (
          <div
            key={category?._id}
            className="h-28 w-28 relative border border-black-10 rounded-full overflow-hidden"
          >
            <Image
              src={server_url + category.categoryPhoto}
              fill
              alt="category photo"
              className="z-0"
            />
          </div>
        ))}
        {cateogriesData?.data?.map((category) => (
          <div
            key={category?._id}
            className="h-28 w-28 relative border border-black-10 rounded-full overflow-hidden"
          >
            <Image
              src={server_url + category.categoryPhoto}
              fill
              alt="category photo"
              className="z-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
