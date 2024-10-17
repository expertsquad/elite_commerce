import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import totalOrderIcon from "@/assets/Images/totalOrderIcon.svg";
import starIcon from "@/assets/Images/starIcon.svg";
import Image from "next/image";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";

const ProfileTopCard = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderItems = await fetchProtectedData({
    route: "/online-order",
    query: "buyer.userId=" + getMe?.data?._id,
  });

  const reviewPending = await fetchData({
    route: "/review",
    query: `buyer.userId=${getMe?.data?._id}&reviewStatus=Pending`,
  });
  return (
    <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 w-full ">
      {/* account details */}
      <div className="flex items-center justify-center flex-col bg-gradient-primary-light rounded-lg p-6 w-full">
        <GenerateGradientIcon size={36} IconComponent={IconUser} />
        <h3 className="text-lg whitespace-nowrap mt-5">Account Details</h3>
        <Link
          className="underline text-lg text-black-50 hover:text-primary-light"
          href="/profile/account-details"
        >
          View
        </Link>
      </div>
      {/* total order */}
      <div className="flex items-center justify-center flex-col bg-gradient-positive rounded-lg p-6 w-full">
        <Image src={totalOrderIcon} alt="total order" width={40} height={40} />
        <h3 className="text-lg whitespace-nowrap mt-5">Total Order</h3>
        <p className="text-lg font-bold">{orderItems?.meta?.total}</p>
      </div>
      {/* Pending Review */}
      <Link href="/profile/review">
        <div
          className="flex items-center justify-center flex-col
       bg-gradient-secondary-light rounded-lg p-6 w-full"
        >
          <Image src={starIcon} alt="total order" width={40} height={40} />
          <h3 className="text-lg whitespace-nowrap mt-5">Pending Review</h3>
          {/* i will add here pending review count later */}
          <p className="text-lg font-bold">{reviewPending?.meta?.total}</p>
        </div>
      </Link>
    </section>
  );
};

export default ProfileTopCard;
