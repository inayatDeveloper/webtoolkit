import type { Metadata } from "next";
import LoremIpsumGenerator from "./textGeneratorClient";

export const metadata: Metadata = {
    title: "Lorem Ipsum Generator - Free Placeholder Text Tool",
    description:
        "Generate lorem ipsum text instantly for documents, designs, and content. Free, fast, and easy to use online tool.",
    keywords: [
        "lorem ipsum generator",
        "placeholder text generator",
        "dummy text generator",
        "random text generator",
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Lorem Ipsum Generator Tool",
        description:
            "Create placeholder text instantly for documents, websites, and designs.",
        url: "https://webtoolkit-tau.vercel.app/generator-text",
        siteName: "webtoolkit-tau",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/generator-text-image.png",
                width: 1200,
                height: 630,
                alt: "Lorem Ipsum Generator Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Lorem Ipsum Generator Tool",
        description:
            "Generate placeholder text instantly for designs and content.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/generator-text-image.png",
        ],
    },

    robots: {
        index: true,
        follow: true,
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
                        url: "https://webtoolkit-tau.vercel.app/generator-text",
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