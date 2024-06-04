"use server";

import { server_api } from "@/constants";
import { cookies } from "next/headers";

const fetchData = async (route: string, query = "", page = 1, limit = 10) => {
  try {
    const accessToken = cookies().get("accessToken")?.value;

    // if (!accessToken) {
    //   throw Error("Access token not found, please login again!");
    // }

    const res = await fetch(
      `${server_api + route + `?page=${page}&limit=${limit}&${query}`}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        next: {
          tags: [route],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
