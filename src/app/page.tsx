"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image";

export default function Home() {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("");
  const [labelColor, setLabelColor] = useState("#000000");
  const [size, setSize] = useState(220);
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [dark, setDark] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);

  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = async () => {
    if (!qrRef.current) return;
    const dataUrl = await toPng(qrRef.current);
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = dataUrl;
    link.click();
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: dark
          ? "url('https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg')"
          : "url('https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold text-white drop-shadow">
            QRify
          </h1>

          <button
            onClick={() => setDark(!dark)}
            className="px-5 py-2 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-100 transition"
          >
            {dark ? "☀ Day Mode" : "🌙 Night Mode"}
          </button>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE – INPUTS */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-2xl border border-gray-200">
            <input
              className="w-full p-3 mb-3 border rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter text or URL"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <input
              className="w-full p-3 mb-4 border rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Text below QR"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />

            <label className="block text-sm font-semibold mb-3 text-black">
              QR Size: {size}px
              <input
                type="range"
                min="150"
                max="350"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full mt-1"
              />
            </label>

            <div className="grid grid-cols-3 gap-2 mb-4 text-sm font-semibold text-black">
              <label className="flex flex-col items-center">
                QR
                <input
                  type="color"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                />
              </label>

              <label className="flex flex-col items-center">
                BG
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </label>

              <label className="flex flex-col items-center">
                Text
                <input
                  type="color"
                  value={labelColor}
                  onChange={(e) => setLabelColor(e.target.value)}
                />
              </label>
            </div>

            <label className="block bg-indigo-600 text-black rounded-md p-3 cursor-pointer hover:bg-indigo-700 transition font-semibold text-center">
              Upload Logo
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleLogoUpload}
              />
            </label>
          </div>

          {/* RIGHT SIDE – QR PREVIEW */}
          <div className="flex flex-col items-center">
            {text ? (
              <>
                <div
                  ref={qrRef}
                  className="p-5 rounded-xl shadow-2xl"
                  style={{ backgroundColor: bgColor }}
                >
                  <QRCodeCanvas
                    value={text}
                    size={size}
                    fgColor={qrColor}
                    bgColor={bgColor}
                    level="H"
                    imageSettings={
                      logo
                        ? {
                            src: logo,
                            height: size * 0.25,
                            width: size * 0.25,
                            excavate: true,
                          }
                        : undefined
                    }
                  />
                  {label && (
                    <p
                      className="mt-2 font-semibold text-center"
                      style={{ color: labelColor }}
                    >
                      {label}
                    </p>
                  )}
                </div>

                <button
                  onClick={downloadQR}
                  className="mt-6 px-6 py-3 rounded-full bg-green-500 text-black font-bold hover:bg-green-400 transition shadow-lg"
                >
                  Download QR
                </button>
              </>
            ) : (
              <p className="text-white text-lg mt-20">
                Enter text to generate QR →
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
