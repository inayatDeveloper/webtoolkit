import type { Metadata } from "next";
import QRGenerator from "./qrCodeClient";

export const metadata: Metadata = {
    title: "QR Code Generator Online (Free) | Create Custom QR Codes with Logo",
    description:
        "Free online QR code generator to create custom QR codes with colors, logos, and styles. Generate QR codes for URLs, text, WiFi, and more instantly.",

    keywords: [
        "qr code generator online free",
        "create qr code with logo",
        "custom qr code generator",
        "qr code for website url",
        "wifi qr code generator",
        "colored qr code generator",
        "qr code maker online",
        "download qr code png",
        "dynamic qr code generator",
        "WebToolkit qr generator",
        "free qr code creator tool"
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free QR Code Generator | Create Custom QR Codes Instantly",
        description:
            "Generate QR codes for URLs, text, WiFi, and more. Customize colors, add logos, and download instantly.",
        url: "https://webtoolkit-tau.vercel.app/qr-code",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/qr-image.png",
                alt: "QR Code Generator Online Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "QR Code Generator Online (Free)",
        description:
            "Create custom QR codes with logos, colors, and download instantly.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/qr-image.png",
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/qr-code",
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
                        name: "QR Code Generator",
                        url: "https://webtoolkit-tau.vercel.app/qr-code",
                        description:
                            "Free online QR code generator to create and customize QR codes with logos and colors.",
                        applicationCategory: "Utility",
                        operatingSystem: "All",
                    }),
                }}
            />

            <QRGenerator />
        </>
    );
}