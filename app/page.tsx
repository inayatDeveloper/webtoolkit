import type { Metadata } from "next";
import ToolCard from "./components/ToolCard";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Free Online Tools Collection | QR, JSON, Image & Developer Tools",
  description:
    "Explore free online tools for developers and everyday use including QR code generator, JSON formatter, password generator, image tools, word counter, and more. Fast, simple, and free forever.",

  keywords: [
    "free online tools",
    "developer tools online",
    "qr code generator free",
    "json formatter online",
    "password generator secure",
    "image tools online",
    "word counter tool",
    "text utilities online",
    "free web tools collection",
    "browser based tools",
    "WebToolkit tools",
    "online productivity tools free",
    "fast online utilities",
  ],

  metadataBase: new URL("https://webtoolkit-tau.vercel.app"),

  openGraph: {
    title: "Free Online Tools Collection | WebToolkit",
    description:
      "A powerful collection of free online tools for developers, designers, and everyday users — all in one place.",
    url: "https://webtoolkit-tau.vercel.app",
    siteName: "WebToolkit",
    type: "website",
    images: [
      {
        url: "https://webtoolkit-tau.vercel.app/images/home-page-image.png",
        width: 1200,
        height: 630,
        alt: "WebToolkit Free Online Tools",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Online Tools Collection | WebToolkit",
    description:
      "Free developer and utility tools including QR, JSON, image tools, and more.",
    images: ["https://webtoolkit-tau.vercel.app/images/home-page-image.png"],
  },

  alternates: {
    canonical: "https://webtoolkit-tau.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= TOOLS DATA ================= */
const tools = [
  { title: "QR Code Generator", subtitle: "Create QR codes instantly for links, text, and more", link: "/qr-code" },
  { title: "JSON Formatter", subtitle: "Format and validate JSON easily", link: "/json-formatter" },
  { title: "Password Generator", subtitle: "Generate strong and secure passwords", link: "/password-generator" },
  { title: "Base64 Tool", subtitle: "Encode and decode text easily", link: "/base64-generator" },
  { title: "Word Counter", subtitle: "Count words and characters instantly", link: "/word-counter" },
  { title: "Text Generator", subtitle: "Generate placeholder text for any purpose", link: "/text-creator" },
  { title: "Age Calculator", subtitle: "Calculate age in seconds, days, months, and years", link: "/age-calculator" },
  { title: "BMI Calculator", subtitle: "Check Your Body Mass Index Instantly", link: "/bmi-calculator" },
  { title: "Color Picker", subtitle: "Pick and explore colors with ease", link: "/color-picker" },
  { title: "Image Resizer", subtitle: "Resize images instantly in your browser.", link: "/image-resizer" },
  { title: "Image Cropper", subtitle: "Crop photos online fast and free.", link: "/image-cropper" },
  { title: "Image Compressor", subtitle: "Reduce image size without losing quality", link: "/image-compressor" },
];

/* ================= PAGE ================= */
export default function Home() {
  return (
    <main className="px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* ================= HERO ================= */}
        <header className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            🚀 Free Online Tools for Developers & Everyday Use
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-4">
            A growing collection of simple, fast, and free online tools — from QR generators to image editors and text utilities.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
            <span>✔ No signup</span>
            <span>✔ 100% free</span>
            <span>✔ Instant use</span>
          </div>
        </header>

        {/* ================= TOOLS GRID ================= */}
        <section
          aria-label="Online tools collection"
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12"
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-[1.02]"
            >
              <ToolCard
                title={tool.title}
                subtitle={tool.subtitle}
                link={tool.link}
              />
            </div>
          ))}
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="max-w-4xl mx-auto mt-10 sm:mt-16 text-gray-200 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8 text-center">

            <div>
              <h3 className="font-semibold text-lg">
                What is WebToolkit?
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                WebToolkit is a free online tools platform for developers, designers, and everyday users.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Are these tools free to use?
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Yes, all tools are completely free and work directly in your browser without signup.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do I need to install anything?
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                No installation is required. Everything runs instantly online.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is my data safe?
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Yes, most tools run in your browser and do not store your data.
              </p>
            </div>

          </div>
        </section>

        {/* ================= STRUCTURED DATA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is WebToolkit?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "WebToolkit is a free online tools platform for developers, designers, and everyday users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are these tools free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all tools are completely free and work directly in your browser.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to install anything?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No installation is required. Everything runs instantly online.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, most tools run in your browser and do not store your data.",
                  },
                },
              ],
            }),
          }}
        />

      </div>
    </main>
  );
}