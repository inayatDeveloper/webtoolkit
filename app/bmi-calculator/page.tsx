import BMICalculator from "./bmiCalculatorClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BMI Calculator with Age – Check Your Body Mass Index Instantly",
    description:
        "Free BMI calculator with age, height, and weight. Instantly check your Body Mass Index and understand your health status.",
    keywords: [
        "BMI calculator",
        "BMI with age",
        "body mass index calculator",
        "health tool online",
        "weight calculator",
    ],

    metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

    openGraph: {
        title: "BMI Calculator with Age",
        description:
            "Calculate BMI using age, height, and weight instantly with this free online health tool.",
        url: "https://webtoolkit-tau.vercel.app/bmi-calculator",
        siteName: "webtoolkit-tau",
        type: "website",
        images: [
            {
                url: "https://webtoolkit-tau.vercel.app/images/BMI-calcultor-image.png",
                alt: "BMI Calculator Tool",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "BMI Calculator with Age",
        description:
            "Check your BMI instantly using age, height, and weight.",
        images: [
            "https://webtoolkit-tau.vercel.app/images/BMI-calcultor-image.png",
        ],
    },

    robots: {
        index: true,
        follow: true,
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