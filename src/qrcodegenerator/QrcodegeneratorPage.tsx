import { useState, type ChangeEvent } from "react";
import "./QrcodegeneratorPage.css";
import { Form } from "../components/form/Form";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../firebaseConfig";
import { QRcodedisplay } from "../components/qrcode/QRcodedisplay";

export const QrcodegeneratorPage = () => {
  const [resumeLink, setResumeLink] = useState<string>("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [uploading] = useState(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;

    alert(
      "Resume upload is temporarily unavailable. Please use the Resume Link option to generate your QR code.",
    );

    event.target.value = "";
  };

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResumeLink(event.target.value);
    setShowQRCode(false);
  };

  const handleQrCodeGenerate = () => {
    if (uploading) {
      alert("Please wait for your resume to finish uploading.");
      return;
    }

    if (!resumeLink.trim()) {
      alert("Please upload a resume or enter a resume URL.");
      return;
    }

    localStorage.setItem("resumeLink", resumeLink);
    setShowQRCode(true);
  };

  return (
    <div className="parent">
      <div className="container">
        <header className="header">
          <h4>Resume QR code Generator</h4>
        </header>
        <div className="formandQrcodeContainer">
          <Form
            handleLink={handleLinkChange}
            handleFile={handleFileChange}
            handleGenerateQRCode={handleQrCodeGenerate}
          />
          <QRcodedisplay showQRCode={showQRCode} resumeLink={resumeLink} />
        </div>
      </div>
    </div>
  );
};
