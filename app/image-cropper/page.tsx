import ImageCropper from "./imageCropperClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image Cropper Tool | Crop Images Online Free",
    description:
        "Free online image cropper tool to crop images instantly in your browser without uploading. Fast, secure and easy Web Toolkit utility.",
    keywords: [
        "image cropper",
        "crop image online",
        "photo crop tool",
        "free image cropper",
        "web toolkit image tools",
    ],
    openGraph: {
        title: "Image Cropper Tool - Crop Images Instantly",
        description:
            "Crop images online for free without uploading. Fast browser-based image cropper tool.",
        url: "https://yourdomain.com/image-cropper",
        type: "website",
        images: [
            {
                url: "https://yourdomain.com/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image Cropper Tool",
        description:
            "Crop images instantly in browser - free Web Toolkit tool.",
        images: ["https://yourdomain.com/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return <><script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Image Cropper Tool",
                url: "https://yourdomain.com/image-cropper",
                description:
                    "Free online image cropper tool to crop images instantly in your browser without uploading. Fast, secure and fully browser-based image utility.",
                applicationCategory: "Utility",
                operatingSystem: "All",
                browserRequirements: "Requires JavaScript",
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                },
                featureList: [
                    "Crop images instantly in browser",
                    "No upload required",
                    "Drag and adjust crop values",
                    "Download cropped images",
                    "Fast and secure tool",
                ],
            }),
        }}
    /><ImageCropper /></>;
}