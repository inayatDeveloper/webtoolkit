import ImageResizer from "./imageResizerClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image Resizer Tool | Resize Images Online Free",
    description:
        "Free online image resizer tool. Resize images instantly in your browser without uploading. Fast, secure, and SEO optimized Web Toolkit.",
    keywords: [
        "image resizer",
        "resize image online",
        "free image tool",
        "photo resizer",
        "image compressor",
        "web toolkit image tools",
    ],
    authors: [{ name: "Web Toolkit" }],
    openGraph: {
        title: "Image Resizer Tool - Resize Images Instantly",
        description:
            "Resize images online for free without uploading. Fast client-side image resizer tool.",
        type: "website",
        url: "https://your-domain.com/image-resizer",
        images: [
            {
                url: "https://your-domain.com/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image Resizer Tool",
        description: "Resize images instantly in browser - free Web Toolkit tool.",
        images: ["https://your-domain.com/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return <><ImageResizer /> <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Image Resizer Tool",
                url: "https://yourdomain.com/image-resizer",
                description:
                    "Free online image resizer tool to resize images instantly in your browser without uploading. Fast, secure, and SEO optimized.",
                applicationCategory: "Utility",
                operatingSystem: "All",
                browserRequirements: "Requires JavaScript",
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                },
                featureList: [
                    "Resize images instantly",
                    "No upload required",
                    "Client-side processing",
                    "Download resized images",
                    "Fast and secure tool",
                ],
            }),
        }}
    /></>;
}