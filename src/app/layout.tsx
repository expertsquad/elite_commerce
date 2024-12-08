import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { server_url } from "@/constants";
import { fetchData } from "@/actions/fetchData";
import { favicon } from "@/assets";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";
import ClientProvider from "@/Components/ClientProvider";

const inter = Open_Sans({ subsets: ["latin"] });

// // Dynamic metadata
// async function fetchMetadata(): Promise<Metadata> {
//   try {
//     const response = await fetchData({
//       route: "/settings/home-page-meta",
//     });

//     const data = response?.data;
//     const shopInfo = await fetchData({
//       route: "/settings/shop",
//     });
//     const shopData = shopInfo?.data;

//     return {
//       title: `${data?.metaTitle} | ${shopData?.shopName}`,
//       description: data?.metaDescription || "Description",
//       icons: {
//         icon: `${server_url + shopData?.favIcon}` || `${favicon}`,
//       },
//     };
//   } catch (error) {
//     // console.error("Error fetching metadata:", error);
//     // Fallback metadata
//     return {
//       title: "Home",
//       description: "Home",
//       icons: {
//         icon: `${favicon}`,
//       },
//     };
//   }
// }
// export async function generateMetadata(): Promise<Metadata> {
//   return await fetchMetadata();
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetchData({
    route: "/settings/google-tag-manager",
  });

  const colorsData = await fetchData({ route: "/settings/shop" });

  const gtmId = data?.data?.googleTagManagerId
    ? data?.data?.googleTagManagerId
    : "";
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* gradient icon layer */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{
                  stopColor: `${colorsData?.data?.primaryColor}`,
                  stopOpacity: 1,
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: `${colorsData?.data?.primaryLightColor}`,
                  stopOpacity: 1,
                }}
              />
            </linearGradient>
          </defs>
        </svg>
        {/* children */}
        <NextTopLoader
          color={`${colorsData?.data?.primaryLightColor}`}
          height={4}
          showSpinner={false}
          speed={800}
        />
        <ClientProvider>{children}</ClientProvider>
        <Toaster position="top-right" />
      </body>
      <GoogleAnalytics gaId={gtmId} />
    </html>
  );
}
