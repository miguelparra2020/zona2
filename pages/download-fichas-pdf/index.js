// pages/DownloadPDFPage.js

import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import MainLayout from '../../components/layouts/MainLayout';
import PrintableComponent from './PrintableComponent';

const dataToPrint = {
  title: 'Título del documento',
  content: 'Contenido del documento...',
};

function DownloadPDFPage() {
  const printableComponentRef = useRef();

  return (
    <MainLayout>
      <h1>Imprimir o exportar como PDF</h1>
      
      {/* Renderiza el componente imprimible */}
      <PrintableComponent ref={printableComponentRef} data={dataToPrint} />
      
      {/* Botón para imprimir o exportar */}
      <ReactToPrint
        trigger={() => <button>Imprimir / Exportar PDF</button>}
        content={() => printableComponentRef.current}
      />
    </MainLayout>
  );
}

export default DownloadPDFPage;
