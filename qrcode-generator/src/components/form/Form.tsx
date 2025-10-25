import "./Form.css";

export const Form = () => {
  return (
    <div className="formContainer">
      <form className="form">
        <h2>Generate QR Code</h2>
        <div>
          <h5>Upload Resume</h5>
          <input className="inputs" placeholder="Choose a file" type="file" />
        </div>

        <div>
          <h5>Resume Link</h5>
          <input placeholder="Enter Resume URL" type="url" />
        </div>

        <div>
          {" "}
          <button type="submit">Generate</button>
        </div>
      </form>
    </div>
  );
};
