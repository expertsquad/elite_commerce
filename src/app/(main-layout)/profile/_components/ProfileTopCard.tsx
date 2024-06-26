import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import totalOrderIcon from "@/assets/Images/totalOrderIcon.svg";
import starIcon from "@/assets/Images/starIcon.svg";
import Image from "next/image";
import { fetchProtectedData } from "@/actions/fetchData";

const ProfileTopCard = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderItems = await fetchProtectedData({
    route: "/online-order",
    query: "buyer.userId=" + getMe?.data?._id,
  });

  return (
    <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 w-full ">
      {/* account details */}
      <div className="flex items-center justify-center flex-col gap-4 bg-gradient-primary-light rounded-lg p-7 w-full">
        <GenerateGradientIcon size={36} IconComponent={IconUser} />
        <h3 className="text-lg whitespace-nowrap">Account Details</h3>
        <Link
          className="underline text-lg text-black-50"
          href="/profile/account-details"
        >
          View
        </Link>
      </div>
      {/* total order */}
      <div className="flex items-center justify-center flex-col gap-4 bg-gradient-positive rounded-lg p-7 w-full">
        <Image src={totalOrderIcon} alt="total order" width={40} height={40} />
        <h3 className="text-lg whitespace-nowrap">Total Order</h3>
        <p className="text-lg font-bold">{orderItems?.meta?.total}</p>
      </div>
      {/* Pending Review */}
      <div className="flex items-center justify-center flex-col gap-4 bg-gradient-secondary-light rounded-lg p-7 w-full">
        <Image src={starIcon} alt="total order" width={40} height={40} />
        <h3 className="text-lg whitespace-nowrap">Pending Review</h3>
        {/* i will add here pending review count */}
        <p className="text-lg font-bold">12</p>
      </div>
    </section>
  );
};

export default ProfileTopCard;
