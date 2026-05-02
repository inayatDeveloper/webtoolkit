export const metadata = {
    title: "Contact WebToolkit | Support, Feedback & Business Inquiries",
    description:
        "Contact WebToolkit for support, feedback, bug reports, or business inquiries. Get quick assistance for all our free online tools.",

    keywords: [
        "contact webtoolkit support",
        "webtoolkit help and support",
        "contact developer tools website",
        "report issue webtoolkit",
        "webtoolkit business inquiry",
        "contact online tools platform",
        "get support webtoolkit",
        "webtoolkit feedback contact"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Contact WebToolkit | Get Support & Help",
        description:
            "Reach out to WebToolkit for support, feedback, or collaboration opportunities.",
        url: "https://webtoolkit-tau.vercel.app/contact",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/contact-page.png",
                alt: "Contact WebToolkit Support Page",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact WebToolkit",
        description:
            "Need help or want to collaborate? Contact WebToolkit now.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/contact-page.png"
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/contact",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="text-gray-400 text-sm mt-2">
                        We would love to hear from you
                    </p>
                </div>

                {/* CONTENT */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4">

                    <h2 className="text-lg font-semibold">Email</h2>
                    <p className="text-gray-400 text-sm">
                        InayatDeveloper@gmail.com
                    </p>

                    <h2 className="text-lg font-semibold">Support</h2>
                    <p className="text-gray-400 text-sm">
                        Facing issues? Contact us and we’ll respond as soon as possible.
                    </p>

                    <h2 className="text-lg font-semibold">Business</h2>
                    <p className="text-gray-400 text-sm">
                        For partnerships or collaborations, feel free to reach out.
                    </p>

                </div>
            </div>
        </div>
    );
}