import React, {useState, useEffect}from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { Suspense } from 'react';
import '../../styles/pages/home.css';
import '../../styles/pages/miperfil.css';
import Image from 'next/image';

const MiPerfilPage = () => {
    // ----Constantes y variables de estado-----------
    const [username, setUsername] = useState('');
    const [ficha, setFicha] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [tipo_usuario, setTipoUsuario] = useState('');
    // ----Constantes y variables de estado-----------

    // ----Función useEffects --------------------
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUsername(localStorage.getItem('username'));
            setFicha(localStorage.getItem('ficha'));
            setFirstName(localStorage.getItem('first_name'));
            setLastName(localStorage.getItem('last_name'));
            setEmail(localStorage.getItem('email'));
            setTipoUsuario(localStorage.getItem('tipo_usuario'));
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
                            <div className='icon-header'> 
                                 <Image 
                                        src="https://res.cloudinary.com/unidigital/image/upload/v1693070445/biometric%20services/ficha-de-datos-de-seguridad_gjl0dh.png" alt="Icono de fichas" 
                                        width={30}
                                        height={30}  />
                            </div>
                            <br/>
                            <div className="perfil-header">
                                <p className="perfil-title"><strong>Usuario:</strong> {username}</p>
                                <p className="perfil-title"><strong>Nombres:</strong> {first_name}</p>
                                <p className="perfil-title"><strong>Apellidos:</strong> {last_name}</p>
                                <p className="perfil-title"><strong>Correo:</strong> {email}</p>
                                <p className="perfil-title"><strong>Ficha:</strong> {ficha}</p>
                                <p className="perfil-title"><strong>Tipo de usuario:</strong> {tipo_usuario}</p>                                
                            </div>  
                            <div className="div_button_editar_perfil">
                                <Link className="edit_link_perfil">Editar &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg></Link>
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
