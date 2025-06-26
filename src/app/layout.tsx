import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import {
  SITE_DESCRIPTION,
  SITE_IMAGE_CLOUDINARY_URL,
  SITE_NAME,
  SITE_URL,
  SITE_NAME_URL,
} from "@/lib/site";

const cabin = Cabin({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/warble_mini_icon.svg", // default favicon
    shortcut: "/warble_mini_icon.svg", // for legacy support
    apple: "/warble_mini_icon.svg", // Apple devices
  },
  keywords: [
    "waitlist",
    "join the waitlist",
    "warble",
    "warblelive",
    "events",
    "event",
    "organizer",
    "ticketing",
    "NFT-ticketing",
    "collaboration",
  ],
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: SITE_IMAGE_CLOUDINARY_URL,
        width: 1200,
        height: 630,
      },
    ],
    siteName: SITE_NAME_URL,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_IMAGE_CLOUDINARY_URL,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
