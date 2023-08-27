import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import MyDocument from './down-component';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Suspense } from 'react';

function DownFichasPage () {
    return (
            <MainLayout>
                <Suspense fallback={<Loading />}>
                    <PDFDownloadLink document={<MyDocument/>} >
                    descargar
                    </PDFDownloadLink></Suspense>
                
            </MainLayout>
    )
};

export default DownFichasPage;

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }