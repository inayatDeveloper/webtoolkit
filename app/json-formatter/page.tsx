import type { Metadata } from "next";
import JsonFormatterPage from "./jsonFormatterClient";

export const metadata: Metadata = {
    title: "JSON Formatter Online (Free) | Validate, Beautify & Minify JSON",
    description:
        "Free online JSON formatter and validator tool. Beautify, validate, and minify JSON instantly with fast and secure browser-based processing.",

    keywords: [
        "json formatter online free",
        "json validator online tool",
        "format json data online",
        "minify json online free",
        "json beautifier tool",
        "pretty print json online",
        "fix json errors online",
        "json viewer formatter",
        "developer json tools online",
        "WebToolkit json formatter",
        "fast json formatter and validator"
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free JSON Formatter & Validator Online",
        description:
            "Beautify, validate, and minify JSON instantly with this fast online developer tool.",
        url: "https://webtoolkit-tau.vercel.app/json-formatter",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/json-image.png",
                width: 1200,
                height: 630,
                alt: "JSON Formatter Online Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "JSON Formatter Online (Free)",
        description:
            "Format, validate, and minify JSON instantly with this free tool.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/json-image.png",
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/json-formatter",
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
            <JsonFormatterPage />

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "JSON Formatter Tool",
                        url: "https://webtoolkit-tau.vercel.app/json-formatter",
                        description:
                            "Free online JSON formatter and validator to beautify, minify, and clean JSON data instantly.",
                        applicationCategory: "Utility",
                        operatingSystem: "All",
                    }),
                }}
            />
        </>
    );
}