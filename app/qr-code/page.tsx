import QRGenerator from "./qrCodeClient";

export const metadata = {
    title: "QR Code Generator - Create & Download QR Codes Instantly",
    description:
        "Generate, customize, and download QR codes online. Add colors, logos, and create QR codes for URLs or text instantly.",
    keywords: [
        "qr code generator",
        "create qr code",
        "custom qr code",
        "qr code with logo",
        "free qr code tool",
    ],
    openGraph: {
        title: "QR Code Generator Tool",
        description:
            "Create and customize QR codes with colors and logos instantly.",
        url: "https://webtoolkit-tau.vercel.app/qr-code",
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