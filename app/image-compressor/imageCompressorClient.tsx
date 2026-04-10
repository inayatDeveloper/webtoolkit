"use client";

import { useState } from "react";

export default function ImageCompressor() {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [compressedImage, setCompressedImage] = useState<string | null>(null);
    const [quality, setQuality] = useState(0.7);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            const result = reader.result as string;
            setOriginalImage(result);
            compressImage(result);
        };

        reader.readAsDataURL(file);
    };

    const compressImage = (imageSrc: string) => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const compressedData = canvas.toDataURL("image/jpeg", quality);
            setCompressedImage(compressedData);
        };
    };

    const handleDownload = () => {
        if (!compressedImage) return;

        const link = document.createElement("a");
        link.href = compressedImage;
        link.download = "compressed-image.jpg";
        link.click();
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-10">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* HEADER */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Image Compressor Tool
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Compress images online, reduce file size, and download optimized images instantly without noticeable quality loss.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT PANEL */}
                    <div className="space-y-6">

                        {/* STEP 1 */}
                        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 shadow-lg">
                            <h2 className="text-lg font-semibold mb-4 text-white">
                                1. Upload Image
                            </h2>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleUpload}
                                className="w-full text-sm cursor-pointer"
                            />
                        </div>

                        {/* STEP 2 */}
                        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-5 shadow-lg">
                            <h2 className="text-lg font-semibold mb-4 text-white">
                                2. Adjust Quality
                            </h2>

                            <div className="bg-[#0b1220] border border-gray-700 rounded-xl p-4 space-y-3">
                                <input
                                    type="range"
                                    min="0.1"
                                    max="1"
                                    step="0.1"
                                    value={quality}
                                    onChange={(e) => {
                                        const q = Number(e.target.value);
                                        setQuality(q);

                                        if (originalImage) {
                                            compressImage(originalImage);
                                        }
                                    }}
                                    className="w-full cursor-pointer"
                                />

                                <p className="text-sm text-gray-400">
                                    Compression Level: {(quality * 100).toFixed(0)}%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6 shadow-lg space-y-6">

                        <h2 className="text-lg font-semibold text-white text-center">
                            Preview
                        </h2>

                        {/* ORIGINAL */}
                        {originalImage && (
                            <div className="space-y-2">
                                <p className="text-sm text-gray-400">Original Image</p>
                                <img
                                    src={originalImage}
                                    alt="Original uploaded preview"
                                    className="w-full rounded-xl border border-gray-700"
                                />
                            </div>
                        )}

                        {/* COMPRESSED */}
                        {compressedImage && (
                            <div className="space-y-2">
                                <p className="text-sm text-gray-400">Compressed Image</p>
                                <img
                                    src={compressedImage}
                                    alt="Compressed image preview"
                                    className="w-full rounded-xl border border-gray-700"
                                />
                            </div>
                        )}

                        {/* DOWNLOAD */}
                        <button
                            onClick={handleDownload}
                            disabled={!compressedImage}
                            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-xl font-medium disabled:opacity-50 cursor-pointer"
                        >
                            Download Compressed Image
                        </button>
                    </div>
                </div>

                {/* SEO CONTENT */}
                <div className="text-gray-400 text-sm max-w-3xl mx-auto text-center mt-10">
                    This free image compressor helps you reduce image file size while maintaining quality.
                    Easily optimize photos for websites, social media, or sharing without losing clarity.
                </div>


            </div>
        </div>
    );
}