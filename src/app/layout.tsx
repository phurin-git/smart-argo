import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import "./styles.module.css";

const livvic = Livvic({ weight: ["100", "700", "200", "300", "400", "500", "600", "900"] , subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "Smart Agro, Original & Natural",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.className} text-white antialiased bg-[#334B35]`}>
        {children}
      </body>
    </html>
  );
}
