import type { Metadata } from "next";
import JsonFormatterPage from "./jsonFormatterClient";

export const metadata: Metadata = {
    title: "Free JSON Formatter & Validator Online",
    description:
        "Format, validate, and minify JSON instantly with this free online JSON formatter tool.",
    keywords: [
        "json formatter",
        "json validator",
        "format json online",
        "minify json",
        "json beautifier",
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "JSON Formatter Tool",
        description:
            "Beautify and validate JSON data instantly with this free tool.",
        url: "https://webtoolkit-tau.vercel.app/json-formatter",
        siteName: "webtoolkit-tau",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/json-image.png",
                width: 1200,
                height: 630,
                alt: "JSON Formatter Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "JSON Formatter Tool",
        description:
            "Beautify, validate and format JSON instantly.",
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