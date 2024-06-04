import CardGridTest from "./___ExampleComponent/CardGridTest";
import ModalTest from "./___ExampleComponent/ModalTest";
import SSGTest from "./___ExampleComponent/SSGTest";

// export const revalidate = 20;
export default async function Home() {
  return (
    <main>
      <h1>This is Home page</h1>
      <SSGTest />
      <CardGridTest />
      <ModalTest />
    </main>
  );
}
