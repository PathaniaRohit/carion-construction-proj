import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource/commit-mono/400.css";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Carion Construction — Concrete Formwork, Lower Mainland",
    template: "%s — Carion Construction",
  },
  description:
    "Superior concrete formwork for high-rise and complex structures across the Lower Mainland, delivered on time and on budget.",
};

const switzer = localFont({
  src: [
    { path: "../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Switzer-Italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Switzer-SemiboldItalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-switzer",
});

export const viewport: Viewport = {
  themeColor: "#000f14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={switzer.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
