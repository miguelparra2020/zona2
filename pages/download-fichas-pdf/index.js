import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import '../../styles/pages/fichas.css';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

import MyDocumentFichas from './documento-fichas';

function DowloadPage(){

//---área visual de la página---------
    return (
        <MainLayout>
            <PDFDownloadLink
                document={<MyDocumentFichas />}
                fileName="fichas.pdf"
            >
                {({ blob, url, loading, error }) =>
                    loading ? 'Generando PDF...' : 'Descargar PDF'
                }
            </PDFDownloadLink>
            <PDFViewer>
                <MyDocumentFichas />
            </PDFViewer>
            
        </MainLayout>
    )
};

//---área visual de la página---------
export default DowloadPage;

