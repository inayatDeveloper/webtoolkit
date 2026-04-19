import type { Metadata } from "next";
import PasswordGenerator from "./passwordGeneratorClient";

export const metadata: Metadata = {
    title: "Password Generator - Create Secure Passwords Online",
    description:
        "Generate strong and secure passwords instantly. Customize length, symbols, numbers, and more with this free online password generator.",
    keywords: [
        "password generator",
        "secure password",
        "strong password generator",
        "random password generator",
        "create password online",
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Secure Password Generator Tool",
        description:
            "Create strong and secure passwords instantly for your accounts.",
        url: "https://webtoolkit-tau.vercel.app/password-generator",
        siteName: "webtoolkit-tau",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/password-image.png",
                alt: "Password Generator Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Secure Password Generator Tool",
        description:
            "Generate strong and secure passwords instantly.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/password-image.png",
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
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "Password Generator",
                        url: "https://webtoolkit-tau.vercel.app/password-generator",
                        description:
                            "Free online password generator to create strong and secure passwords instantly.",
                        applicationCategory: "SecurityApplication",
                        operatingSystem: "All",
                    }),
                }}
            />

            <PasswordGenerator />
        </>
    );
}