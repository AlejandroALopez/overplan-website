import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OverPlan AI",
  description: "Unlock Your Potential with AI-Driven Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-bgPrimary`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
