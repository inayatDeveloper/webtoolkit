import type { Metadata } from "next";
import LoremIpsumGenerator from "./textGeneratorClient";

export const metadata: Metadata = {
    title: "Lorem Ipsum Generator Online (Free) | Placeholder Text for Designers & Developers",
    description:
        "Generate Lorem Ipsum placeholder text instantly for websites, UI designs, mockups, and documents. Customize paragraphs, words, and sentences online for free.",

    keywords: [
        "lorem ipsum generator online free",
        "placeholder text generator for designers",
        "dummy text generator online",
        "random placeholder text generator",
        "generate lorem ipsum paragraphs",
        "ui design filler text tool",
        "mockup text generator online",
        "website content placeholder generator",
        "random text generator for developers",
        "text filler generator online free",
        "WebToolkit lorem ipsum tool"
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free Lorem Ipsum Generator | Placeholder Text Tool",
        description:
            "Generate placeholder text instantly for UI design, websites, and development mockups.",
        url: "https://webtoolkit-tau.vercel.app/text-creator",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/text-creator-image.png",
                width: 1200,
                height: 630,
                alt: "Lorem Ipsum Generator Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Lorem Ipsum Generator Online (Free)",
        description:
            "Generate placeholder text instantly for design and development.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/text-creator-image.png",
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/text-creator",
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
            <LoremIpsumGenerator />

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "Lorem Ipsum Generator",
                        url: "https://webtoolkit-tau.vercel.app/text-creator",
                        description:
                            "Free online Lorem Ipsum generator to create placeholder text instantly.",
                        applicationCategory: "Utility",
                        operatingSystem: "All",
                    }),
                }}
            />
        </>
    );
}