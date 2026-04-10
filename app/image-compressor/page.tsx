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

    openGraph: {
        title: "Image Compressor Tool",
        description:
            "Compress and optimize your images instantly with this free online tool.",
        url: "https://yourdomain.com/image-compressor",
        type: "website",
    },

    alternates: {
        canonical: "https://yourdomain.com/image-compressor",
    },
};

export default function Page() {
    return <>
        <ImageCompressor />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    name: "Image Compressor Tool",
                    url: "https://yourdomain.com/image-compressor",
                    description:
                        "Free online image compressor to reduce file size and optimize images instantly without losing quality.",
                    applicationCategory: "Utility",
                    operatingSystem: "All",
                }),
            }}
        /></>;
}