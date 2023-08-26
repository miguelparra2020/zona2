import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import '../../styles/pages/fichas.css';
import { PDFViewer } from '@react-pdf/renderer';
// import { PDFDownloadLink } from '@react-pdf/renderer';

import MyDocumentFichas from './documento-fichas';

function DowloadFichasPage(){

//---área visual de la página---------
    return (
        <MainLayout>
            
            <PDFViewer>
                <MyDocumentFichas />
            </PDFViewer>
            
        </MainLayout>
    )
};

//---área visual de la página---------
export default DowloadFichasPage;

