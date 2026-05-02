import ImageResizer from "./imageResizerClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resize Image Online (Free) | Change Image Size in JPG, PNG Instantly",
    description:
        "Free online image resizer to change image dimensions and reduce size instantly. Resize JPG and PNG images without losing quality directly in your browser.",

    keywords: [
        "resize image online free",
        "image resizer tool jpg png",
        "change image size online",
        "resize image without losing quality",
        "photo resizer online free",
        "resize image for instagram",
        "resize image dimensions px",
        "image width height resizer",
        "compress and resize image online",
        "WebToolkit image resizer",
        "browser based image resizing tool"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free Image Resizer | Resize Photos Online Instantly",
        description:
            "Resize images online without uploading. Adjust width, height, and dimensions instantly with this fast tool.",
        type: "website",
        url: "https://webtoolkit-tau.vercel.app/image-resizer",
        siteName: "WebToolkit",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/image-resizer.png", // ✅ unchanged
                alt: "Image Resizer Online Tool"
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Image Resizer Online (Free)",
        description:
            "Resize images instantly by changing width and height.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/image-resizer.png" // ✅ unchanged
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/image-resizer",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
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