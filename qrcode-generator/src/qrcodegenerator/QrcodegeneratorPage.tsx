import { useEffect, useState, type ChangeEvent } from "react";
import "./QrcodegeneratorPage.css";
import { Form } from "../components/form/Form";
import { QrcodeDisplay } from "../components/qrcode/QRcodedisplay";

export const QrcodegeneratorPage = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeLink, setResumeLink] = useState<string>("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setResumeFile(event.target.files[0]);
    }
  };

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResumeLink(event?.target.value);
  };

  const handleGenerate = () => {
    if (!resumeFile && !resumeLink) {
      return alert("Upload a file or enter resume URL");
    }
    if (resumeFile && resumeLink) {
      return alert("Please upload a file OR enter a resume URL — not both.");
    }
    setShowQRCode(true);
    if (resumeLink) {
      localStorage.setItem("resumeLink", resumeLink);
    } else if (resumeFile) {
      localStorage.setItem("resumeFileName", resumeFile.name);
    }
  };

  useEffect(() => {
    const savedLink = localStorage.getItem("resumeLink");
    const savedFileName = localStorage.getItem("resumeFileName");

    if (savedLink) {
      setResumeLink(savedLink);
      setShowQRCode(true);
    } else if (savedFileName) {
      setResumeFile(new File([], savedFileName));
      setShowQRCode(true);
    }
  }, []);

  const handleShowCode = () => {
    setShowQRCode(true);
  };

  return (
    <div className="parent">
      <div className="container">
        <header className="header">
          <h4>Resume QR code Generator</h4>
          <div>space for customization</div>
        </header>
        <div className="formandChartContainer">
          <Form
            handleLink={handleLinkChange}
            handleFile={handleFileChange}
            handleGenerateQRCode={handleGenerate}
          />
          <QrcodeDisplay showQRCode={showQRCode} />
        </div>
      </div>
    </div>
  );
};
