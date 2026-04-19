import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://webtoolkit-tau.vercel.app";

    const tools = [
        "/qr-code",
        "/json-formatter",
        "/password-generator",
        "/base64-generator",
        "/word-counter",
        "/text-Generator",
        "/age-calculator",
        "/bmi-calculator",
        "/color-picker",
        "/image-resizer",
        "/image-cropper",
        "/image-compressor",
    ];

    const toolPages = tools.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...toolPages,
    ];
}