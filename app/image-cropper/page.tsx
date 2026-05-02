import ImageCropper from "./imageCropperClient";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Crop Image Online (Free) | Image Cropper for JPG, PNG & Social Media",
    description:
        "Free online image cropper to crop JPG and PNG images instantly. Adjust aspect ratio, resize for Instagram, and download cropped images without quality loss.",

    keywords: [
        "crop image online free",
        "image cropper tool jpg png",
        "photo crop tool online",
        "crop image for instagram size",
        "resize and crop image online",
        "aspect ratio image cropper",
        "crop image without losing quality",
        "free online photo cropper",
        "image crop tool for web design",
        "WebToolkit image cropper",
        "browser based image editing tool"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free Image Cropper | Crop Photos Online Instantly",
        description:
            "Crop images online for free. Adjust size, aspect ratio, and download instantly with this fast browser-based tool.",
        url: "https://webtoolkit-tau.vercel.app/image-cropper",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/image-cropper.png", // ✅ unchanged
                alt: "Image Cropper Online Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Image Cropper Online (Free)",
        description:
            "Crop and resize images instantly with this free tool.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/image-cropper.png" // ✅ unchanged
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/image-cropper",
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
    return <><script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Image Cropper Tool",
                url: "https://webtoolkit-tau.vercel.app/image-cropper",
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