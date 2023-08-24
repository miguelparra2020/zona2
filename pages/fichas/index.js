import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { getFichas } from '../../db/db';
import { useState, useEffect } from "react";
import Link from "next/link";

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
            <div>
                <h1>Hola soy Fichas</h1>  
            </div>
            <div>
                <h3><Link href="/fichas/nueva">Crear ficha</Link></h3>  
            </div>
            <div>
            {fichas.map((ficha) => {
                // Extraer el ID de la URL
                const urlParts = ficha.url.split('/');
                const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash

                return (
                    <div key={ficha.url}>
                        <p>Id: {id}</p>
                        <p>Número de ficha: {ficha.numero_ficha}</p>
                        <p>Nombre de ficha: {ficha.nombre_ficha}</p>
                        <Link href={`/fichas/${id}`}>Editar</Link>
                    </div>
                );
            })}

            </div>
        </MainLayout>
    )
};

export default FichasPage;
