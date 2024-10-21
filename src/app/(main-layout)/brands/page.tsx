import WidgetCard from "@/Components/WidgetCard";
import SmallProductCard from "./_components/SmallProductCard";
import BrandCard from "@/Components/BrandCard";
import { fetchData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import TopSellingBrandProducts from "./_components/TopSellingBrandProducts";
import { getWidget } from "@/utils/getWidget";
import { getCurrency } from "@/utils/getCurrency";

const Brand = async ({ params }: { params: { page: number } }) => {
  const currentPage = 1 || Number(params.page);
  const brandData = await fetchData({
    route: "/brand",
    page: params.page,
    limit: 20,
  });
  const topSellProducts = await fetchData({
    route: "/product",
    query: "sortBy=totalSoldQuantity",
    limit: 5,
  });
  const widgetData = await getWidget();
  const currency = await getCurrency();
  const totalPages = Math.ceil(brandData?.meta?.total / brandData?.meta?.limit);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:px-5 ">
      <div className="md:col-span-3">
        <div className="flex flex-col gap-5 md:gap-7 md:col-span-3 ">
          <div className="flex items-center justify-between">
            <span className="md:font-semibold md:text-xl text-base">
              {brandData?.meta?.total} Brands Found Here
            </span>
          </div>
          <div className="grid grid-cols-brand-card-grid gap-5">
            {brandData?.data?.map(
              (brand: {
                _id: string;
                brandName: string;
                brandPhoto: string;
                productCount: number;
              }) => {
                return <BrandCard brand={brand} key={brand?._id} />;
              }
            )}
          </div>
          <div className="my-10">
            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={Number(currentPage)}
                redirectTo="/brands/page"
              />
            )}
          </div>
          <div className="md:hidden flex items-center justify-center">
            <WidgetCard widget={widgetData} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="hidden lg:flex flex-col gap-7 ">
          {/* To Selling Brands Product */}
          <TopSellingBrandProducts
            currency={currency}
            topSellingBrandProducts={topSellProducts?.data}
          />
          <hr className="border-black-10 hidden md:block" />

          {/* Widget Promotion card */}

          <div className="">
            <WidgetCard widget={widgetData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
