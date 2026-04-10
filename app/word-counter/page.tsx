import type { Metadata } from "next";
import WordCounterClient from "./wordCounterClient";

// ✅ SEO METADATA (Google + SMO)
export const metadata: Metadata = {
    title: "Word Counter Tool | Count Words, Characters & Reading Time",
    description:
        "Free Word Counter Tool to instantly count words, characters, sentences, paragraphs, and reading time. Fast, accurate, and easy online text analyzer.",
    keywords: [
        "word counter",
        "character counter",
        "text analyzer",
        "word count tool",
        "sentence counter",
        "paragraph counter",
        "reading time calculator",
        "online text tool",
    ],

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        title: "Word Counter Tool - Analyze Text Instantly",
        description:
            "Count words, characters, sentences, paragraphs and reading time instantly with this free online tool.",
        url: "https://your-domain.com/word-counter",
        siteName: "Your Tools Platform",
        type: "website",
        images: [
            {
                url: "https://your-domain.com/og/word-counter.png",
                width: 1200,
                height: 630,
                alt: "Word Counter Tool Preview",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Word Counter Tool",
        description:
            "Free online tool to count words, characters, sentences and reading time.",
        images: ["https://your-domain.com/og/word-counter.png"],
    },

    alternates: {
        canonical: "https://your-domain.com/word-counter",
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
                        url: "https://your-domain.com/word-counter",
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