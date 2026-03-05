import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "./providers/QueryProvider";
import { NotificationProvider } from "./contexts/NotificationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "De-Identification",
  description: "De-Identification Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen bg-background text-mainText antialiased`}
      >
        <QueryProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
