import { fetchData } from "@/actions/fetchData";
import { IBrand } from "@/interfaces/brand.interface";
import Refetch from "./Refetch";

const SSGTest = async () => {
  const data = await fetchData({ route: "/brand" });

  return (
    <div>
      {data?.data?.map((brand: IBrand) => (
        <div key={brand._id}>
          <h1>{brand.brandName}</h1>
        </div>
      ))}

      <Refetch />
    </div>
  );
};

export default SSGTest;
