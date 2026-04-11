"use client";

import { useState } from "react";

export default function BMICalculator() {
    const [age, setAge] = useState<number>(25);
    const [height, setHeight] = useState<number>(170);
    const [unit, setUnit] = useState<"cm" | "inch" | "ft">("cm");
    const [weight, setWeight] = useState<number>(65);

    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState("");
    const [copied, setCopied] = useState(false);

    // ---------------- HEIGHT CONVERSION ----------------
    const convertToCM = (value: number, unit: string) => {
        if (unit === "cm") return value;
        if (unit === "inch") return value * 2.54;
        if (unit === "ft") return value * 30.48;
        return value;
    };

    // ---------------- CALCULATE BMI ----------------
    const calculateBMI = () => {
        if (!height || !weight) return;

        const heightCM = convertToCM(height, unit);
        const h = heightCM / 100;

        const result = weight / (h * h);
        const fixed = parseFloat(result.toFixed(2));

        setBmi(fixed);

        if (result < 18.5) setCategory("Underweight");
        else if (result < 24.9) setCategory("Normal weight");
        else if (result < 29.9) setCategory("Overweight");
        else setCategory("Obese");
    };

    // ---------------- COPY RESULT ----------------
    const copyResult = async () => {
        if (bmi === null) return;

        const text = `BMI: ${bmi} | Category: ${category} | Age: ${age}`;
        await navigator.clipboard.writeText(text);

        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white flex items-center justify-center px-3 sm:px-4 py-6 sm:py-10">

            <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8">

                {/* HEADER */}
                <h1 className="text-2xl sm:text-4xl font-bold text-center">
                    BMI Calculator with Age
                </h1>

                <p className="text-center text-gray-300 text-sm mt-2">
                    Enter age, height and weight to calculate BMI instantly
                </p>

                {/* INPUT GRID */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* AGE */}
                    <div className="bg-black/30 p-4 rounded-2xl border border-white/10">
                        <label className="text-sm text-gray-300">Age</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                            className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-indigo-500 cursor-pointer"
                        />
                    </div>

                    {/* HEIGHT */}
                    <div className="bg-black/30 p-4 rounded-2xl border border-white/10">
                        <label className="text-sm text-gray-300">
                            Height ({unit})
                        </label>

                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-indigo-500 cursor-pointer"
                        />
                    </div>

                    {/* UNIT */}
                    <div className="bg-black/30 p-4 rounded-2xl border border-white/10">
                        <label className="text-sm text-gray-300">Unit</label>

                        <select
                            value={unit}
                            onChange={(e) =>
                                setUnit(e.target.value as "cm" | "inch" | "ft")
                            }
                            className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-2 outline-none cursor-pointer"
                        >
                            <option value="cm">Centimeters (cm)</option>
                            <option value="inch">Inches (inch)</option>
                            <option value="ft">Feet (ft)</option>
                        </select>
                    </div>

                    {/* WEIGHT */}
                    <div className="bg-black/30 p-4 rounded-2xl border border-white/10 sm:col-span-3">
                        <label className="text-sm text-gray-300">Weight (kg)</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-indigo-500 cursor-pointer"
                        />
                    </div>
                </div>

                {/* BUTTON */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={calculateBMI}
                        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-xl cursor-pointer transition h-[42px] sm:h-[44px] flex items-center justify-center"
                    >
                        Calculate BMI
                    </button>
                </div>

                {/* RESULT */}
                {bmi !== null && (
                    <div className="mt-8 text-center bg-black/30 border border-white/10 rounded-2xl p-6">

                        <h2 className="text-lg text-gray-300">
                            Your BMI Result
                        </h2>

                        <p className="text-4xl font-bold mt-2 text-emerald-400">
                            {bmi}
                        </p>

                        <p className="mt-3 text-lg text-white">
                            Category:{" "}
                            <span className="text-indigo-400 font-semibold">
                                {category}
                            </span>
                        </p>

                        <p className="text-xs text-gray-400 mt-2">
                            Age: {age} years
                        </p>

                        {/* COPY BUTTON */}
                        <button
                            onClick={copyResult}
                            className="mt-4 bg-emerald-600 hover:bg-emerald-700 px-5 py-2 rounded-xl cursor-pointer"
                        >
                            {copied ? "Copied ✅" : "Copy Result"}
                        </button>
                    </div>
                )}

                {/* INFO SECTION */}
                <div className="mt-10 text-center text-gray-400 text-xs sm:text-sm max-w-3xl mx-auto">
                    <p>
                        BMI is a global health indicator used to estimate body fat based on height and weight.
                    </p>
                    <p className="mt-2">
                        This tool supports multiple height units (cm, inch, feet) for international users.
                    </p>
                </div>

                {/* FOOTER */}
                <p className="text-center text-gray-500 text-xs mt-8">
                    Fast • Accurate • Multi-Unit • Free Health Tool
                </p>

            </div>
        </div>
    );
}