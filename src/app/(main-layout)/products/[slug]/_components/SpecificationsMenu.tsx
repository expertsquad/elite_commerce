import { specificationsMenu } from "@/constants/specifications.menu.contstant";
import Link from "next/link";

const SpecificationsMenu = () => {
  return (
    <div className="overflow-x-auto scrollbar-x-remove border-b-2 border-black-10 my-6 pb-2 flex items-center gap-x-10">
      {specificationsMenu.map((item) => (
        <Link
          className={`text-base md:text-lg text-black-80 shrink-0 text-nowrap hover:text-primary-light ${
            item?._id === item?.index
              ? "text-gradient-primary"
              : "text-gradient-primary"
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
