import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import QRCode from 'react-qr-code';
import { Suspense } from 'react';

const MiQrPage = () => {
    const username = localStorage.getItem('username');
    const ficha = localStorage.getItem('ficha');
    const first_name = localStorage.getItem('first_name');
    const last_name = localStorage.getItem('last_name');
    return (
        <MainLayout>
            <div>
            <h1>Bienvenid@ al área de mi Qr</h1>
            <h3>Con este Qr puedes registrar su ingreso o salida</h3>
            <p><strong>Ficha:</strong> {ficha}</p>
            <p><strong>ID:</strong> {username}</p>
            <p><strong>Nombre:</strong> {first_name} {last_name}</p>
            <Suspense fallback={<Loading />}>
                <QRCode value={username} />
            </Suspense>
            </div>
        </MainLayout>
    )
};

export default MiQrPage;

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }