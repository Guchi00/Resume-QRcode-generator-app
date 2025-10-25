import "./QrcodegeneratorPage.css";
import { Form } from "../components/form/Form";
import { QRcode } from "../components/qrcode/QRcode";

export const QrcodegeneratorPage = () => {
  return (
    <div className="parent">
      <div className="container">
        <header className="header">
          <h4>Resume QR code Generator</h4>
          <div>space for customization</div>
        </header>
        <div className="formandChartContainer">
          <Form />
          <QRcode />
        </div>
      </div>
    </div>
  );
};
