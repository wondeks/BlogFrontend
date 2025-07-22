// app/layout.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "react-modal-video/css/modal-video.css";
import "../styles/index.css";

import { Providers } from "./providers"; // your existing providers component
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
title: "የእርስዎ ድር ጣቢያ ርእስ",
description: "የእርስዎ ድር ጣቢያ መግለጫ"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        {/* ClerkProvider wraps everything that needs Clerk */}
        <ClerkProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
