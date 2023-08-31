import  LoginLayout from '../components/layouts/LoginLayout';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

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

  const reiniciar = () => {
    setResult(null); // Reiniciar el resultado
    setScanning(true); // Activar el escaneo nuevamente
  };


  useEffect(() => {
    setScanning(true);
  }, []);


  return (
    <LoginLayout>
      <div>
        <h1>Bienvenid@ a la Zona 1</h1>
        <h3>Por favor escanear el código Qr de la aplicación</h3>
      </div>
      {result && (
        <div>
          <button onClick={reiniciar}>
            Leer nuevo código QR
          </button>
        </div>
      )}
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