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
    openGraph: {
        title: "Lorem Ipsum Generator Tool",
        description:
            "Create placeholder text instantly for documents, websites, and designs.",
        url: "https://webtoolkit-tau.vercel.app/text-Generator",
        siteName: "webtoolkit-tau",
        type: "website",
    },
};

export default function Page() {
    return (
        <>
            {/* CLIENT UI ONLY */}
            <LoremIpsumGenerator />

            {/* ✅ SAFE JSON-LD (ONLY IN SERVER PAGE) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "Lorem Ipsum Generator",
                        url: "https://webtoolkit-tau.vercel.app/text-Generator",
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