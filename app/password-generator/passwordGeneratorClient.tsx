"use client";

import { useState } from "react";

export default function PasswordGenerator() {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const getRandomChar = (chars: string) => {
        return chars[Math.floor(Math.random() * chars.length)];
    };

    const generatePassword = () => {
        let charPool = lower;
        const requiredChars: string[] = [];

        if (includeUppercase) {
            charPool += upper;
            requiredChars.push(getRandomChar(upper));
        }
        if (includeNumbers) {
            charPool += numbers;
            requiredChars.push(getRandomChar(numbers));
        }
        if (includeSymbols) {
            charPool += symbols;
            requiredChars.push(getRandomChar(symbols));
        }

        // Always include lowercase
        requiredChars.push(getRandomChar(lower));

        const generated = requiredChars;

        for (let i = generated.length; i < length; i++) {
            generated.push(getRandomChar(charPool));
        }

        // Shuffle
        for (let i = generated.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [generated[i], generated[j]] = [generated[j], generated[i]];
        }

        setPassword(generated.join(""));
    };

    const copyToClipboard = async () => {
        if (!password) return;

        try {
            await navigator.clipboard.writeText(password);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = password;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getStrength = () => {
        let score = 0;
        if (length >= 8) score++;
        if (length >= 12) score++;
        if (includeUppercase) score++;
        if (includeNumbers) score++;
        if (includeSymbols) score++;

        if (score <= 2) return "Weak";
        if (score <= 4) return "Medium";
        return "Strong";
    };

    const strength = getStrength();

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* HEADER */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Password Generator Tool
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Create strong and secure passwords instantly for any account.
                    </p>
                </div>

                {/* CARD */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-6">

                    {/* PASSWORD DISPLAY */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex justify-between items-center">
                        <span className="text-sm break-all">
                            {password
                                ? visible
                                    ? password
                                    : "••••••••••••••••"
                                : "Click generate to create password"}
                        </span>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setVisible(!visible)}
                                className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg text-sm cursor-pointer"
                            >
                                {visible ? "Hide" : "Show"}
                            </button>

                            <button
                                onClick={copyToClipboard}
                                className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg text-sm cursor-pointer"
                            >
                                Copy
                            </button>
                        </div>
                    </div>

                    {/* COPY SUCCESS */}
                    {copied && (
                        <p className="text-green-400 text-sm">
                            Password copied successfully!
                        </p>
                    )}

                    {/* STRENGTH */}
                    {password && (
                        <div>
                            <p className="text-sm text-gray-400 mb-1">
                                Strength:{" "}
                                <span className="font-semibold text-white">
                                    {strength}
                                </span>
                            </p>
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-300 ${strength === "Weak"
                                        ? "w-1/3 bg-red-500"
                                        : strength === "Medium"
                                            ? "w-2/3 bg-yellow-500"
                                            : "w-full bg-green-500"
                                        }`}
                                />
                            </div>
                        </div>
                    )}

                    {/* LENGTH */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>Password Length</span>
                            <span>{length}</span>
                        </div>

                        <input
                            type="range"
                            min="6"
                            max="32"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full cursor-pointer"
                        />
                    </div>

                    {/* OPTIONS */}
                    <div className="grid sm:grid-cols-3 gap-4">

                        <label className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl p-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={includeUppercase}
                                onChange={() => setIncludeUppercase(!includeUppercase)}
                            />
                            <span className="text-sm">Uppercase</span>
                        </label>

                        <label className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl p-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={() => setIncludeNumbers(!includeNumbers)}
                            />
                            <span className="text-sm">Numbers</span>
                        </label>

                        <label className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl p-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={() => setIncludeSymbols(!includeSymbols)}
                            />
                            <span className="text-sm">Symbols</span>
                        </label>

                    </div>

                    {/* GENERATE */}
                    <button
                        onClick={generatePassword}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition py-2.5 rounded-xl font-medium cursor-pointer"
                    >
                        Generate Secure Password
                    </button>

                </div>
            </div>
        </div>
    );
}