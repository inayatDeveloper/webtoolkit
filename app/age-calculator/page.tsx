import type { Metadata } from "next";
import AgeCalculatorClient from "./ageCalculatorClient";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
    title: "Age Calculator Online (Free) | Exact Age, Days & Next Birthday",
    description:
        "Use this free age calculator to find your exact age in years, months, and days. Calculate total days lived and your next birthday instantly online.",

    keywords: [
        "age calculator online free",
        "exact age calculator in years months days",
        "how old am i calculator",
        "calculate age from date of birth",
        "age calculator with days and months",
        "birthday age calculator online",
        "next birthday calculator free",
        "total days lived calculator",
        "dob age calculator tool",
        "online age finder tool",
        "WebToolkit age calculator",
        "free developer tools age calculator"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free Age Calculator | Exact Age, Days & Birthday Finder",
        description:
            "Instantly calculate your exact age, total days lived, and upcoming birthday with this fast and free online tool.",
        url: "https://webtoolkit-tau.vercel.app/age-calculator",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/age-calcultor-image.png",
                alt: "Free Age Calculator Tool Online",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Age Calculator Online | Free & Instant",
        description:
            "Find your exact age, total days lived, and next birthday in seconds.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/age-calcultor-image.png"
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
    return <>
        <AgeCalculatorClient />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    name: "Age Calculator",
                    url: "https://webtoolkit-tau.vercel.app/age-calculator",
                    description:
                        "Free online age calculator that shows exact age, total days lived, and next birthday.",
                    applicationCategory: "Utility",
                    operatingSystem: "All",
                }),
            }}
        />
    </>
}