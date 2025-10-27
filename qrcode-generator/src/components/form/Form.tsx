import "./Form.css";

export interface FormProps {
  handleLink: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenerateQRCode: () => void;
}

export const Form = (props: FormProps) => {
  const { handleLink, handleFile, handleGenerateQRCode } = props;
  return (
    <div className="formContainer">
      <form className="form">
        <h2>Generate QR Code</h2>
        <div>
          <h5>Upload Resume</h5>
          <input
            className="inputs"
            placeholder="Choose a file"
            type="file"
            onChange={handleFile}
          />
        </div>

        <div>
          <h5>Resume Link</h5>
          <input
            placeholder="Enter Resume URL"
            type="url"
            onChange={handleLink}
          />
        </div>

        <div>
          {" "}
          <button type="button" onClick={handleGenerateQRCode}>
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};
