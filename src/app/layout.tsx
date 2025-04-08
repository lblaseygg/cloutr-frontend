import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloutr - AI-Driven Influencer Marketing Platform",
  description: "Connect with the perfect influencers for your brand using advanced AI matchmaking and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} h-full`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
