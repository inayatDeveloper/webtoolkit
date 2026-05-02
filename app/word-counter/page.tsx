import type { Metadata } from "next";
import WordCounterClient from "./wordCounterClient";

// ✅ SEO METADATA (Google + SMO)
export const metadata: Metadata = {
    title: "Word Counter Tool Online (Free) | Count Words, Characters & Reading Time",
    description:
        "Free online word counter tool to count words, characters, sentences, paragraphs, and reading time instantly. Fast and accurate text analysis for writers and SEO.",

    keywords: [
        "word counter online free",
        "character counter tool",
        "text analyzer online",
        "word count tool free",
        "sentence counter online",
        "paragraph counter tool",
        "reading time calculator tool",
        "seo text analyzer",
        "writing word counter tool",
        "WebToolkit word counter",
        "online text statistics tool"
    ],

    robots: {
        index: true,
        follow: true,
    },

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Word Counter Tool Online (Free)",
        description:
            "Count words, characters, sentences, paragraphs, and reading time instantly with this free online text analyzer.",
        url: "https://webtoolkit-tau.vercel.app/word-counter",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/word-counter-image.png",
                alt: "Word Counter Tool Preview",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Word Counter Tool Online (Free)",
        description:
            "Analyze text instantly: words, characters, sentences, and reading time.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/word-counter-image.png"
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/word-counter",
    },
};

export default function Page() {
    return (
        <>
            {/* CLIENT COMPONENT */}
            <WordCounterClient />

            {/* ✅ STRUCTURED DATA (Google Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "Word Counter Tool",
                        url: "https://webtoolkit-tau.vercel.app/word-counter",
                        description:
                            "Free tool to count words, characters, sentences, paragraphs, and reading time instantly.",
                        applicationCategory: "Utility",
                        operatingSystem: "All",
                    }),
                }}
            />
        </>
    );
}