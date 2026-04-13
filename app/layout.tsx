import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dannz Cloud | Trusted Private Server Infrastructure",
  description:
    "Dannz Cloud delivers trusted private server infrastructure with premium performance, operational clarity, and enterprise-grade reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
