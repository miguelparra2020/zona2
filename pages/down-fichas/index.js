import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import MyDocument from './down-component';
import { PDFViewer } from '@react-pdf/renderer';



function DownFichasPage () {
    return (
            <MainLayout>
                <PDFViewer>
                    <MyDocument/>
                </PDFViewer>
            </MainLayout>
    )
};

export default DownFichasPage;