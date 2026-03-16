import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaiju Jiu-Jitsu Middleburg FL | Kids & Adult Brazilian Jiu-Jitsu Classes",
  description:
    "Train Jiu-Jitsu in a safe, family-friendly gym in Middleburg, FL. Kids, ladies, and adult classes led by experienced black belt instruction. Book your first class at Kaiju Jiu-Jitsu today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-50 antialiased">{children}</body>
    </html>
  );
}
