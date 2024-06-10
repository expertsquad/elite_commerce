import style from "./InfiniteSlider.module.css";
import { fetchData } from "@/actions/fetchData";
import { IBrand } from "@/interfaces/brand.interface";
import Image from "next/image";
import { server_url } from "@/constants";

const InfiniteSlider = async () => {
  const brands: { data: IBrand[] } = await fetchData({
    route: "/brand",
    revalidate: 86400,
  });

  return (
    <div className={style.container}>
      <div className={style.slider} id="infinite-slider">
        {brands?.data?.map((brand) => (
          <div
            key={brand?._id}
            className="h-28 w-28 relative border border-black-10 rounded-full overflow-hidden"
          >
            <Image
              src={server_url + brand.brandPhoto}
              fill
              alt="brand photo"
              className="z-0"
            />
          </div>
        ))}
        {brands?.data?.map((brand) => (
          <div
            key={brand?._id}
            className="h-28 w-28 relative border border-black-10 rounded-full overflow-hidden"
          >
            <Image
              src={server_url + brand.brandPhoto}
              fill
              alt="brand photo"
              className="z-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
