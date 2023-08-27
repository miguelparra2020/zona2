import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { Page, Document,Text, View, } from '@react-pdf/renderer';
// import MyDocument from './down-component';


const DownFichasPage = () => {
    return (
            <Document>
                <Page size="A4">
                <View>
                            <Text>Hola soy DownFichasPage</Text>
                            
                        </View>
                </Page>
            </Document>
    )
};

export default DownFichasPage;