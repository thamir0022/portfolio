import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Thamir S | Next.js Developer Portfolio",
  description: "Explore the portfolio of Thamir S, a passionate Next.js developer specializing in modern, scalable web applications. Discover projects showcasing expertise in React, Next.js, and cutting-edge web technologies.",
};


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
