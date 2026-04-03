import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Obsidion Training Hub",
  description:
    "Employee training hub for Obsidion — role-based onboarding, playbooks, and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
