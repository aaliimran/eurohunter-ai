import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthGoogleProvider from "@/components/providers/google-provider";
import "@/app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eurohunter-ai",
  description: "Empowered by EuroHunter AI, readying you for interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthGoogleProvider>{children}</AuthGoogleProvider>
      </body>
    </html>
  );
}
