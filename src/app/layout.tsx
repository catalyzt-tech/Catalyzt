import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalyzt",
  description: "Catalyzt is a platform that connects builders with ideas and resources to create a better web3 ecosystem.",
  keywords: ["web3", "catalyzt", "ethereum", "blockchain", "decentralized", "dapps", "defi", "nft"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
