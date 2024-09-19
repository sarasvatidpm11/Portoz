import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientNavbar from "@/components/navbar/ClientNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PortoZ",
  description: "Portfolio Generator Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased`}
      >
        <ClientNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
