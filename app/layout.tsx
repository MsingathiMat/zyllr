import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavBar from "@/components/NavBar";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" flex flex-col h-[calc(100vh-150px)] xl:px-[160px] lg:px-[120px] sm:px-[80px] px-[30px]">
   <NavBar/>
          <div className=" flex-1 ">{children}</div>
        
        </div>
        <div className="bg-MttPrimary h-[150px]">footer</div>
      </body>
    </html>
  );
}
