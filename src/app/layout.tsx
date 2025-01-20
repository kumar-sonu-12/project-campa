import type { Metadata } from "next";
import { Geist, Geist_Mono, Merienda } from "next/font/google";
import {} from "next/font/local";
// import {} from ""
import "./globals.css";

import { Toaster } from "react-hot-toast";
// import { NavBar } from "@/components/User/HomePage/Navbar/NavBar";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["900", "700", "500", "500"],
  variable: "--font-Merienda"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Campa Cola Dealership - Start Your Business as an Authorized Dealer",
  description:
    "Become an authorized Campa Cola dealer and take advantage of exclusive dealershi opportunities. Join a trusted beverage network, boost your sales, and grow your business with Campa Cola. Apply now to secure your dealership rights today!",
  keywords:
    "Campa Cola dealership, beverage dealership opportunities, start a Campa Cola business, authorized dealer application, trusted beverage brand, dealership network, business growth with Campa Cola, Campa Cola dealer registration, franchise opportunities, beverage industry dealership,campa cola",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${merienda.variable} antialiased`}
      >
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #ffffff",
              // padding: "16px",
              borderColor: "rgb(216 180 254 / 0.5)",
              backgroundColor: "rgb(255 255 255 / 0.2)",
              backdropFilter: "blur(4px)",
              color: "rgb(233 213 255 / var(--tw-text-opacity, 1))"
            }
          }}
        />

        {children}
      </body>
    </html>
  );
}
