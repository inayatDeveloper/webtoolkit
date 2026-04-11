"use client";

import { useRef, useState } from "react";

export default function ImageCropper() {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);

    const [image, setImage] = useState<string | null>(null);
    const [cropped, setCropped] = useState<string | null>(null);

    const [start, setStart] = useState({ x: 0, y: 0 });
    const [end, setEnd] = useState({ x: 0, y: 0 });

    const [dragging, setDragging] = useState(false);

    // ---------------- UPLOAD ----------------
    const handleFile = (file: File) => {
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result as string);
            setCropped(null);
        };

        reader.readAsDataURL(file);
    };

    // ---------------- MOUSE DOWN ----------------
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMouseDown = (e: any) => {
        if (!imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setStart({ x, y });
        setEnd({ x, y });
        setDragging(true);
    };

    // ---------------- MOUSE MOVE ----------------
    const onMouseMove = (e: any) => {
        if (!dragging || !imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();

        setEnd({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // ---------------- AUTO CROP ON RELEASE ----------------
    const onMouseUp = () => {
        setDragging(false);
        autoCrop();
    };

    // ---------------- AUTO CROP FUNCTION ----------------
    const autoCrop = () => {
        if (!image || !imgRef.current) return;

        const img = imgRef.current;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const scaleX = img.naturalWidth / img.width;
        const scaleY = img.naturalHeight / img.height;

        const x = Math.min(start.x, end.x) * scaleX;
        const y = Math.min(start.y, end.y) * scaleY;
        const width = Math.abs(end.x - start.x) * scaleX;
        const height = Math.abs(end.y - start.y) * scaleY;

        // avoid invalid crop
        if (width < 5 || height < 5) return;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(
            img,
            x,
            y,
            width,
            height,
            0,
            0,
            width,
            height
        );

        setCropped(canvas.toDataURL("image/png"));
    };

    // ---------------- DOWNLOAD ----------------
    const download = () => {
        if (!cropped) return;

        const a = document.createElement("a");
        a.href = cropped;
        a.download = "cropped-image.png";
        a.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white flex justify-center px-3 sm:px-4 py-6 sm:py-10">

            <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8">

                {/* HEADER */}
                <h1 className="text-2xl sm:text-4xl font-bold text-center">
                    Image Cropper Tool
                </h1>

                <p className="text-center text-gray-300 text-sm mt-2">
                    Drag to select area → auto crop instantly → download
                </p>

                {/* UPLOAD */}
                <div
                    onClick={() => fileRef.current?.click()}
                    className="mt-6 border-2 border-dashed border-white/20 rounded-2xl p-6 text-center cursor-pointer"
                >
                    📤 Click or drop image here

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

                {/* IMAGE AREA */}
                {image && (
                    <div
                        className="relative mt-6 select-none"
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                    >
                        <img
                            ref={imgRef}
                            src={image}
                            onMouseDown={onMouseDown}
                            className="w-full max-h-[500px] object-contain rounded-lg cursor-crosshair"
                        />

                        {/* SELECTION BOX */}
                        {dragging && (
                            <div
                                className="absolute border-2 border-indigo-500 bg-indigo-500/20"
                                style={{
                                    left: Math.min(start.x, end.x),
                                    top: Math.min(start.y, end.y),
                                    width: Math.abs(end.x - start.x),
                                    height: Math.abs(end.y - start.y),
                                }}
                            />
                        )}
                    </div>
                )}

                {/* RESULT */}
                {cropped && (
                    <div className="mt-8 text-center">
                        <h2 className="text-emerald-400 mb-3">
                            Cropped Image
                        </h2>

                        <img
                            src={cropped}
                            className="mx-auto max-h-[300px] rounded-lg"
                        />

                        {/* ONLY DOWNLOAD (NO EXTRA STEP) */}
                        <button
                            onClick={download}
                            className="mt-4 bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-xl cursor-pointer"
                        >
                            Download Image
                        </button>
                    </div>
                )}

                {/* FOOTER */}
                <p className="text-center text-gray-500 text-xs mt-8">
                    Fast • Instant Crop • No Upload Required
                </p>

            </div>
        </div>
    );
}