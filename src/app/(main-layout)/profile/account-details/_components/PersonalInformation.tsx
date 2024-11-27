import { Button } from "@/Components/Buttons";
import CustomInput from "@/Components/CustomInput";
import ProfileUploader from "@/Components/ProfileUploader";
import { IconPhotoPlus } from "@tabler/icons-react";

const PersonalInformation = ({
  getMe,
  handleUserAction,
}: {
  getMe: any;
  handleUserAction: any;
}) => {
  return (
    <div className="relative ">
      {/* {loading && <CustomLoader />} */}

      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Personal Information
      </h3>

      <form
        className={`flex flex-col overflow-x-hidden`}
        action={handleUserAction}
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
                  <span className="text-gradient-primary">Click to browse</span>
                </p>
              </div>
            </ProfileUploader>
          </div>
        </div>
        <div className="flex justify-end items-center mt-10">
          <button
            type="submit"
            className="bg-gradient-primary rounded-full px-5 py-3.5"
          >
            Update Account Details
          </button>
        </div>
      </form>
    </div>
  );
};
export default PersonalInformation;
