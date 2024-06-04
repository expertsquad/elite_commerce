import { fetchData } from "@/actions/fetchData";
import CardGridTest from "./___ExampleComponent/CardGridTest";
import ModalTest from "./___ExampleComponent/ModalTest";
import { IBrand } from "@/interfaces/brand.interface";

// export const revalidate = 20;
export default async function Home() {
  const data = await fetchData({ route: "/brand", revalidate: 60 });

  return (
    <main>
      {data?.data?.map((brand: IBrand) => (
        <div key={brand._id}>
          <h1>{brand.brandName}</h1>
        </div>
      ))}
      <h1>This is Home page</h1>
      <CardGridTest />
      <ModalTest />
    </main>
  );
}
