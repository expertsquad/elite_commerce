"use server";
import { country_data_access_Token, country_data_url } from "@/constants";

export const fetchCountryData = async ({
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
    const accessToken = country_data_access_Token;
    if (!accessToken) {
      throw Error(
        "Access token not found, please contact with https://expertsquad.net/"
      );
    }

    const res = await fetch(
      `${country_data_url + route + `?page=${page}&limit=${limit}&${query}`}`,
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
