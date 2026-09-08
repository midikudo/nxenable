import type { Metadata } from "next";

const baseUrl = "https://nxenable.co";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}${path}` },
    openGraph: {
      title: `${title} | NXENABLE`,
      description,
      url: `${baseUrl}${path}`,
      siteName: "NXENABLE",
      locale: "en_US",
      type: path.startsWith("/work/") ? "article" : "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NXENABLE | Enable What's Next." }]
    },
    twitter: { card: "summary_large_image", title: `${title} | NXENABLE`, description }
  };
}
