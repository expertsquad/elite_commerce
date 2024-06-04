"use server";

import { server_api } from "@/constants";
import { cookies } from "next/headers";

// use this for ssg and isr
export const fetchData = async ({
  route,
  query = "",
  page = 1,
  limit = 10,
  revalidate,
}: {
  route: string;
  query?: string;
  page?: number;
  limit?: number;
  revalidate?: number;
}) => {
  try {
    const next: NextFetchRequestConfig | undefined = {
      tags: [route],
    };
    if (revalidate) {
      next.revalidate = revalidate;
    }

    const res = await fetch(
      `${server_api + route + `?page=${page}&limit=${limit}&${query}`}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next,
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// it is always dynamic cause it used cookies
export const fetchProtectedData = async ({
  route,
  query = "",
  page = 1,
  limit = 10,
}: {
  route: string;
  query?: string;
  page?: number;
  limit?: number;
}) => {
  try {
    const accessToken = cookies().get("accessToken")?.value;

    if (!accessToken) {
      throw Error("Access token not found, please login again!");
    }

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
