import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const env = process.env.NODE_ENV;
export const metadata: Metadata = {
  title: "Dark Almanac - The Dark and Darker Build Tool",
  description:
    "A tool designed to plan out builds for each class in the game Dark and Darker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {env != "development" ? (
        <>
          <SpeedInsights />
          <Analytics />
        </>
      ) : null}
    </html>
  );
}
