import type { Metadata } from "next";
import ToolCard from "./components/ToolCard";

/* ================= SEO METADATA (GENERIC AUDIENCE) ================= */
export const metadata: Metadata = {
  title: "Free Online Tools Collection | Fast, Simple & Useful Everyday Tools",
  description:
    "Discover free online tools for everyday use like QR code generator, image compressor, password generator, word counter, color picker, and more. Fast, simple, and easy for everyone.",
  keywords: [
    "free online tools",
    "QR code generator",
    "image compressor",
    "password generator",
    "word counter",
    "color picker",
    "online utilities",
    "free tools website",
    "convert tools online",
    "easy online tools",
  ],
  authors: [{ name: "Your Website Name" }],
  creator: "Your Website Name",
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Free Online Tools Collection",
    description:
      "A simple and fast collection of free online tools for everyday tasks like QR codes, images, text, and more.",
    url: "https://yourdomain.com",
    siteName: "Free Tools Hub",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Tools Collection",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Online Tools Collection",
    description:
      "Use free online tools for everyday tasks — fast, simple, and easy.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= TOOLS DATA (GENERIC + FUTURE READY) ================= */
const tools = [
  {
    title: "QR Code Generator",
    subtitle: "Create QR codes instantly for links, text, and more",
    link: "/qr-code",
  },
  {
    title: "JSON Formatter",
    subtitle: "Format and validate JSON easily",
    link: "/json-formatter",
  },
  {
    title: "Image Compressor",
    subtitle: "Reduce image size without losing quality",
    link: "/image-compressor",
  },
  {
    title: "Password Generator",
    subtitle: "Generate strong and secure passwords",
    link: "/password-generator",
  },
  {
    title: "Base64 Tool",
    subtitle: "Encode and decode text easily",
    link: "/base64-generator",
  },
  {
    title: "Word Counter",
    subtitle: "Count words and characters instantly",
    link: "/word-counter",
  },
  {
    title: "Text Generator",
    subtitle: "Generate placeholder text for any purpose",
    link: "/text-Generator",
  },
  {
    title: "Age Calculator",
    subtitle: "Calculate age in seconds, days, months, and years",
    link: "/age-calculator",
  },
  {
    title: "Color Picker",
    subtitle: "Pick and explore colors with ease",
    link: "/color-picker",
  },
];

/* ================= PAGE ================= */
export default function Home() {
  return (
    <main className="px-4 py-10 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION (SEO IMPORTANT) */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            🚀 Free Online Tools for Everyday Use
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            A growing collection of simple, fast, and free online tools to help you with everyday tasks — from generating QR codes to editing text and images.
          </p>
        </header>

        {/* TOOLS GRID */}
        <section
          aria-label="Online tools collection"
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
      </div>

      {/* ================= STRUCTURED DATA (GOOGLE SEO BOOST) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Free Online Tools Hub",
            url: "https://yourdomain.com",
            description:
              "A collection of free online tools for everyday tasks like QR generation, image compression, text tools and more.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://yourdomain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}