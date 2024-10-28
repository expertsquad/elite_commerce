import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { server_url } from "@/constants";
import { fetchData } from "@/actions/fetchData";
import { favicon } from "@/assets";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Open_Sans({ subsets: ["latin"] });

// Dynamic metadata
async function fetchMetadata(): Promise<Metadata> {
  try {
    const response = await fetchData({
      route: "/settings/home-page-meta",
    });
    const data = response?.data;
    return {
      title: data?.metaTitle || "Home",
      description: data?.metaDescription || "Home",
      icons: {
        icon: `${server_url + data?.metaPhoto}` || `${favicon}`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    // Fallback metadata
    return {
      title: "Home",
      description: "Home",
      icons: {
        icon: `${favicon}`,
      },
    };
  }
}
export async function generateMetadata(): Promise<Metadata> {
  return await fetchMetadata();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetchData({
    route: "/settings/google-tag-manager",
  });

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
                style={{ stopColor: "#294393", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#04a4e6", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
        {/* children */}
        <NextTopLoader height={4} showSpinner={false} speed={800} />
        {children}
      </body>
      <GoogleAnalytics gaId={gtmId} />
    </html>
  );
}
