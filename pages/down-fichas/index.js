import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { Page, Document } from '@react-pdf/renderer';
// import MyDocument from './down-component';


const DownFichasPage = () => {
    return (
            <Document>
                <Page size="A4">
                <div>
                            <h1>Hola soy DownFichasPage</h1>
                            
                        </div>
                </Page>
            </Document>
    )
};

export default DownFichasPage;