import { specificationsMenu } from "@/constants/specifications.menu.contstant";
import Link from "next/link";

const SpecificationsMenu = () => {
  return (
    <div className="overflow-x-auto flex scrollbar-x-remove border-b-2 border-black-10 mb-12">
      {specificationsMenu.map((item) => (
        <Link
          className={`text-base md:text-lg text-black-80 mr-7 shrink-0 text-nowrap hover:text-gradient-primary active:text-gradient-primary ${
            item?._id === item?.index ? "text-gradient-primary" : ""
          }`}
          key={item._id}
          href={item.hashtag}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SpecificationsMenu;
