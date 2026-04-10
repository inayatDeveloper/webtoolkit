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
    authors: [{ name: "Your Website Name" }],
    creator: "Your Website Name",
    metadataBase: new URL("https://yourdomain.com"),

    openGraph: {
        title: "Base64 Encoder & Decoder Online",
        description:
            "Encode and decode Base64 instantly with this free online tool.",
        url: "https://yourdomain.com/base64-generator",
        siteName: "Free Online Tools Hub",
        type: "website",
        images: [
            {
                url: "/og-base64.png",
                width: 1200,
                height: 630,
                alt: "Base64 Encoder Decoder Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Base64 Encoder & Decoder",
        description:
            "Convert text to Base64 or decode Base64 instantly online.",
        images: ["/og-base64.png"],
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
                        url: "https://yourdomain.com/base64-generator",
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