import type { Metadata } from "next";
import { Fredoka, Montserrat } from "next/font/google";
import "./globals.css";

const montserratSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const fredokaSans = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans} ${fredokaSans} antialiased`}>
        {children}
      </body>
    </html>
  );
}
