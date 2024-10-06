import { useState } from "react";
import QRCode from "react-qr-code";
export const Index = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, SetInput] = useState("");

  function handleClick() {
    setQrCode(input);
    SetInput("");
  }
  return (
    <div className="qr-code-generator">
      <h1>Qr code Generator by React</h1>
      <div>
        <input
          onChange={(e) => SetInput(e.target.value)}
          type="text"
          name="Qr-code"
          value={input}
          placeholder="enter your name"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleClick}
        >
          Generate
        </button>
      </div>

      <div>
        <QRCode id="qr-code" value={qrCode} size={400} />
      </div>
    </div>
  );
};
