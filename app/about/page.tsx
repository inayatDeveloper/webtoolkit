export const metadata = {
    title: "About | WebToolkit",
    description:
        "WebToolkit provides free, fast, and easy-to-use online tools like QR Code Generator, JSON Formatter, Image Compressor, and more.",

    openGraph: {
        title: "About | WebToolkit",
        description:
            "WebToolkit provides free, fast, and easy-to-use online tools for developers and everyday users.",
        url: "https://webtoolkit-tau.vercel.app/about",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/about-image.png",
                alt: "About WebToolkit",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About | WebToolkit",
        description:
            "WebToolkit provides free, fast, and easy-to-use online tools.",
        images: ["https://webtoolkit-tau.vercel.app/images/about-image.png"],
    },

    keywords: [
        "WebToolkit about",
        "free online developer tools",
        "all in one web tools platform",
        "online tools for developers",
        "JSON formatter online free",
        "QR code generator free",
        "base64 encoder decoder",
        "text tools online",
        "developer utilities free",
        "fast web utilities for coding",
        "online code formatter and validator",
        "SEO friendly web tools platform",
        "browser based developer tools",
        "WebToolkit platform features"
    ],
};

const tools = [
    "QR Code Generator",
    "JSON Formatter",
    "Image Compressor",
    "Password Generator",
    "Base64 Tool",
    "Word Counter",
    "Text Generator",
    "Age Calculator",
    "Color Picker",
];

export default function About() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">About WebToolkit</h1>
                    <p className="text-gray-400 text-sm mt-2">
                        Simple tools. Powerful results.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4">

                    <p>
                        WebToolkit is a collection of modern online tools designed to help
                        developers, designers, and everyday users work faster and smarter.
                    </p>

                    <h2 className="text-lg font-semibold">What We Offer</h2>
                    <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                        {tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>

                    <h2 className="text-lg font-semibold">Why Choose Us?</h2>
                    <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                        <li>Fast and responsive</li>
                        <li>Clean UI</li>
                        <li>Free forever</li>
                    </ul>

                    <h2 className="text-lg font-semibold">Our Mission</h2>
                    <p className="text-gray-400 text-sm">
                        To provide simple, reliable, and efficient tools for everyone.
                    </p>

                    <p className="text-gray-400 text-sm">
                        🚀 More powerful tools are continuously being added to improve your productivity soon.
                    </p>

                </div>
            </div>
        </div>
    );
}