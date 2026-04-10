"use client";

import { useState, useMemo } from "react";

export default function WordCounterClient() {
    const [text, setText] = useState("");

    const stats = useMemo(() => {
        const trimmedText = text.trim();

        const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
        const characters = text.length;
        const charactersNoSpaces = text.replace(/\s/g, "").length;

        const sentences = trimmedText
            ? trimmedText.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
            : 0;

        const paragraphs = trimmedText
            ? trimmedText.split(/\n+/).filter((p) => p.trim().length > 0).length
            : 0;

        const readingTime = Math.ceil(words / 200);

        return {
            words,
            characters,
            charactersNoSpaces,
            sentences,
            paragraphs,
            readingTime,
        };
    }, [text]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            alert("Copied to clipboard!");
        } catch {
            alert("Copy failed!");
        }
    };

    const handleClear = () => {
        setText("");
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-10">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* HEADER */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Word Counter Tool
                    </h1>

                    {/* SEO-friendly paragraph */}
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Use this free Word Counter Tool to analyze text instantly.
                        Count words, characters, sentences, paragraphs, and reading time
                        for better content optimization and writing productivity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT PANEL */}
                    <div className="space-y-6">

                        {/* INPUT */}
                        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 space-y-4">
                            <h2 className="text-lg font-semibold text-white">
                                Enter Your Text
                            </h2>

                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Start typing or paste your text here..."
                                className="w-full h-48 p-4 rounded-xl bg-[#0b1220] border border-gray-700 text-white resize-none"
                            />
                        </div>

                        {/* ACTIONS */}
                        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 space-y-4">
                            <h2 className="text-lg font-semibold text-white">
                                Actions
                            </h2>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleCopy}
                                    className="bg-blue-600 px-4 py-2 rounded-xl text-white cursor-pointer"
                                >
                                    Copy
                                </button>

                                <button
                                    onClick={handleClear}
                                    className="bg-gray-700 px-4 py-2 rounded-xl text-white cursor-pointer"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT PANEL */}
                    <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6 space-y-6">

                        <h2 className="text-lg font-semibold text-white text-center">
                            Statistics
                        </h2>

                        <div className="grid grid-cols-2 gap-4">

                            <StatCard label="Words" value={stats.words} />
                            <StatCard label="Characters" value={stats.characters} />
                            <StatCard label="No Spaces" value={stats.charactersNoSpaces} />
                            <StatCard label="Sentences" value={stats.sentences} />
                            <StatCard label="Paragraphs" value={stats.paragraphs} />
                            <StatCard label="Reading Time" value={`${stats.readingTime} min`} />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

/* STAT CARD */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ label, value }: { label: string; value: any }) {
    return (
        <div className="bg-[#0b1220] border border-gray-700 rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">{label}</p>
            <p className="text-xl font-semibold text-white mt-1">{value}</p>
        </div>
    );
}