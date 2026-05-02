import BMICalculator from "./bmiCalculatorClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BMI Calculator Online (Free) | Check Body Mass Index by Age, Height & Weight",
    description:
        "Use this free BMI calculator to check your Body Mass Index using age, height, and weight. Get instant BMI results with health classification (underweight, normal, overweight).",

    keywords: [
        "bmi calculator online free",
        "body mass index calculator with age height weight",
        "check bmi instantly online",
        "bmi calculator for male and female",
        "healthy bmi range calculator",
        "bmi formula calculator online",
        "weight and height bmi calculator",
        "bmi classification underweight normal overweight",
        "bmi calculator kg and cm",
        "WebToolkit bmi calculator",
        "free online health calculator tool"
    ],

    authors: [{ name: "Inayat Ullah" }],
    creator: "WebToolkit",
    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "Free BMI Calculator | Check Your Body Mass Index Instantly",
        description:
            "Calculate your BMI using height, weight, and age. Get instant results with accurate health classification.",
        url: "https://webtoolkit-tau.vercel.app/bmi-calculator",
        siteName: "WebToolkit",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/bmi-calculator-tool.png",
                alt: "BMI Calculator Online Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "BMI Calculator Online (Free)",
        description:
            "Check your BMI instantly using height, weight, and age.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/bmi-calculator-tool.png",
        ],
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "BMI Calculator with Age",
                        url: "https://webtoolkit-tau.vercel.app/bmi-calculator",
                        description:
                            "Free BMI calculator with age, height, and weight. Instantly calculate Body Mass Index and check your health status online.",
                        applicationCategory: "HealthApplication",
                        operatingSystem: "All",
                        browserRequirements: "Requires JavaScript",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "USD",
                        },
                        featureList: [
                            "Calculate BMI with age, height, and weight",
                            "Instant health status result",
                            "Underweight, normal, overweight classification",
                            "Free online health calculator",
                            "No signup required",
                        ],
                    }),
                }}
            />
            <BMICalculator />
        </>
    );
}