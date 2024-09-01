import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Thamir S | Next.js Developer Portfolio",
  description:
    "Explore the portfolio of Thamir S, a passionate Next.js developer specializing in modern, scalable web applications. Discover projects showcasing expertise in React, Next.js, and cutting-edge web technologies.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9ND17WDZD3"
        ></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9ND17WDZD3');
            `,
          }}
        />
      </Head>
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
