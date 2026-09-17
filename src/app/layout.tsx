import type { Metadata } from "next";
import { Syne, DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./home.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Smart IoT Solutions | Automation Experts",
  description: "Delivering smarter, safer and more connected spaces through innovative IoT and automation solutions.",
  keywords: ["Smart Home", "IoT", "Automation", "Gate Automation", "Boom Barriers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${geist.className} ${syne.variable} ${dmSans.variable} ${geist.variable} ${geistMono.variable} bg-white font-body`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
