"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRGenerator() {
    const [text, setText] = useState("https://example.com");
    const [color, setColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");

    const [activeTab, setActiveTab] = useState<"popular" | "custom">("popular");

    const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
    const [isUploadedLogo, setIsUploadedLogo] = useState(false);

    const qrRef = useRef<HTMLCanvasElement | null>(null);

    const popularLogos = [
        "/logo1.png",
        "/logo2.png",
        "/logo3.png",
        "/logo4.png",
    ];

    // Upload logo
    const handleCustomLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setSelectedLogo(url);
        setIsUploadedLogo(true);
    };

    // Select popular logo
    const selectPopularLogo = (logo: string) => {
        setSelectedLogo(logo);
        setIsUploadedLogo(false);
    };

    // Remove logo
    const removeLogo = () => {
        setSelectedLogo(null);
        setIsUploadedLogo(false);
    };

    const downloadQR = () => {
        const canvas = qrRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const exportQR = () => {
            const url = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = url;
            link.download = "qr-code.png";
            link.click();
        };

        if (selectedLogo) {
            const image = new Image();
            image.crossOrigin = "anonymous";
            image.src = selectedLogo;

            image.onload = () => {
                const size = canvas.width * 0.22;

                ctx.drawImage(
                    image,
                    canvas.width / 2 - size / 2,
                    canvas.height / 2 - size / 2,
                    size,
                    size
                );

                exportQR();
            };
        } else {
            exportQR();
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        QR Code Generator
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">
                        Create and customize QR codes instantly
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT PANEL */}
                    <div className="space-y-6">

                        {/* INPUT */}
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
                            <h2 className="text-lg font-semibold mb-4">
                                Enter Content
                            </h2>

                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full p-3 bg-gray-800 rounded-xl border border-gray-700"
                                rows={3}
                            />
                        </div>

                        {/* COLORS */}
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">QR Color</p>
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-full h-10"
                                />
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-1">Background</p>
                                <input
                                    type="color"
                                    value={bgColor}
                                    onChange={(e) => setBgColor(e.target.value)}
                                    className="w-full h-10"
                                />
                            </div>
                        </div>

                        {/* LOGO SECTION */}
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">

                            {/* TABS */}
                            <div className="flex gap-2 mb-4">
                                <button
                                    onClick={() => setActiveTab("popular")}
                                    className={`px-3 py-1 rounded text-sm ${activeTab === "popular"
                                        ? "bg-blue-600"
                                        : "bg-gray-700"
                                        }`}
                                >
                                    Popular
                                </button>

                                <button
                                    onClick={() => setActiveTab("custom")}
                                    className={`px-3 py-1 rounded text-sm ${activeTab === "custom"
                                        ? "bg-blue-600"
                                        : "bg-gray-700"
                                        }`}
                                >
                                    Upload
                                </button>
                            </div>

                            {/* POPULAR LOGOS */}
                            {activeTab === "popular" && (
                                <div className="grid grid-cols-4 gap-3">

                                    {popularLogos.map((logo, i) => (
                                        <div key={i} className="relative group">

                                            <img
                                                src={logo}
                                                onClick={() => selectPopularLogo(logo)}
                                                className={`cursor-pointer border rounded p-2 ${selectedLogo === logo
                                                    ? "border-blue-500"
                                                    : "border-gray-700"
                                                    }`}
                                            />

                                            {/* ❌ SHOW ONLY ON IMAGE HOVER */}
                                            <button
                                                onClick={removeLogo}
                                                className="
                                                    absolute -top-2 -right-2
                                                    bg-red-600 text-white text-xs
                                                    w-5 h-5 rounded-full
                                                    opacity-0 group-hover:opacity-100
                                                    transition
                                                "
                                            >
                                                ✕
                                            </button>

                                        </div>
                                    ))}

                                </div>
                            )}

                            {/* UPLOAD LOGO */}
                            {activeTab === "custom" && (
                                <div className="mt-2">

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleCustomLogoUpload}
                                        className="text-sm"
                                    />

                                    {/* UPLOADED PREVIEW */}
                                    {selectedLogo && isUploadedLogo && (
                                        <div className="relative inline-block mt-4 group">

                                            <img
                                                src={selectedLogo}
                                                className="w-14 h-14 rounded border"
                                            />

                                            {/* ❌ ONLY ON HOVER */}
                                            <button
                                                onClick={removeLogo}
                                                className="
                                                    absolute -top-2 -right-2
                                                    bg-red-600 text-white text-xs
                                                    w-5 h-5 rounded-full
                                                    opacity-0 group-hover:opacity-100
                                                    transition
                                                "
                                            >
                                                ✕
                                            </button>

                                        </div>
                                    )}

                                </div>
                            )}

                        </div>

                        {/* DOWNLOAD */}
                        <button
                            onClick={downloadQR}
                            className="w-full bg-blue-600 py-2.5 rounded-xl"
                        >
                            Download QR Code
                        </button>

                    </div>

                    {/* RIGHT PANEL */}
                    <div className="flex justify-center items-center bg-gray-900 p-8 rounded-2xl border border-gray-800">

                        <div className="relative bg-white p-4 rounded-xl">

                            <QRCodeCanvas
                                value={text}
                                size={260}
                                fgColor={color}
                                bgColor={bgColor}
                                ref={qrRef}
                            />

                            {/* LOGO */}
                            {selectedLogo && (
                                <img
                                    src={selectedLogo}
                                    className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2"
                                />
                            )}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}