import  LoginLayout from '../components/layouts/LoginLayout';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicQrReader = dynamic(() => import('react-qr-scanner'), { ssr: false });


const IndexPage = () => {
  const [scanning, setScanning] = useState(true);
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data.text); // Usamos solo la propiedad 'text' del objeto QR
      setScanning(false);
    }
  };

  const handleError = (error) => {
    console.error(error);
    setScanning(false);
  };

  useEffect(() => {
    setScanning(true);
  }, []);


  return (
    <LoginLayout>
      Hola soy Index Zona 1
      <div>
      {scanning && (
        <DynamicQrReader
          delay={100}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '50%' }}
        />
      )}
      {result && <p>Resultado: {result}</p>}
    </div>
    </LoginLayout>
  );
};

export default IndexPage;


function Loading() {
  return <h2>🌀 Loading...</h2>;
}