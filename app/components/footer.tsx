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

                        {/* LOGO (same as navbar) */}
                        <div className="flex items-center gap-3 mb-3">

                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-emerald-500 flex items-center justify-center shadow-md">

                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {/* core node system */}
                                    <circle cx="12" cy="12" r="2" />
                                    <circle cx="5" cy="5" r="1.5" />
                                    <circle cx="19" cy="5" r="1.5" />
                                    <circle cx="5" cy="19" r="1.5" />
                                    <circle cx="19" cy="19" r="1.5" />

                                    <path d="M12 12L5 5" />
                                    <path d="M12 12L19 5" />
                                    <path d="M12 12L5 19" />
                                    <path d="M12 12L19 19" />
                                </svg>

                            </div>

                            <h2 className="text-xl font-bold text-white">
                                WebToolkit
                            </h2>

                        </div>

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
                            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/" className="hover:text-white">All Tools</Link></li>
                            <li><Link href="/about" className="hover:text-white">About</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} WebToolkit — Free Online Tools for Everyday Use.
                    </p>

                    <p className="text-gray-500 text-xs">
                        Built with ❤️ for developers
                    </p>

                </div>

            </div>
        </footer>
    );
};

export { Footer };