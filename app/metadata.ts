import { Metadata } from "next";

export const metadataBase = new URL("https://thamir-siddik.vercel.app");

export const metadata: Metadata = {
  title: {
    default: "Thamir S | Full-Stack Developer Portfolio",
    template: "%s | Thamir S",
  },
  description:
    "Explore the portfolio of Thamir S - Full-Stack developer building modern, scalable, high-performance web apps. Projects, resume, and contact.",
  keywords: [
    "Javascript",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "Nest.js",
    "MongoDB",
    "PostgreSQL",
    "MERN",
    "Full-stack developer",
    "Frontend developer",
    "Tailwind CSS",
    "Web Developer",
    "Portfolio",
    "Performance",
    "Accessibility",
  ],
  authors: [{ name: "Thamir Siddik", url: "https://thamir-siddik.vercel.app" }],
  creator: "Thamir S",
  publisher: "Thamir S",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" }, // light bg
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }, // dark bg
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://thamir-siddik.vercel.app/",
    languages: {
      "en-IN": "https://thamir-siddik.vercel.app/",
    },
  },

  openGraph: {
    title: "Thamir S | Full-Stack Developer Portfolio",
    description:
      "Full-Stack developer building modern, scalable, high-performance web applications using Next.js, React, Node.js, and PostgreSQL.",
    url: "https://thamir-siddik.vercel.app/",
    siteName: "Thamir Siddik",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://thamir-siddik.vercel.app/og_1200x1200.webp",
        width: 1200,
        height: 1200,
        alt: "Thamir Siddik — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thamir S | Full-Stack Developer Portfolio",
    description:
      "Full-Stack developer building modern, scalable, high-performance web apps. Projects, resume, and contact.",
    creator: "@thamirsiddik",
    images: ["https://thamir-siddik.vercel.app/og_1200x1200.webp"],
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://thamir-siddik.vercel.app/#person",
      name: "Thamir Siddik",
      givenName: "Thamir",
      familyName: "Siddik",
      url: "https://thamir-siddik.vercel.app/",
      image: "https://thamir-siddik.vercel.app/og_1200x1200.webp",
      jobTitle: "Next.js / Full-Stack Developer",
      description:
        "Full-Stack developer specializing in Next.js, React, TypeScript, Node.js, Express, NestJS, MongoDB and PostgreSQL. Builds scalable, performant web applications.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "NestJS",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "Tailwind CSS",
        "Performance Optimization",
        "Accessibility",
      ],
      sameAs: [
        "https://github.com/thamir0022",
        "https://www.linkedin.com/in/thamirsiddik",
        "https://x.com/thamirsiddik",
        "https://www.instagram.com/thaxxmir",
        "https://thamir-siddik.vercel.app",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thamir-siddik.vercel.app/#website",
      url: "https://thamir-siddik.vercel.app/",
      name: "Thamir S | Full-Stack Developer Portfolio",
      description:
        "Portfolio of Thamir Siddik — Next.js & Full-Stack developer. Projects, resume, and contact.",
      publisher: {
        "@id": "https://thamir-siddik.vercel.app/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://thamir-siddik.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const jsonLdString = JSON.stringify(jsonLd);
