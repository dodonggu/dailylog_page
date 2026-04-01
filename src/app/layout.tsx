import type { Viewport } from "next";
import { Noto_Sans_KR, Plus_Jakarta_Sans } from "next/font/google";

import { DevEditOverlay } from "@/components/dev-edit-overlay";
import { baseMetadata } from "@/lib/site-config";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#F7F9FF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(255,239,225,0.72),transparent_34%),radial-gradient(circle_at_top_right,rgba(143,175,255,0.22),transparent_30%)]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[28rem] w-[78rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(122,99,255,0.08),transparent_60%)] blur-3xl" />
          {children}
          <DevEditOverlay />
        </div>
      </body>
    </html>
  );
}
