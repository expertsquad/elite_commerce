import { searchIcon } from "@/assets";
import { Button } from "../Components/Buttons";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Home page",
  keywords: "Home, page",
  image: "https://www.example.com/image.png",
  url: "https://www.example.com",
};

export default function Home() {
  return (
    <main>
      <Button className="border p-2 bg-gradient-primary text-white">
        Submit <Image src={searchIcon} alt="Icon" />
      </Button>
    </main>
  );
}
