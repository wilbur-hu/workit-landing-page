import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: './fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf',
  display: "swap",
  variable: '--font-fraunces',
})

const manrope = localFont({
  src: './fonts/manrope/Manrope-VariableFont_wght.ttf',
  display: "swap",
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: "Workit Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} ${manrope.className} flex justify-center items-center`}>{children}</body>
    </html>
  );
}
