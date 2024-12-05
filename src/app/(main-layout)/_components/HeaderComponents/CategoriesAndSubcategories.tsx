import { ICategory } from "@/interfaces/category.interface";
import MegaMenuItem from "./MegaMenuItem";
import { fetchData } from "@/actions/fetchData";
import { getWidget } from "@/utils/getWidget";

const CategoriesAndSubcategories = async () => {
  const categories = await fetchData({
    route: "/category",
    limit: 12,
  });
  const widget = await getWidget();
  const featureProduct = await fetchData({
    route: "/product",
    query: "sortBy=totalSoldQuantity",
    limit: 4,
  });
  const currencySymbol = await fetchData({
    route: "/settings/shop",
  });

  return (
    <div className="absolute  bg-white opacity-0 h-0 invisible transition-all duration-300 group-hover/categorybtn:visible group-hover/categorybtn:opacity-100 group-hover/categorybtn:h-[clamp(100px,70vh,500px)] backdrop-blur-xl shadow-2xl py-2 gap-10 rounded-md">
      <ul className="w-[240px] h-full overflow-auto ">
        {categories?.data?.map((category: ICategory) => (
          <MegaMenuItem
            key={category?._id}
            widget={widget}
            category={category}
            featureProduct={featureProduct?.data}
            currencySymbol={currencySymbol?.data?.currencySymbol}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesAndSubcategories;
