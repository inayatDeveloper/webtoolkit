"use client";

import { useState } from "react";

export default function LoremIpsumGenerator() {
    const [type, setType] = useState<"paragraphs" | "words">("paragraphs");
    const [count, setCount] = useState<number>(3);
    const [text, setText] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);

    const loremText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    const generateText = () => {
        let result = "";

        if (type === "paragraphs") {
            result = Array.from({ length: count })
                .map(() => loremText)
                .join("\n\n");
        } else {
            const words = loremText.split(" ");
            result = Array.from({ length: count })
                .map(() => words[Math.floor(Math.random() * words.length)])
                .join(" ");
        }

        setText(result);
    };

    const copyToClipboard = async () => {
        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            alert("Copy failed!");
        }
    };

    const clearText = () => {
        setText("");
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-6 space-y-6">

                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">
                        Lorem Ipsum Generator Tool
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Generate placeholder text instantly for designs and content.
                    </p>
                </div>

                {/* Controls */}
                <div className="grid md:grid-cols-3 gap-4">

                    <div>
                        <label className="block text-sm mb-1 text-gray-400">Type</label>
                        <select
                            value={type}
                            onChange={(e) =>
                                setType(e.target.value as "paragraphs" | "words")
                            }
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                        >
                            <option value="paragraphs">Paragraphs</option>
                            <option value="words">Words</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-gray-400">Count</label>
                        <input
                            type="number"
                            min={1}
                            max={20}
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                        />
                    </div>

                    <div className="flex items-end">
                        <button
                            onClick={generateText}
                            className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2 cursor-pointer"
                        >
                            Generate Text
                        </button>
                    </div>
                </div>

                {/* Output */}
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 min-h-[180px] whitespace-pre-wrap text-sm">
                    {text || "Generated text will appear here..."}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <button
                        onClick={copyToClipboard}
                        className="bg-green-600 px-4 py-2 rounded-lg cursor-pointer"
                    >
                        Copy
                    </button>

                    <button
                        onClick={clearText}
                        className="bg-red-600 px-4 py-2 rounded-lg cursor-pointer"
                    >
                        Clear
                    </button>

                    {copied && (
                        <span className="text-green-400 text-sm">
                            Copied successfully!
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}