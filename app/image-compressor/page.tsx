import type { Metadata } from "next";
import ImageCompressor from "./imageCompressorClient";

export const metadata: Metadata = {
    title: "Compress Image Online (Free) | Reduce JPG, PNG Size Without Losing Quality",
    description:
        "Free online image compressor to reduce JPG and PNG file size without losing quality. Optimize images for web, fast loading, and SEO in seconds.",

    keywords: [
        "compress image online free",
        "reduce image size without losing quality",
        "compress jpg image online",
        "compress png image online",
        "image size reducer kb",
        "optimize images for web",
        "photo compressor free online",
        "reduce image file size for website",
        "bulk image compression tool",
        "WebToolkit image compressor",
        "fast image optimizer online"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free Image Compressor | Reduce Image Size Instantly",
        description:
            "Compress JPG and PNG images online without losing quality. Fast, secure, and free image optimization tool.",
        url: "https://webtoolkit-tau.vercel.app/image-compressor",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/image-compressor-tool.png",
                width: 1200,
                height: 630,
                alt: "Image Compressor Online Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Compress Images Online (Free)",
        description:
            "Reduce image size without losing quality. Optimize JPG and PNG images instantly.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/image-compressor-tool.png",
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/image-compressor",
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
    return (
        <>
            <ImageCompressor />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "Image Compressor Tool",
                        url: "https://webtoolkit-tau.vercel.app/image-compressor",
                        description:
                            "Free online image compressor to reduce file size and optimize images instantly without losing quality.",
                        applicationCategory: "Utility",
                        operatingSystem: "All",
                    }),
                }}
            />
        </>
    );
}