import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "NXENABLE | Custom Software Development & Technology Partner",
    template: "%s | NXENABLE"
  },
  description:
    "NXENABLE builds custom software, web & mobile applications, business platforms, API integrations, AI and automation solutions.",
  metadataBase: new URL("https://nxenable.co"),
  alternates: { canonical: "https://nxenable.co" },
  openGraph: {
    title: "NXENABLE | Custom Software Development & Technology Partner",
    description:
      "NXENABLE builds custom software, web & mobile applications, business platforms, API integrations, AI and automation solutions.",
    url: "https://nxenable.co",
    siteName: "NXENABLE",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NXENABLE | Enable What's Next." }],
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "NXENABLE | Custom Software Development & Technology Partner", description: "Custom software, web & mobile applications, business platforms, API integrations, AI and automation solutions." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "NXENABLE",
          url: "https://nxenable.co",
          description: "Custom software development and technology partnership for modern businesses.",
          email: "contact@nxenable.co"
        }) }} />
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
