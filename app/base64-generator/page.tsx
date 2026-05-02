import type { Metadata } from "next";
import Base64ToolClient from "./base64ToolClient"

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
    title: "Base64 Encode & Decode Online (Free) | Text to Base64 Converter",
    description:
        "Free Base64 encoder and decoder tool. Convert text to Base64 and decode Base64 to text instantly. Fast, secure, and developer-friendly online utility.",

    keywords: [
        "base64 encode decode online",
        "base64 encoder decoder free",
        "text to base64 converter",
        "base64 to text decoder",
        "encode string to base64 javascript",
        "decode base64 string online",
        "base64 tool for developers",
        "online base64 converter free",
        "utf8 to base64 encoder",
        "WebToolkit base64 tool",
        "developer encoding utilities online"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Base64 Encode & Decode Tool (Free Online)",
        description:
            "Instantly encode text to Base64 or decode Base64 to text with this fast and secure online tool.",
        url: "https://webtoolkit-tau.vercel.app/base64-generator",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/base64-tool.png",
                alt: "Base64 Encoder and Decoder Online Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Base64 Encoder & Decoder Online",
        description:
            "Convert text to Base64 or decode Base64 instantly with this free tool.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/base64-tool.png"
        ],
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