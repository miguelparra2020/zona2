import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import QRCode from 'react-qr-code';
import { Suspense } from 'react';
import '../../styles/pages/home.css';
import '../../styles/pages/miqr.css';

const MiQrPage = () => {
    const username = localStorage.getItem('username');
    const ficha = localStorage.getItem('ficha');
    const first_name = localStorage.getItem('first_name');
    const last_name = localStorage.getItem('last_name');
    return (
        <MainLayout>
            <div >
                <div className="header-container">
                    <div className="header-container-titulo">
                        <h1>Bienvenid@ al área de mi Qr</h1>
                    </div>
                    <div className="header-container-subtitulo">
                        <h3>Con este Qr puedes registrar su ingreso o salida</h3>
                    </div>
                </div>
            
                <div className="div-contenedor">
                    <div className="qr-container">
                        <div className="qr-header">
                            <p className="qr-title"><strong>Ficha:</strong> {ficha}</p>
                            <p className="qr-title"><strong>ID:</strong> {username}</p>
                            <p className="qr-title"><strong>Nombre:</strong> {first_name} {last_name}</p>
                        </div>

                        <Suspense fallback={<Loading />}>
                            <QRCode className="qr-code" value={username} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
};

export default MiQrPage;

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }