import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hasib Digital | Premium Web Development Agency",
  description: "We craft exceptional digital experiences. Custom websites, web applications, and e-commerce solutions built by a team of 13 experts. 150+ projects delivered with 99% client satisfaction.",
  keywords: ["web development", "full-stack developer", "React", "Next.js", "UI/UX design", "e-commerce", "web application", "custom website", "Fiverr Pro"],
  authors: [{ name: "Hasib Digital" }],
  openGraph: {
    title: "Hasib Digital | Premium Web Development Agency",
    description: "We craft exceptional digital experiences. Custom websites, web applications, and e-commerce solutions.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
