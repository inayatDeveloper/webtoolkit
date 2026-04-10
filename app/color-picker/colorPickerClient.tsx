"use client";

import { useRef, useState } from "react";

export default function ColorTool() {
    const [color, setColor] = useState("#4f46e5");
    const [palette, setPalette] = useState<string[]>([]);
    const [copied, setCopied] = useState("");

    const [gradient] = useState<string[]>(["#4f46e5", "#22c55e"]);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // -----------------------------
    // COPY FUNCTION
    // -----------------------------
    const copy = async (value: string, type: string) => {
        await navigator.clipboard.writeText(value);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        let message = "";

        switch (type) {
            case "hex":
                message = "HEX copied 🎨";
                break;
            case "rgb":
                message = "RGB copied 🌈";
                break;
            case "hsl":
                message = "HSL copied 🧪";
                break;
            case "gradient":
                message = "Gradient copied ✨";
                break;
            default:
                message = "Copied ✅";
        }

        setCopied(message);

        timeoutRef.current = setTimeout(() => {
            setCopied("");
        }, 1000);
    };

    // -----------------------------
    // COLOR CONVERSION
    // -----------------------------
    const hexToRgb = (hex: string) => {
        const clean = hex.replace("#", "");
        const bigint = parseInt(clean, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255,
        };
    };

    const rgbToHsl = (r: number, g: number, b: number) => {
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h = 0,
            s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }

            h *= 60;
        }

        return {
            h: Math.round(h),
            s: Math.round(s * 100),
            l: Math.round(l * 100),
        };
    };

    const getFormats = () => {
        const rgb = hexToRgb(color);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

        return {
            hex: color,
            rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        };
    };

    // -----------------------------
    // PALETTE GENERATION
    // -----------------------------
    const generatePalette = () => {
        const rgb = hexToRgb(color);

        const shift = (val: number, amount: number) =>
            Math.min(255, Math.max(0, val + amount));

        const colors = [
            color,
            `rgb(${shift(rgb.r, 40)}, ${shift(rgb.g, -20)}, ${shift(rgb.b, 20)})`,
            `rgb(${shift(rgb.r, -40)}, ${shift(rgb.g, 30)}, ${shift(rgb.b, 10)})`,
            `rgb(${shift(rgb.r, 20)}, ${shift(rgb.g, 20)}, ${shift(rgb.b, -40)})`,
            `rgb(${shift(rgb.r, -20)}, ${shift(rgb.g, -30)}, ${shift(rgb.b, 40)})`,
        ];

        setPalette(colors);
    };

    const gradientCSS = `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`;

    return (
        <div className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-10">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Color Picker & Palette Generator
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Pick colors, generate palettes, and copy HEX, RGB, or HSL values instantly.
                    </p>

                    {/* COPY MESSAGE */}
                    <div className="mt-3 inline-block bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm min-h-[28px]">
                        {copied}
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT */}
                    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-700 space-y-4">

                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full h-16 cursor-pointer rounded-xl"
                        />

                        <div className="grid grid-cols-3 gap-2">
                            {Object.entries(getFormats()).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="bg-[#0b1220] p-3 rounded-xl text-center"
                                >
                                    <div className="text-xs text-gray-400 uppercase">
                                        {key}
                                    </div>

                                    <div className="text-sm text-white break-all">
                                        {value}
                                    </div>

                                    <button
                                        onClick={() => copy(value, key)}
                                        className="mt-2 text-xs bg-blue-600 px-2 py-1 rounded-md"
                                    >
                                        Copy
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={generatePalette}
                            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-xl"
                        >
                            Generate Palette
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-5">

                        {/* PALETTE */}
                        <div className="bg-[#111827] p-5 rounded-2xl border border-gray-700">
                            <h2 className="text-white mb-3">Palette</h2>

                            <div className="grid grid-cols-5 gap-2">
                                {palette.map((c, i) => (
                                    <div
                                        key={i}
                                        onClick={() => copy(c, "hex")}
                                        className="h-20 rounded-lg cursor-pointer"
                                        style={{ background: c }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* GRADIENT */}
                        <div className="bg-[#111827] p-5 rounded-2xl border border-gray-700">
                            <h2 className="text-white mb-3">Gradient</h2>

                            <div
                                className="h-20 rounded-xl"
                                style={{ background: gradientCSS }}
                            />

                            <button
                                onClick={() => copy(gradientCSS, "gradient")}
                                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-xl"
                            >
                                Copy Gradient CSS
                            </button>
                        </div>
                    </div>
                </div>

                {/* SEO CONTENT */}
                <div className="text-gray-400 text-sm max-w-3xl mx-auto text-center mt-10">
                    This free color picker tool helps you choose perfect colors, generate matching palettes,
                    and copy values in HEX, RGB, or HSL format. Ideal for designers, developers, and anyone
                    working with colors.
                </div>


            </div>
        </div>
    );
}