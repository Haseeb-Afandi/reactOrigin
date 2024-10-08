import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "@fontsource/satisfy/400-italic.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H3S - Software Development Firm",
  description: "Webapp and Cross-Platform Mobile App development firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
