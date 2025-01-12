import type { Metadata } from "next";
import "./globals.css";
import cx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title:
    "Custom Web, Mobile, Software Design & Development Services | Metro Labs",
  description:
    "Metro Labs offers expert web development, custom software solutions, UI/UX design, CRMs, eCommerce platforms, and SaaS development. Get an instant quote today!",
  alternates: {
    canonical: "https://metrolabs-eight.vercel.app",
  },
  icons: {
    icon: "/metrolabslogo.svg", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body >
        <div className="max-w-7xl mt-8 mx-auto">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
