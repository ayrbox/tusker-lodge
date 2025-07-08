import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tinos = Tinos({
  variable: "--font-tions-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tusker Lodge",
  description: "Pet friendly bed and breakfast (B&B) in Torquay, Devon, UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tinos.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
