import { QRCodeCanvas } from "qrcode.react";
import "./QrcodeDisplay.css";
import { useRef } from "react";

export interface QRCodeDisplayProps {
  showQRCode: boolean;
  resumeLink: string;
  resumeFile: File | null;
}

export const QrcodeDisplay = (props: QRCodeDisplayProps) => {
  const { showQRCode, resumeFile, resumeLink } = props;

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "resume_qr_code.png";
    downloadLink.click();
  };

  const handleShare = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], "resume_qr_code.png", {
        type: "image.png",
      });

      if (navigator.share) {
        try {
          await navigator.share({
            title: "My Resume QR Code",
            text: "Scan to view my Resume",
            files: [file],
          });
        } catch (error) {
          console.log("Error sharing file", error);
        }
      } else {
        alert("Sharing not supported on this device");
      }
    });
  };

  console.log(resumeLink);

  return (
    <div className="qrcodecontainer">
      <div className="qrcode">
        {showQRCode ? (
          resumeLink ? (
            <QRCodeCanvas value={resumeLink} size={180} />
          ) : (
            <p>No data to generate QR code.</p>
          )
        ) : (
          <p>Generate a QR code to see it here.</p>
        )}
      </div>

      <div className="actions">
        <button className="downloadbtn" onClick={handleDownload}>
          Downlaod QR Code
        </button>
        <button className="sharebtn" onClick={handleShare}>
          Share
        </button>
      </div>
    </div>
  );
};
