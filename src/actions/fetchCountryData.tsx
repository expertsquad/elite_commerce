import { country_data_access_Token, country_data_url } from "@/constants";

export const fetchCountryData = async ({
  route,
  query = "",
}: {
  route: string;
  query?: string;
}) => {
  try {
    const accessToken = country_data_access_Token;
    if (!accessToken) {
      throw new Error("Country data access token not found!");
    }

    // Correctly set up the headers
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "API_KEY");

    const res = await fetch(`${country_data_url}${route}/${query}`, {
      method: "GET",
      headers,
      next: {
        tags: [route],
      },
    });

    // Check if the response is successful (status in the range 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw error;
  }
};
