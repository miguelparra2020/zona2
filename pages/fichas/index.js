import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { getFichas } from '../../db/db';
import { useState, useEffect } from "react";

const FichasPage = () => {
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
                {fichas.map((ficha) => (
                    <div key={ficha.url}>
                        <p>Número de ficha: {ficha.numero_ficha}</p>
                        <p>Nombre de ficha: {ficha.nombre_ficha}</p>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
};

export default FichasPage;
