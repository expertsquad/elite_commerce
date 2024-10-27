import style from "./InfiniteSlider.module.css";
import { fetchData } from "@/actions/fetchData";
import Image from "next/image";
import { server_url } from "@/constants";
import { ICategory } from "@/interfaces/category.interface";
import Link from "next/link";

const InfiniteSlider = async () => {
  const cateogriesData: { data: ICategory[] } = await fetchData({
    route: "/category",
  });

  const element = cateogriesData?.data?.map((category) => (
    <Link
      href={"/category/" + category?.categoryName}
      key={category?._id}
      className="flex flex-col items-center gap-2"
    >
      <div className="h-16 w-16 md:h-28 md:w-28 relative rounded-full border border-black-10 overflow-hidden">
        <Image
          src={server_url + category?.categoryPhoto}
          fill
          alt="category photo"
          style={{
            objectFit: "contain",
          }}
          className="inset-0 top-0 left-0 object-contain p-2 md:p-5"
        />
      </div>
      <p className="text-black font-semibold">{category?.categoryName}</p>
    </Link>
  ));

  return (
    <div className={style.container}>
      <div className={style.slider}>
        {element}
        {element}
      </div>
    </div>
  );
};

export default InfiniteSlider;
