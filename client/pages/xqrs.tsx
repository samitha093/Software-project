import React, {useState} from "react";
import dynamic from "next/dynamic";
// const QrReader = dynamic(() => import("react-web-qr-reader"), { ssr: false });
import QrReader from 'react-web-qr-reader';

const Example = () => {
  const delay = 1000;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result:any) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error:any) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </>
  );
};

export default Example;
