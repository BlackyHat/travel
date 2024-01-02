import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description:
    "Uncover beautiful parts of the Carpathians with unforgettable trips",
  metadataBase: new URL("https://carpatians-trips.vercel.app/"),
  openGraph: {
    type: "website",
    title: "CarpTravel",
    locale: "en_US",
    description:
      "Uncover beautiful parts of the Carpathians with unforgettable trips",
    siteName: "CarpTravel",
    url: "https://carpatians-trips.vercel.app/",
    images: [
      {
        url: "/images/og-image.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id="portal" />
        <Toaster />
      </body>
    </html>
  );
}
