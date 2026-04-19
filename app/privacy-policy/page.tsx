export const metadata = {
    title: "Privacy Policy | WebToolkit",
    description:
        "Learn how WebToolkit protects your data while using our free online tools. We respect your privacy and explain how data is handled.",

    openGraph: {
        title: "Privacy Policy | WebToolkit",
        description:
            "Learn how WebToolkit protects your data while using our free online tools.",
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
            "Learn how WebToolkit protects your data while using our free online tools.",
        images: ["https://webtoolkit-tau.vercel.app/images/privacy-image.png"],
    },

    keywords: [
        "privacy policy webtoolkit",
        "data protection",
        "cookies policy",
        "webtoolkit privacy",
    ],
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