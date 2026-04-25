import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Free Online Tools Collection | Fast, Simple & Useful Tools",
  description: "Discover free online tools like QR generator, password generator, image tools, and more.",
  verification: {
    google: "iceQSHo0SiS8MeyvrnZ2x8bUwc50XO17F241II07hO0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white"> <Navbar />{children} <Footer /><Analytics /><SpeedInsights /></div></body>
    </html>
  );
}
