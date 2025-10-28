import { useState, type ChangeEvent } from "react";
import "./QrcodegeneratorPage.css";
import { Form } from "../components/form/Form";
import { QrcodeDisplay } from "../components/qrcode/QRcodedisplay";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

export const QrcodegeneratorPage = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeLink, setResumeLink] = useState<string>("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setResumeFile(file);

      const storageRef = ref(storage, `resume/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      localStorage.setItem("resumeLink", url);
      setResumeLink(url);
      setShowQRCode(true);
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

  return (
    <div className="parent">
      <div className="container">
        <header className="header">
          <h4>Resume QR code Generator</h4>
          <div>customize space</div>
        </header>
        <div className="formandChartContainer">
          <Form
            handleLink={handleLinkChange}
            handleFile={handleFileChange}
            handleGenerateQRCode={handleGenerate}
          />
          <QrcodeDisplay
            showQRCode={showQRCode}
            resumeFile={resumeFile}
            resumeLink={resumeLink}
          />
        </div>
      </div>
    </div>
  );
};
