"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import CustomInput from "@/Components/CustomInput";
import CustomLoader from "@/Components/CustomLoader";
import ProfileUploader from "@/Components/ProfileUploader";
import SubmitButton from "@/Components/SubmitButton";
import { IconPhotoPlus } from "@tabler/icons-react";
import { useState } from "react";
import toast from "react-hot-toast";

const PersonalInformation = ({ getMe }: { getMe: any }) => {
  const [loading, setLoading] = useState(false);
  // handleSubmit
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target as HTMLFormElement);
    const profilePhoto = (formData.get("profilePhoto") as File) || null;
    if (profilePhoto && profilePhoto.size === 0) {
      formData.delete("profilePhoto");
    }
    setLoading(true);

    // mutation
    const res = await updateDataMutation({
      route: "/user/update",
      data: formData,
      method: "PUT",
      dataType: "formData",
    });

    if (res.success) {
      toast.success(res.message);
      revalidateTagAction("/user/me");
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="relative ">
        {loading && <CustomLoader />}

        <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
          Personal Information
        </h3>

        <form
          className={`flex flex-col overflow-x-hidden`}
          onSubmit={handleSubmit}
        >
          <div className="flex items-center lg:justify-start justify-center flex-col-reverse lg:flex-row gap-7">
            <div className="w-full  flex flex-col gap-5">
              <CustomInput
                label="Full Name"
                name="fullName"
                placeholder="Enter your full name"
                defaultValue={getMe?.data?.fullName}
                required
              />
              <div className="flex flex-col gap-2.5 w-full">
                <small className="text-black-50 text-base">
                  Email (Cannot change)
                </small>
                <p className="w-full border border-black-10 rounded-lg py-2 pl-4 text-black-30">
                  {getMe?.data?.email}
                </p>
              </div>

              <CustomInput
                label="Phone Number"
                name="phoneNumber"
                placeholder="+88"
                defaultValue={getMe?.data?.phoneNumber}
                required
              />
            </div>

            <div className="">
              <ProfileUploader
                name="profilePhoto"
                imageController="h-60 w-60  md:mt-10 mt-0 rounded-lg overflow-hidden"
                url={getMe?.data?.profilePhoto}
                overlay={true}
              >
                <div className="flex items-center justify-center flex-col gap-2 border border-black-10 text-black-30 h-60 w-60 md:mt-10 mt-0 rounded-lg overflow-hidden">
                  <IconPhotoPlus stroke={0.5} size={78} />
                  <p className="text-center">
                    Drop Your Image or{" "}
                    <span className="text-gradient-primary">
                      Click to browse
                    </span>
                  </p>
                </div>
              </ProfileUploader>
            </div>
          </div>
          <div className="flex justify-end items-center mt-10">
            <SubmitButton className="bg-gradient-primary hover:bg-gradient-primary-reverse text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
              Update Account Details
            </SubmitButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInformation;
