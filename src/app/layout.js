import "./globals.css";
import { Manrope } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weights: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "B2G Soft",
  description: "B2GSoft frontend task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 px-4 lg:px-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
