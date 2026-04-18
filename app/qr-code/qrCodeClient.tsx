"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRGenerator() {
    const [text, setText] = useState("https://example.com");
    const [color, setColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");

    const qrRef = useRef<HTMLCanvasElement | null>(null);

    const downloadQR = () => {
        const canvas = qrRef.current;
        if (!canvas) return;

        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = "qr-code.png";
        link.click();
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

                        {/* DOWNLOAD */}
                        <button
                            onClick={downloadQR}
                            className="w-full bg-blue-600 py-2.5 rounded-xl cursor-pointer"
                        >
                            Download QR Code
                        </button>

                    </div>

                    {/* RIGHT PANEL */}
                    <div className="flex justify-center items-center bg-gray-900 p-8 rounded-2xl border border-gray-800">

                        <div className="bg-white p-4 rounded-xl">
                            <QRCodeCanvas
                                value={text}
                                size={260}
                                fgColor={color}
                                bgColor={bgColor}
                                ref={qrRef}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}