import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "./_components";
import { brandLightBg } from "./_utils/colors";
import Script from "next/script";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saturn | A Landing Page Case Study",
  description:
    "and how The Design of Everyday Things plays into it",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
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
    <html lang="en">
      <head>
        <meta property="og:title" content="Saturn | A Landing Page Case Study" />
        <meta
          property="og:description"
          content="and how The Design of Everyday Things plays into it"
        />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
        className={`${raleway.className} min-h-[100vh] ${brandLightBg} flex flex-col items-center`}
      >
        {" "}
        <Nav />
        {children}
      </body>
    </html>
  );
}
