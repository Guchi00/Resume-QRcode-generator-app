import "./QrcodeDisplay.css";

export interface QRCodeDisplayProps {
  showQRCode: boolean;
}

export const QrcodeDisplay = (props: QRCodeDisplayProps) => {
  const { showQRCode } = props;
  return (
    <div className="qrcodecontainer">
      <div className="qrcode"> {showQRCode}</div>
      <div className="actions">
        <button className="downloadbtn">Downlaod QR Code</button>
        <button className="sharebtn">Share</button>
      </div>
    </div>
  );
};
