"use client";

import { useState } from "react";

export default function JsonFormatterPage() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const formatJSON = () => {
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
            setError("");
        } catch {
            setError("Invalid JSON ❌");
            setOutput("");
        }
    };

    const minifyJSON = () => {
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed));
            setError("");
        } catch {
            setError("Invalid JSON ❌");
            setOutput("");
        }
    };

    const copyToClipboard = async () => {
        if (!output) return;
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/10">

                {/* HEADER */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
                    JSON Formatter & Validator
                </h1>

                <p className="text-center text-gray-300 text-sm sm:text-base mb-6">
                    Format, validate, and clean your JSON data instantly with this simple and free online tool.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <button
                        onClick={formatJSON}
                        className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-xl shadow-md w-full sm:w-auto cursor-pointer"
                    >
                        Format JSON
                    </button>

                    <button
                        onClick={minifyJSON}
                        className="bg-pink-600 hover:bg-pink-700 transition px-5 py-2 rounded-xl shadow-md w-full sm:w-auto cursor-pointer"
                    >
                        Minify JSON
                    </button>

                    <button
                        onClick={copyToClipboard}
                        className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-2 rounded-xl shadow-md w-full sm:w-auto cursor-pointer"
                    >
                        {copied ? "Copied ✅" : "Copy Output"}
                    </button>
                </div>

                {/* ERROR */}
                {error && (
                    <p className="text-red-400 text-center text-sm mb-4">{error}</p>
                )}

                {/* EDITORS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                    {/* INPUT */}
                    <div className="bg-black/30 rounded-2xl p-3 sm:p-4 border border-white/10">
                        <h2 className="text-sm sm:text-base mb-2 text-gray-300 font-medium">
                            Input JSON
                        </h2>

                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Paste your JSON here..."
                            className="w-full h-[260px] sm:h-[320px] md:h-[400px] bg-black/40 text-gray-200 p-3 rounded-lg outline-none border border-white/10 focus:border-indigo-500 text-sm resize-none"
                        />
                    </div>

                    {/* OUTPUT */}
                    <div className="bg-black/30 rounded-2xl p-3 sm:p-4 border border-white/10">
                        <h2 className="text-sm sm:text-base mb-2 text-gray-300 font-medium">
                            Output
                        </h2>

                        <textarea
                            value={output}
                            readOnly
                            placeholder="Formatted JSON will appear here..."
                            className="w-full h-[260px] sm:h-[320px] md:h-[400px] bg-black/40 text-emerald-400 p-3 rounded-lg outline-none border border-white/10 text-sm resize-none"
                        />
                    </div>
                </div>

                {/* SEO CONTENT */}
                <div className="text-gray-400 text-sm max-w-3xl mx-auto text-center mt-8">
                    This free JSON formatter helps you organize, validate, and clean your data quickly.
                    Whether you are working with APIs, configurations, or data files, this tool makes JSON easy to read and manage.
                </div>

                {/* FOOTER */}
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
                    Fast • Secure • Easy to Use
                </p>


            </div>
        </div>
    );
}