import type { Metadata } from "next";
import { Amiri, Tajawal, Reem_Kufi } from "next/font/google";
import "./globals.css";

const display = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
});

const hand = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "إلى آية ❤",
  description: "رسالة حب صغيرة، صُنعت لكِ وحدكِ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
