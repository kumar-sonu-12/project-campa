import { Metadata } from "next";
import { SEO_CONFIG } from "./config";

export const baseMetadata: Metadata = {
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: "%s | " + SEO_CONFIG.siteName
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  metadataBase: new URL(SEO_CONFIG.canonicalBaseUrl),
  applicationName: SEO_CONFIG.siteName,
  authors: [{ name: "Campacola Business Development Team" }],
  generator: "Next.js",
  referrer: "origin",

  openGraph: {
    title: {
      default: SEO_CONFIG.defaultTitle,
      template: "%s | " + SEO_CONFIG.siteName
    },
    description: SEO_CONFIG.description,
    type: "website",
    locale: "en_US",
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Campa Cola Dealership Opportunities"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.description,
    images: ["/twitter-image.png"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  verification: {
    google: "your-google-site-verification-code"
    // bing: "your-bing-site-verification-code"
  },

  alternates: {
    canonical: SEO_CONFIG.canonicalBaseUrl,
    languages: {
      "en-US": "/en-US"
    }
  }
};
