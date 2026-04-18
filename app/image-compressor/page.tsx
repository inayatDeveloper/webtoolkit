import type { Metadata } from "next";
import ImageCompressor from "./imageCompressorClient";

export const metadata: Metadata = {
    title: "Free Image Compressor Online - Reduce Image Size Instantly",
    description:
        "Compress images online, reduce file size, and download optimized images instantly without losing quality.",
    keywords: [
        "image compressor",
        "compress image online",
        "reduce image size",
        "optimize images",
        "photo compressor",
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Image Compressor Tool",
        description:
            "Compress and optimize your images instantly with this free online tool.",
        url: "https://webtoolkit-tau.vercel.app/image-compressor",
        siteName: "webtoolkit-tau",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/image-compressor.png",
                width: 1200,
                height: 630,
                alt: "Image Compressor Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Image Compressor Tool",
        description:
            "Compress and optimize images instantly online.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/image-compressor.png",
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/image-compressor",
    },

    robots: {
        index: true,
        follow: true,
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