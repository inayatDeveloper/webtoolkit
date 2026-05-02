import type { Metadata } from "next";
import ColorTool from "./colorPickerClient";

export const metadata: Metadata = {
    title: "Color Picker & Palette Generator Online (Free) | HEX, RGB, HSL Converter",
    description:
        "Free online color picker tool to select colors, generate palettes, and convert HEX, RGB, and HSL instantly. Perfect for designers and developers.",

    keywords: [
        "color picker online free",
        "hex color picker tool",
        "color palette generator online",
        "hex to rgb converter",
        "rgb to hsl converter",
        "css color picker tool",
        "color code generator for web design",
        "gradient color generator online",
        "pick color from screen online",
        "WebToolkit color picker",
        "design tools color palette generator"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free Color Picker & Palette Generator",
        description:
            "Pick colors, generate palettes, and convert HEX, RGB, and HSL values instantly with this powerful free tool.",
        url: "https://webtoolkit-tau.vercel.app/color-picker",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/color-picker-tool.png",
                alt: "Color Picker and Palette Generator Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Color Picker & Palette Generator Online",
        description:
            "Generate palettes, pick colors, and convert HEX, RGB, HSL instantly.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/color-picker-tool.png"
        ],
    },

    alternates: {
        canonical: "https://webtoolkit-tau.vercel.app/color-picker",
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
    return <> <ColorTool /><script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Color Picker & Palette Generator",
                url: "https://webtoolkit-tau.vercel.app/color-picker",
                description:
                    "Free online color picker to generate palettes, gradients, and copy HEX, RGB, and HSL formats instantly.",
                applicationCategory: "Utility",
                operatingSystem: "All",
            }),
        }}
    /> </>;
}