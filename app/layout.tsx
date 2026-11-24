import type { Metadata } from "next";
import "./globals.css";


export async function generateMetadata(): Promise<Metadata> {
  const origin = "https://hasibventure.com";

  return {
    metadataBase: new URL(origin),
    applicationName: "Hasib Venture",
    title: "Md Hasibul Hasan | Web, Mobile & Game Developer",
    description:
      "Hasib designs and builds full-stack websites, Flutter and React Native apps, and mobile games in Godot and Unity. UI/UX design in Figma. Based in Bangladesh.",
    keywords: [
      "Md Hasibul Hasan",
      "Hasib",
      "full-stack developer",
      "Flutter developer",
      "React Native developer",
      "Godot",
      "Unity",
      "UI/UX designer",
      "Elevate IT",
    ],
    authors: [{ name: "Md Hasibul Hasan" }],
    creator: "Md Hasibul Hasan",
    alternates: {
      canonical: origin,
    },
    openGraph: {
      title: "Md Hasibul Hasan | Web, Mobile & Game Developer",
      description:
        "Full-stack web, mobile apps and games, plus UI/UX design. Hasib builds from Bangladesh and runs Elevate IT.",
      type: "website",
      locale: "en_US",
      url: origin,
      siteName: "Hasib Venture",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "Md Hasibul Hasan, Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Md Hasibul Hasan | Web, Mobile & Game Developer",
      description:
        "Full-stack web, mobile apps and games, plus UI/UX design. Hasib builds from Bangladesh and runs Elevate IT.",
      images: [`${origin}/og.png`],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: ["/favicon.ico"],
    },
    manifest: "/site.webmanifest",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="JpcXh7Lfvyrv4_qCeBhDUZeUCMllHLucwPHm2PL4lIg" />
      <body>{children}</body>
    </html>
  );
}
