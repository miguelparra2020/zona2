import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { getFichas } from '../../db/db';
import { useState, useEffect } from "react";
import Link from "next/link";
import '../../styles/pages/fichas.css';
import Image from 'next/image'

function FichasPage(){
    const [fichas, setFichas] = useState([]);
    
    useEffect(() => {
        async function fetchFichas() {
            try {
                const data = await getFichas();
                setFichas(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFichas();
    }, []);
    

    return (
        <MainLayout>
            {/* titulo */}
            <div className="contenedor_titulo_fichas">
                <h1>Bienvenid@ al área de fichas</h1>   
            </div>
            {/* titulo */}
            <div>
                <h3><Link href="/fichas/nueva">Crear ficha</Link></h3>  
            </div>


            <div className="contenedor_fichas">
            {fichas.map((ficha) => {
                // Extraer el ID de la URL
                const urlParts = ficha.url.split('/');
                const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash

                return (
                        <div key={ficha.url} className="div_card_fichas">
                            <div className="div_header_fichas">
                                <Image 
                                        src="https://res.cloudinary.com/unidigital/image/upload/v1693070445/biometric%20services/ficha-de-datos-de-seguridad_gjl0dh.png" alt="Icono de fichas" 
                                        width={30}
                                        height={30}  />
                                        &nbsp;&nbsp;                               
                                <p><strong>Id ficha:</strong> {id}</p>
                            </div>
                            <div className="div_body_fichas">
                                <p><strong>▫ Número de ficha:</strong> {ficha.numero_ficha}</p>
                                <p><strong>▫ Nombre de ficha:</strong> {ficha.nombre_ficha}</p>
                            </div>
                            <div className="div_button_editar_ficha">
                                <Link href={`/fichas/${id}`} className="edit_link_ficha">Editar &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></Link>
                            </div>
                        </div>
                );
            })}

            </div>
        </MainLayout>
    )
};

export default FichasPage;
