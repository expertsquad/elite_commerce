// utils/getAccessToken.ts
export const getAccessTokenFromCookies = (): string => {
  if (typeof document !== "undefined") {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    return cookies["accessToken"] || "";
  }

  return "";
};
