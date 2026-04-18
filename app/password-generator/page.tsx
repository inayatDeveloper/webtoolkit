import PasswordGenerator from "./passwordGeneratorClient";

export const metadata = {
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
    openGraph: {
        title: "Secure Password Generator Tool",
        description:
            "Create strong and secure passwords instantly for your accounts.",
        url: "https://webtoolkit-tau.vercel.app/password-generator",
        siteName: "webtoolkit-tau",
        type: "website",
    },
};

export default function Page() {
    return (
        <>
            {/* ✅ JSON-LD Structured Data */}
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