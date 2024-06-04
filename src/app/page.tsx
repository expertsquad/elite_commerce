import ProductCard from "@/Components/ProductCard";
import ModalTest from "./ExampleComponent/ModalTest";

export default function Home() {
  return (
    <main>
      <h1>This is Home page</h1>

      <div className="grid grid-cols-3 gap-4 w-fit mx-auto">
        <ProductCard>hello</ProductCard>
        <ProductCard>hello</ProductCard>
        <ProductCard>hello</ProductCard>
        <ProductCard>hello</ProductCard>
      </div>

      <ModalTest />
    </main>
  );
}
