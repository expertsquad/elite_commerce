"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  router.push("/shipping-info");

  return (
    <section className="main-container h-dvh">
      <div className="flex items-center justify-between gap-8">
        {/* Right section */}
        <div className="my-2 flex flex-col gap-6 w-full">
          <h3 className="h-8 w-60 animate-pulse bg-black-10 rounded-2xl "></h3>
          <div className="flex justify-center items-center lg:flex-row flex-col w-full gap-4 ">
            <p className="h-6 w-6/12 animate-pulse bg-black-10 rounded-2xl"></p>
            <p className="h-6 w-6/12 animate-pulse bg-black-10 rounded-2xl"></p>
          </div>

          <div className="flex justify-start items-start  flex-col w-full gap-4 my-10 md:my-16 ">
            <p className="h-6 w-6/12 animate-pulse bg-black-10 rounded-2xl"></p>
            <p className="h-6 w-6/12 animate-pulse bg-black-10 rounded-2xl"></p>
            <p className="h-6 w-6/12 animate-pulse bg-black-10 rounded-2xl"></p>
            <p className="h-6 w-6/12 animate-pulse bg-black-10 rounded-2xl"></p>
          </div>
        </div>
        {/* Left section */}
        <div className="w-[300px] md:w-[500px]"></div>
      </div>
    </section>
  );
};

export default Page;
