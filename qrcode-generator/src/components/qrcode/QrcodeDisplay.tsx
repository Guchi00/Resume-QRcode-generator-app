import { QRCodeCanvas } from "qrcode.react";
import "./QrcodeDisplay.css";

export interface QRCodeDisplayProps {
  showQRCode: boolean;
  resumeLink: string;
  resumeFile: File | null;
}

export const QrcodeDisplay = (props: QRCodeDisplayProps) => {
  const { showQRCode, resumeFile, resumeLink } = props;

  const qrCodeValue = resumeLink || resumeFile?.name || "";

  return (
    <div className="qrcodecontainer">
      <div className="qrcode">
        {showQRCode ? (
          qrCodeValue ? (
            <QRCodeCanvas value={qrCodeValue} size={180} />
          ) : (
            <p>No data to generate QR code.</p>
          )
        ) : (
          <p>Generate a QR code to see it here.</p>
        )}
      </div>

      <div className="actions">
        <button className="downloadbtn">Downlaod QR Code</button>
        <button className="sharebtn">Share</button>
      </div>
    </div>
  );
};
