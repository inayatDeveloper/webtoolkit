"use client";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-white/10 mt-16">
            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-xl font-bold mb-3">🚀 ToolKit</h2>
                        <p className="text-gray-400 text-sm">
                            Free, fast and developer-friendly online tools to simplify your daily workflow.
                        </p>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-white">
                            Tools
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/tools/qr-code" className="hover:text-white">QR Generator</Link></li>
                            <li><Link href="/tools/json-formatter" className="hover:text-white">JSON Formatter</Link></li>
                            <li><Link href="/tools/image-compressor" className="hover:text-white">Image Compressor</Link></li>
                            <li><Link href="/tools/password-generator" className="hover:text-white">Password Generator</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-white">
                            Categories
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer">Developer Tools</li>
                            <li className="hover:text-white cursor-pointer">Image Tools</li>
                            <li className="hover:text-white cursor-pointer">Text Tools</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-white">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/privacy-policy" className="hover:text-white">privacy policy</Link></li>
                            <li><Link href="/" className="hover:text-white">All Tools</Link></li>
                            <li><Link href="/about" className="hover:text-white">About</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} WebToolKit — Free Online Tools for Everyday Use.
                    </p>

                    <p className="text-gray-500 text-xs">
                        Built with ❤️ for developers
                    </p>

                </div>

            </div>
        </footer>
    );
}

export { Footer }