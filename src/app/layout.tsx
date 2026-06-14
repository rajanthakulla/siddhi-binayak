import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Siddhi Binayak Overseas Pvt. Ltd. Nepal | Government & Defense Supply Solutions",
  description: "Siddhi Binayak Overseas Pvt. Ltd. Nepal is a Kathmandu-based general trading company specializing in supplying government entities, defense/military organizations, institutional buyers, and B2B clients across Nepal.",
  openGraph: {
    title: "Siddhi Binayak Overseas Pvt. Ltd. Nepal",
    description: "Certified. Compliant. Delivered On Time.",
    images: [{ url: "/og-image.jpg" }]
  }
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-text-secondary bg-white">
        {/* Global Background Grid Lines */}
        <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
          <div className="w-full max-w-[1200px] h-full grid grid-cols-3 divide-x divide-black/10">
            <div className="h-full" />
            <div className="h-full" />
            <div className="h-full" />
          </div>
        </div>

        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
