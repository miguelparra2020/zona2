import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import QRCode from 'react-qr-code';
import { Suspense } from 'react';

const MiQrPage = () => {
    return (
        <MainLayout>
            <div>
            <h1>Bienvenid@ al área de mi Qr</h1>
            <h3>Con este Qr puedes registrar su ingreso o salida</h3>
            <p><strong>Ficha:</strong> 2465417</p>
            <p><strong>ID:</strong> 12223432</p>
            <p><strong>Nombre:</strong> Raul Garcia Ortiz</p>
            <Suspense fallback={<Loading />}>
                <QRCode value="12223432" />
            </Suspense>
            </div>
        </MainLayout>
    )
};

export default MiQrPage;

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }