import type { Metadata } from "next";
import ColorTool from "./colorPickerClient";

export const metadata: Metadata = {
    title: "Free Color Picker & Palette Generator Online",
    description:
        "Pick colors, generate palettes, and copy HEX, RGB, and HSL values instantly. Free online color picker tool for designers, creators, and everyday users.",
    keywords: [
        "color picker",
        "palette generator",
        "hex to rgb",
        "rgb to hsl",
        "gradient generator",
        "color tool online",
    ],

    openGraph: {
        title: "Color Picker & Palette Generator",
        description:
            "Create beautiful colors, palettes, and gradients instantly with this free online tool.",
        url: "https://yourdomain.com/color-picker",
        siteName: "Your Tools",
        type: "website",
        images: [
            {
                url: "https://yourdomain.com/og-color-tool.png",
                width: 1200,
                height: 630,
                alt: "Color Picker Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Color Picker & Palette Generator",
        description:
            "Pick colors, create palettes, and copy formats instantly.",
        images: ["https://yourdomain.com/og-color-tool.png"],
    },

    alternates: {
        canonical: "https://yourdomain.com/color-picker",
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
                url: "https://yourdomain.com/color-picker",
                description:
                    "Free online color picker to generate palettes, gradients, and copy HEX, RGB, and HSL formats instantly.",
                applicationCategory: "Utility",
                operatingSystem: "All",
            }),
        }}
    /> </>;
}