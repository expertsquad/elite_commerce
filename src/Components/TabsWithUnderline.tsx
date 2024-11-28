import Link from "next/link";

interface Tab {
  _id: number | string;
  name: string;
  index: number;
  hashtag: string;
}

interface TabsWithUnderlineProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabsWithUnderline = ({
  tabs,
  activeTab,
  setActiveTab,
}: TabsWithUnderlineProps) => {
  return (
    <ul className="flex border-b border-black-10 space-x-3 transition-all duration-300 mb-10">
      <li>
        <a
          href="#specification"
          className="inline-block py-4 px-6 text-gray-500 hover:text-gray-800 font-medium border-b-2 border-transparent tab-active:border-b-indigo-600 tab-active:text-indigo-600 active tablink whitespace-nowrap"
          data-tab="tabs-with-underline-1"
          role="tab"
        >
          Specifications
        </a>
      </li>
      <li>
        <a
          href="#description"
          className="inline-block py-4 px-6 text-black hover:text-gradient-primary font-medium border-b border-[#4b4a4a] border-transparent tab-active:border-b-gradient-primary tab-active:text-gradient-primary tablink whitespace-nowrap"
          data-tab="tabs-with-underline-3"
          role="tab"
        >
          Descriptions
        </a>
      </li>
      <li>
        <a
          href="#customerreview"
          className="inline-block py-4 px-6 text-black hover:text-gradient-primary font-medium border-b border-[#4b4a4a] border-transparent tab-active:border-b-gradient-primary tab-active:text-gradient-primary tablink whitespace-nowrap"
          data-tab="tabs-with-underline-3"
          role="tab"
        >
          Customer Reviews
        </a>
      </li>
    </ul>
  );
};

export default TabsWithUnderline;
