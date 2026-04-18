import type { Metadata } from "next";
import Base64ToolClient from "./base64ToolClient"

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
    title: "Base64 Encoder & Decoder Online | Encode & Decode Instantly",
    description:
        "Free online Base64 encoder and decoder tool. Encode text to Base64 or decode Base64 to text instantly. Fast, secure, and easy to use.",
    keywords: [
        "base64 encoder",
        "base64 decoder",
        "encode base64 online",
        "decode base64 online",
        "base64 converter",
        "text to base64",
        "base64 to text",
        "online encoding tool",
    ],
    authors: [{ name: "Inayat Ulllah" }],
    creator: "webtoolkit-tau",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Base64 Encoder & Decoder Online",
        description:
            "Encode and decode Base64 instantly with this free online tool.",
        url: "https://webtoolkit-tau.vercel.app/base64-generator",
        siteName: "webtoolkit-tau",
        type: "website",
        images: [
            {
                url: "/images/encode-image.png",
                alt: "Base64 Encoder Decoder Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Base64 Encoder & Decoder",
        description:
            "Convert text to Base64 or decode Base64 instantly online.",
        images: ["/images/encode-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return (
        <>
            <Base64ToolClient />

            {/* ✅ STRUCTURED DATA (VERY IMPORTANT) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "Base64 Encoder Decoder",
                        url: "https://webtoolkit-tau.vercel.app/base64-generator",
                        description:
                            "Free online Base64 encoder and decoder tool to encode text and decode Base64 instantly.",
                        applicationCategory: "Utility",
                        operatingSystem: "All",
                    }),
                }}
            />
        </>
    );
}