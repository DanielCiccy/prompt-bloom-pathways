
import React, { useRef, useEffect } from "react";
import QRCode from "qrcode";

interface QrCodeProps {
  text: string;
  size?: number;
  className?: string;
}

const QrCode: React.FC<QrCodeProps> = ({ text, size = 192, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, text, { width: size });
    }
  }, [text, size]);

  const handleDownload = () => {
    if (canvasRef.current) {
      const url = canvasRef.current.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = "prompt-renfort-assignment-qr.png";
      a.click();
    }
  };

  const handleCopy = async () => {
    const url = `${window.location.origin}/rejoindre?code=${encodeURIComponent(text)}`;
    await navigator.clipboard.writeText(url);
    alert("Lien copié dans le presse-papiers !");
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <canvas ref={canvasRef} width={size} height={size} className="rounded border shadow" />
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition text-xs"
          onClick={handleDownload}
        >
          Télécharger QR
        </button>
        <button
          type="button"
          className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition text-xs"
          onClick={handleCopy}
        >
          Copier le lien
        </button>
      </div>
    </div>
  );
};

export default QrCode;
