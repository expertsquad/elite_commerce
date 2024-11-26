import { IconPhotoEdit } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const AddProfilePhoto = ({ profilePhotoUrl }: { profilePhotoUrl: string }) => {
  return (
    <Fragment>
      <div
        className={`h-28 w-28 text-center border border-primary rounded-full`}
      >
        <Image
          alt="Profile Photo"
          height={120}
          src={profilePhotoUrl}
          className="h-full w-full rounded-full object-cover"
          width={120}
        />
      </div>
      <div>
        <Link
          href="/profile/account-details"
          className="bg-white hover:bg-gradient-primary-light h-7 w-7 flex items-center justify-center rounded-full absolute bottom-0 right-0 cursor-pointer"
        >
          <IconPhotoEdit stroke={1} size={20} />
        </Link>
      </div>
    </Fragment>
  );
};

export default AddProfilePhoto;
