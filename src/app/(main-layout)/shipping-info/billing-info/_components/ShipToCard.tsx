import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";

const ShipToCard = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  console.log(getMe);
  //   const defaultAddress = await fetchProtectedData({
  //     route: "/user-address/me",
  //     query: "isDefault=true",
  //   });

  return (
    <div>
      {/* Phone number and email */}
      <div>
        <small>
          Phone: <p></p>
        </small>
      </div>
    </div>
  );
};

export default ShipToCard;
