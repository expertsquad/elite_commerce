"use server";

import { server_api } from "@/constants";
import { cookies } from "next/headers";

// use this for ssg and isr
export const updateDataMutation = async ({
  route,
  dataType = "json",
  //   set format value true if you don't want format here
  formatted = false,
  data,
  method = "PATCH",
}: {
  route: string;
  dataType?: "json" | "formData";
  formatted?: boolean;
  data: string | FormData;
  method: "PATCH" | "PUT" | "POST";
}) => {
  try {
    // const accessToken = cookies().get("accessToken")?.value;
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIycERoVjdmazhNIiwiX2lkIjoiNjYwOWE4NjY2NTJhZmQ2MDU2Y2RjNWQ4IiwiZnVsbE5hbWUiOiJzZGRmYXNkIHNkZmFzZGZhc2QgYWRzYXNkYyIsInJvbGUiOiJBZG1pbiIsImVtYWlsIjoibmlyaW1vbnBjQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiNjU0NTY0MzUiLCJpc1ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MTgxODU3MzksImV4cCI6MTcxODI3MjEzOX0.S2qmpzv-ZZ7iuB5J2ivcXcXCU7xWM1olF9kekyecIfE";

    if (!accessToken) {
      throw Error("Access token not found, please login again!");
    }

    // handle data based on data type
    let structuredData: BodyInit = data;

    // format based on formatted variable
    if (!formatted) {
      const dataObj: Record<string, any> = {};
      if (data instanceof FormData) {
        // create new object structure from next object structure {key,value} to {key:value}
        for (const [key, value] of Array.from(data.entries())) {
          dataObj[key] = value;
        }
      }
      if (dataType === "json") {
        structuredData = JSON.stringify(dataObj);
      } else {
        // append to the formdata
        structuredData = new FormData();
        Object.entries(dataObj).forEach(([key, value]) => {
          (structuredData as FormData).append(key, value as string | Blob);
        });
      }
    }

    // handle headers
    const headers: HeadersInit = {
      authorization: `Bearer ${accessToken}`,
    };

    if (dataType === "json") {
      headers["Content-Type"] = "application/json";
    }

    // make api request
    const res = await fetch(server_api + route, {
      method,
      headers,
      body: structuredData,
    });

    const result = await res.json();
    return result;
  } catch (error) {
    throw error;
  }
};
