export const metadata = {
    title: "Privacy Policy | WebToolkit - Data Protection & User Privacy",
    description:
        "Read WebToolkit Privacy Policy to understand how we handle data, cookies, and user privacy while using our free online tools. We respect your privacy.",

    keywords: [
        "privacy policy webtoolkit",
        "webtoolkit data protection",
        "cookies policy webtoolkit",
        "online tools privacy policy",
        "user data protection policy",
        "webtoolkit privacy terms",
        "no data collection tools website",
        "browser based tools privacy"
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Privacy Policy | WebToolkit",
        description:
            "Learn how WebToolkit protects your privacy while using free online tools.",
        url: "https://webtoolkit-tau.vercel.app/privacy-policy",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/privacy-image.png",
                alt: "WebToolkit Privacy Policy",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | WebToolkit",
        description:
            "Learn how WebToolkit handles data and protects user privacy.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/privacy-image.png"
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/privacy-policy",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    <p className="text-gray-400 text-sm mt-2">
                        Your privacy is important to us
                    </p>
                </div>

                {/* CONTENT */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4">

                    <p>
                        At WebToolkit, we respect your privacy. This policy explains how we
                        handle your information when using our tools.
                    </p>

                    <h2 className="text-lg font-semibold">Information Collection</h2>
                    <p className="text-gray-400 text-sm">
                        We do not collect personal data directly. We may use analytics tools
                        to improve user experience.
                    </p>

                    <h2 className="text-lg font-semibold">Cookies</h2>
                    <p className="text-gray-400 text-sm">
                        Cookies may be used to enhance functionality and track usage.
                    </p>

                    <h2 className="text-lg font-semibold">Third-Party Services</h2>
                    <p className="text-gray-400 text-sm">
                        We may use services like analytics or ads providers that collect
                        limited data.
                    </p>

                    <h2 className="text-lg font-semibold">Updates</h2>
                    <p className="text-gray-400 text-sm">
                        This policy may change. Please check regularly.
                    </p>

                </div>
            </div>
        </div>
    );
}