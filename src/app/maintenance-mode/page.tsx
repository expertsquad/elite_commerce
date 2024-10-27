import React from "react";
import MiantenanceModePageContent from "./_components/MiantenanceModePageContent";
import { fetchData } from "@/actions/fetchData";

const page = async () => {
  const logo = await fetchData({
    route: "/settings/shop",
  });

  const socialMedia = await fetchData({
    route: "/settings/footer",
  });

  const maintenanceData = await fetchData({
    route: "/settings/maintenance",
  });

  return (
    <MiantenanceModePageContent
      logo={logo?.data?.shopLogo}
      socialMedia={socialMedia?.data?.socialMedias}
      maintainance={maintenanceData?.data}
    />
  );
};
export default page;
