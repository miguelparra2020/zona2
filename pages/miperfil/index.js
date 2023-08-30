import React, {useState, useEffect}from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { Suspense } from 'react';
import '../../styles/pages/home.css';
import '../../styles/pages/miqr.css';

const MiPerfilPage = () => {
    // ----Constantes y variables de estado-----------
    const [username, setUsername] = useState('');
    const [ficha, setFicha] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    // ----Constantes y variables de estado-----------

    // ----Función useEffects --------------------
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUsername(localStorage.getItem('username'));
            setFicha(localStorage.getItem('ficha'));
            setFirstName(localStorage.getItem('first_name'));
            setLastName(localStorage.getItem('last_name'));
        }
    }, []);
    // ----Función useEffects --------------------
    
    return (
        <MainLayout>
            <div >
                <div className="header-container">
                    <div className="header-container-titulo">
                        <h1>Bienvenid@ al área de mi Perfil</h1>
                    </div>
                </div>
            
                <div className="div-contenedor">
                    <div className="qr-container">
                        <Suspense fallback={<Loading />}>
                            <div className="qr-header">
                                <p className="qr-title"><strong>Ficha:</strong> {ficha}</p>
                                <p className="qr-title"><strong>ID:</strong> {username}</p>
                                <p className="qr-title"><strong>Nombre:</strong> {first_name} {last_name}</p>
                            </div>                        
                        </Suspense>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
};

export default MiPerfilPage;

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
