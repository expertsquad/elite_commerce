import Link from "next/link";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { revalidateTagAction } from "@/actions/revalidateTag";
import PersonalInformation from "./_components/UI/PersonalInformation";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Personal Information | My Profile | ${shopInfo?.data?.shopName}`,
      description: `Manage your personal information, update contact details, and keep your account secure at ${shopInfo?.data?.shopName}. Ensure your profile is up-to-date for a seamless shopping experience.`,
    };
  } catch (error) {
    return {
      title: "Account Details | My Profile",
      description:
        "Manage your personal information, update contact details, and keep your account secure. Ensure your profile is up-to-date for a seamless shopping experience.",
    };
  }
}

const AccountDetails = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const handleUserAction = async (formData: FormData) => {
    "use server";
    const profilePhoto = formData.get("profilePhoto") as File | null;
    if (profilePhoto && profilePhoto.size === 0) {
      formData.delete("profilePhoto");
    }
    try {
      const res = await updateDataMutation({
        route: "/user/update",
        data: formData,
        method: "PUT",
        dataType: "formData",
      });
      revalidateTagAction("/user/me");
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-6 items-center border-b border-black-10 justify-start">
        <Link
          className=" text-gradient-primary font-semibold text-base border-b !border-primary-light pb-2 "
          href="/profile/account-details"
        >
          Personal Information
        </Link>

        <div className="text-base pb-2">
          <Link className=" " href="/profile/account-details/change-password">
            Change Password
          </Link>
        </div>
      </div>

      <PersonalInformation getMe={getMe} handleUserAction={handleUserAction} />
    </div>
  );
};

export default AccountDetails;
