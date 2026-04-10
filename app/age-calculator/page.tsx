import type { Metadata } from "next";
import AgeCalculatorClient from "./ageCalculatorClient";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
    title: "Age Calculator | Find Your Exact Age Instantly Online",
    description:
        "Calculate your exact age in years, months, days, total days lived, and next birthday instantly. Free online age calculator for everyone.",
    keywords: [
        "age calculator",
        "calculate age online",
        "exact age calculator",
        "birthday calculator",
        "how old am i",
        "age in days calculator",
        "next birthday calculator",
        "online age tool",
    ],
    authors: [{ name: "Your Website Name" }],
    creator: "Your Website Name",
    metadataBase: new URL("https://yourdomain.com"),

    openGraph: {
        title: "Age Calculator | Calculate Your Exact Age Instantly",
        description:
            "Find your exact age, total days lived, and next birthday in seconds with this free online age calculator.",
        url: "https://yourdomain.com/age-calculator",
        siteName: "Free Online Tools Hub",
        type: "website",
        images: [
            {
                url: "/og-age-calculator.png",
                width: 1200,
                height: 630,
                alt: "Age Calculator Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Age Calculator | Free Online Tool",
        description:
            "Calculate your exact age, total days lived, and next birthday instantly.",
        images: ["/og-age-calculator.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return <>
        <AgeCalculatorClient />;
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    name: "Age Calculator",
                    url: "https://yourdomain.com/age-calculator",
                    description:
                        "Free online age calculator that shows exact age, total days lived, and next birthday.",
                    applicationCategory: "Utility",
                    operatingSystem: "All",
                }),
            }}
        />
    </>
}