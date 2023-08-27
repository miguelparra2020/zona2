import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import MyDocument from './down-component';
import { PDFDownloadLink } from "@react-pdf/renderer";


function DownFichasPage () {
    return (
            <MainLayout>
                <PDFDownloadLink document={<MyDocument/>} >
                    descargar
                    </PDFDownloadLink>
            </MainLayout>
    )
};

export default DownFichasPage;