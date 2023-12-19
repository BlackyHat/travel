import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description:
    "Uncover beautiful parts of the Carpathians with unforgettable trips",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/favicon-light.ico",
        href: "/favicon/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/favicon-dark.ico",
        href: "/favicon/favicon-dark.ico",
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
      </body>
    </html>
  );
}
