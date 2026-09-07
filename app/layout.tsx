import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "NXENABLE — Enable What's Next.",
    template: "%s | NXENABLE"
  },
  description:
    "Custom software, web & mobile applications, business platforms, AI & automation for modern businesses.",
  metadataBase: new URL("https://nxenable.co"),
  openGraph: {
    title: "NXENABLE — Enable What's Next.",
    description:
      "Custom software, web & mobile applications, business platforms, AI & automation.",
    url: "https://nxenable.co",
    siteName: "NXENABLE",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
