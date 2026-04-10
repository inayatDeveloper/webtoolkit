"use client";

import { useState } from "react";

export default function Base64ToolClient() {
    const [mode, setMode] = useState<"encode" | "decode">("encode");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState("");

    const handleProcess = () => {
        try {
            setError("");

            if (mode === "encode") {
                setOutput(btoa(input));
            } else {
                setOutput(atob(input));
            }
        } catch {
            setError("Invalid Base64 input.");
            setOutput("");
        }
    };

    const handleCopy = async () => {
        if (!output) return;
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setError("");
    };

    return (
        <main className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-10">

            {/* SEO HEADER */}
            <header className="text-center space-y-3 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    🔐 Base64 Encoder & Decoder
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Easily encode text to Base64 or decode Base64 strings instantly with this fast and free online tool.
                </p>
            </header>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                {/* LEFT PANEL */}
                <section className="space-y-6">

                    {/* INPUT */}
                    <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            Enter Your Data
                        </h2>

                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={
                                mode === "encode"
                                    ? "Enter text to encode..."
                                    : "Enter Base64 string to decode..."
                            }
                            className="w-full p-3 rounded-xl bg-[#0b1220] border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                            rows={4}
                        />
                    </div>

                    {/* MODE */}
                    <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            Choose Mode
                        </h2>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setMode("encode")}
                                className={`px-4 py-2 rounded-lg border transition cursor-pointer ${mode === "encode"
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : "border-gray-600 text-gray-300"
                                    }`}
                            >
                                Encode
                            </button>

                            <button
                                onClick={() => setMode("decode")}
                                className={`px-4 py-2 rounded-lg border transition cursor-pointer ${mode === "decode"
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : "border-gray-600 text-gray-300"
                                    }`}
                            >
                                Decode
                            </button>
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 shadow-lg space-y-4">
                        <h2 className="text-lg font-semibold text-white">
                            Actions
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleProcess}
                                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-xl font-medium cursor-pointer"
                            >
                                {mode === "encode" ? "Encode" : "Decode"}
                            </button>

                            <button
                                onClick={handleClear}
                                className="w-full bg-gray-700 hover:bg-gray-600 transition text-white py-2.5 rounded-xl font-medium cursor-pointer"
                            >
                                Clear
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                        )}
                    </div>

                </section>

                {/* RIGHT PANEL */}
                <section className="bg-[#111827] border border-gray-700 rounded-2xl p-8 shadow-lg">

                    <h2 className="text-gray-400 mb-4 text-sm text-center">
                        Output Result
                    </h2>

                    <div className="bg-[#0b1220] border border-gray-700 rounded-xl p-4">
                        <textarea
                            value={output}
                            readOnly
                            placeholder="Result will appear here..."
                            className="w-full h-40 p-3 rounded-lg bg-[#020617] border border-gray-700 text-white text-sm"
                        />
                    </div>

                    <button
                        onClick={handleCopy}
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-xl font-medium cursor-pointer"
                    >
                        {copied ? "Copied!" : "Copy Output"}
                    </button>

                    <p className="text-xs text-gray-500 mt-3 text-center">
                        Click to copy result instantly
                    </p>
                </section>
            </div>
        </main>
    );
}