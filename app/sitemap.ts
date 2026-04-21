import { MetadataRoute } from "next";

// ✅ IMPORTANT: disable caching (fix 304 issue)
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://webtoolkit-tau.vercel.app";

    const tools = [
        "/qr-code",
        "/json-formatter",
        "/password-generator",
        "/base64-generator",
        "/word-counter",
        "/text-generator",
        "/age-calculator",
        "/bmi-calculator",
        "/color-picker",
        "/image-resizer",
        "/image-cropper",
        "/image-compressor",
        "/about",
        "/contact",
        "/privacy-policy"
    ];

    const now = new Date();

    const toolPages = tools.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1,
        },
        ...toolPages,
    ];
}