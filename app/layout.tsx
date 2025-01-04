import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roast Recovery",
  description: "Roast the Roaster!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow bg-gradient-to-br from-purple-600 to-blue-600">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
