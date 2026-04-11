"use client";

import { useRef, useState } from "react";

export default function ImageResizerPage() {
    const [image, setImage] = useState<string | null>(null);
    const [resized, setResized] = useState<string | null>(null);
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);
    const [error, setError] = useState("");

    const fileRef = useRef<HTMLInputElement | null>(null);

    // ---------------- FILE ----------------
    const handleFile = (file: File) => {
        if (!file.type.startsWith("image/")) {
            setError("Please upload a valid image ❌");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as string);
            setResized(null);
            setError("");
        };
        reader.readAsDataURL(file);
    };

    // ---------------- RESIZE ----------------
    const resizeImage = () => {
        if (!image) return;

        const img = new Image();
        img.src = image;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);

            const result = canvas.toDataURL("image/png");
            setResized(result);
        };
    };

    // ---------------- DOWNLOAD ----------------
    const downloadImage = () => {
        if (!resized) return;

        const link = document.createElement("a");
        link.href = resized;
        link.download = "resized-image.png";
        link.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white flex justify-center px-3 sm:px-4 py-6 sm:py-10">

            <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8">

                {/* HEADER */}
                <h1 className="text-2xl sm:text-4xl font-bold text-center">
                    Image Resizer Tool
                </h1>

                <p className="text-center text-gray-300 text-sm mt-2">
                    Resize images instantly in your browser without uploading
                </p>

                {/* UPLOAD */}
                <div
                    onClick={() => fileRef.current?.click()}
                    className="mt-6 border-2 border-dashed border-white/20 rounded-2xl p-6 text-center cursor-pointer"
                >
                    📤 Drag & drop or click to upload image

                    <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFile(file);
                        }}
                    />
                </div>

                {/* ERROR */}
                {error && (
                    <p className="text-red-400 text-center mt-3 text-sm">
                        {error}
                    </p>
                )}

                {/* CONTROLS */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

                    <input
                        inputMode="numeric"
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        placeholder="Width"
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-center w-full sm:w-40"
                    />

                    <input
                        inputMode="numeric"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        placeholder="Height"
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-center w-full sm:w-40"
                    />

                    <button
                        onClick={resizeImage}
                        disabled={!image}
                        className={`px-5 py-2 rounded-xl w-full sm:w-auto transition  cursor-pointer ${image
                            ? "bg-indigo-600 hover:bg-indigo-700"
                            : "bg-gray-600 cursor-not-allowed"
                            }`}
                    >
                        Resize Image
                    </button>

                </div>

                {/* IMAGE PREVIEW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                    {/* ORIGINAL */}
                    <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                        <h2 className="text-gray-300 mb-3 text-sm">
                            Original Image
                        </h2>

                        {image ? (
                            <img
                                src={image}
                                className="w-full max-h-[300px] object-contain rounded-lg"
                            />
                        ) : (
                            <p className="text-gray-500 text-sm text-center">
                                No image selected
                            </p>
                        )}
                    </div>

                    {/* RESIZED */}
                    <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                        <h2 className="text-emerald-400 mb-3 text-sm">
                            Resized Image
                        </h2>

                        {resized ? (
                            <>
                                <img
                                    src={resized}
                                    className="w-full max-h-[300px] object-contain rounded-lg"
                                />

                                {/* DOWNLOAD BELOW IMAGE (IMPORTANT UX RULE) */}
                                <button
                                    onClick={downloadImage}
                                    className="mt-4 bg-emerald-600 hover:bg-emerald-700 w-full py-2 rounded-xl cursor-pointer"
                                >
                                    Download Image
                                </button>
                            </>
                        ) : (
                            <p className="text-gray-500 text-sm text-center">
                                Result will appear here
                            </p>
                        )}
                    </div>
                </div>

                {/* FOOTER */}
                <p className="text-center text-gray-500 text-xs mt-8">
                    Fast • Secure • No Upload Required
                </p>

            </div>
        </div>
    );
}