/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AgeCalculatorClient() {
    const [dob, setDob] = useState<Date | null>(null);

    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);
    const [open, setOpen] = useState(false);

    const normalizeDate = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    const calculateAge = () => {
        if (!dob) {
            setError("Please select your date of birth.");
            return;
        }

        const today = normalizeDate(new Date());
        const birthDate = normalizeDate(dob);

        if (birthDate > today) {
            setError("Date of birth cannot be in the future.");
            return;
        }

        setError("");

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const prevMonthDays = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
            days += prevMonthDays;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const totalDays = Math.floor(
            (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        // Next birthday calculation
        let nextBirthday = new Date(
            today.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
        );

        nextBirthday = normalizeDate(nextBirthday);

        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const diffTime = nextBirthday.getTime() - today.getTime();

        const totalDaysToBirthday = Math.round(
            diffTime / (1000 * 60 * 60 * 24)
        );

        let tempDate = new Date(today);
        let monthsToBirthday = 0;

        while (true) {
            const nextMonth = new Date(
                tempDate.getFullYear(),
                tempDate.getMonth() + 1,
                tempDate.getDate()
            );

            if (nextMonth <= nextBirthday) {
                monthsToBirthday++;
                tempDate = nextMonth;
            } else {
                break;
            }
        }

        const remainingDaysAfterMonths = Math.round(
            (nextBirthday.getTime() - tempDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        setResult({
            years,
            months,
            days,
            totalDays,
            daysToBirthday: totalDaysToBirthday,
            monthsToBirthday,
            remainingDaysAfterMonths,
        });
    };

    const handleCopy = async () => {
        if (!result) return;

        const text = `Age: ${result.years}Y ${result.months}M ${result.days}D | Total Days: ${result.totalDays} | Next Birthday: ${result.monthsToBirthday}M ${result.remainingDaysAfterMonths}D`;

        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleClear = () => {
        setDob(null);
        setResult(null);
        setError("");
    };

    return (
        <main className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-10">

            {/* HERO (SEO FRIENDLY STRUCTURE) */}
            <header className="text-center space-y-3 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    ⏱️ Age Calculator Tool
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Find your exact age in years, months, days, total days lived, and next birthday instantly.
                </p>
            </header>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                {/* LEFT PANEL */}
                <section className="space-y-6">

                    {/* DATE PICKER */}
                    <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            Select Date of Birth
                        </h2>

                        <div className="relative cursor-pointer" onClick={() => setOpen(true)}>
                            <DatePicker
                                selected={dob}
                                onChange={(date: any) => {
                                    setDob(date);
                                    setOpen(false);
                                }}
                                open={open}
                                onClickOutside={() => setOpen(false)}
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                placeholderText="Select your birth date"
                                className="w-full p-3 rounded-xl bg-[#0b1220] border border-gray-700 text-white cursor-pointer"
                                calendarClassName="bg-[#111827] text-white border border-gray-700 rounded-xl shadow-xl p-2"
                            />

                            <span className="absolute right-3 top-1/2 -translate-y-1/2">
                                📅
                            </span>
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 shadow-lg space-y-4">

                        <h2 className="text-lg font-semibold text-white">
                            Actions
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={calculateAge}
                                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-xl font-medium"
                            >
                                Calculate Age
                            </button>

                            <button
                                onClick={handleClear}
                                className="w-full bg-gray-700 hover:bg-gray-600 transition text-white py-2.5 rounded-xl font-medium"
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
                        Result Preview
                    </h2>

                    <div className="bg-[#0b1220] border border-gray-700 rounded-xl p-4 space-y-3">

                        {result ? (
                            <>
                                <div className="flex justify-between">
                                    <span>Age:</span>
                                    <span className="font-bold text-white">
                                        {result.years} Years {result.months} Months {result.days} Days
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Total Days:</span>
                                    <span className="font-bold text-white">
                                        {result.totalDays}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Next Birthday:</span>
                                    <span className="font-bold text-white">
                                        🎂 {result.monthsToBirthday} months {result.remainingDaysAfterMonths} days
                                    </span>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500 text-sm text-center">
                                Your result will appear here...
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleCopy}
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-xl font-medium"
                    >
                        {copied ? "Copied!" : "Copy Result"}
                    </button>
                </section>
            </div>
        </main>
    );
}