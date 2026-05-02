import type { Metadata } from "next";
import PasswordGenerator from "./passwordGeneratorClient";

export const metadata: Metadata = {
    title: "Password Generator Online (Free) | Create Strong & Secure Passwords",
    description:
        "Free online password generator to create strong, secure, and random passwords. Customize length, symbols, numbers, and complexity instantly.",

    keywords: [
        "password generator online free",
        "strong password generator",
        "secure random password generator",
        "create strong password online",
        "random password generator with symbols",
        "password generator for accounts",
        "safe password creator tool",
        "generate uncrackable password",
        "password generator with numbers and symbols",
        "WebToolkit password generator",
        "online security password tool"
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free Password Generator | Create Strong Secure Passwords",
        description:
            "Generate strong, random, and secure passwords instantly with custom options for symbols, numbers, and length.",
        url: "https://webtoolkit-tau.vercel.app/password-generator",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/password-image.png",
                alt: "Password Generator Online Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Password Generator Online (Free)",
        description:
            "Create strong and secure passwords instantly with custom options.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/password-image.png",
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/password-generator",
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