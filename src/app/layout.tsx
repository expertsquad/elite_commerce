import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Commerce",
  description:
    "Elite Commerce is a e-commerce website developed by Team ExpertSquad.net",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
    </html>
  );
}
