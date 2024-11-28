"use server";

import { server_api } from "@/constants";
import { cookies } from "next/headers";

// use this for ssg and isr
export const fetchData = async ({
  route,
  query = "",
  page = 1,
  limit = 10,
  revalidate = 3600,
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
      throw new Error("Access token not found, please login again!");
    }

    const url = `${
      server_api + route
    }?page=${page}&limit=${limit}&query=${encodeURIComponent(query)}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.headers.get("content-type")?.includes("application/json")) {
      const text = await res.text();
      console.error("Non-JSON response:", text);
      throw new Error("Expected JSON but received non-JSON response.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
