import type { Metadata } from "next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const origin = "https://hasibventure.com";

  return {
    metadataBase: new URL(origin),
    applicationName: "Hasib Venture",
    title: "Md Hasibul Hasan | Full-Stack Developer",
    description:
      "Full-stack developer building dependable web products with React, Next.js, Node.js, PostgreSQL, and cloud infrastructure.",
    keywords: [
      "Md Hasibul Hasan",
      "full-stack developer",
      "React developer",
      "Next.js developer",
      "Node.js developer",
      "web application developer",
    ],
    authors: [{ name: "Md Hasibul Hasan" }],
    creator: "Md Hasibul Hasan",
    alternates: {
      canonical: origin,
    },
    openGraph: {
      title: "Md Hasibul Hasan | Full-Stack Developer",
      description:
        "From product idea to production—high-quality web products built for real business outcomes.",
      type: "website",
      locale: "en_US",
      url: origin,
      siteName: "Hasib Venture",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "Md Hasibul Hasan — Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Md Hasibul Hasan | Full-Stack Developer",
      description:
        "From product idea to production—high-quality web products built for real business outcomes.",
      images: [`${origin}/og.png`],
    },
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
