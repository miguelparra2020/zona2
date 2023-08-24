import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { getIngresos, getSalidas } from '../../db/db';
import { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
    const [ingresos, setIngresos] = useState([]);
    const [salidas, setSalidas] = useState([]);

    useEffect(() => {
        async function fetchIngreos() {
            try {
                const data = await getIngresos();
                setIngresos(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchSalidas() {
            try {
                const data = await getSalidas();
                setSalidas(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchIngreos();
        fetchSalidas();
    }, []);
    

    return (
        <MainLayout>
            <div>
                <h1>Hola soy home</h1>   
            </div>
            <div>
                <h1>Registros de ingresos</h1>   
                {ingresos.map((ingreso) => {
                // Extraer el ID de la URL
                const urlParts = ingreso.url.split('/');
                const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash

                return (
                    <div key={ingreso.url}>
                        <p>Id: {id}</p>
                        <p>username: {ingreso.username}</p>
                        <p>fecha_ingreso: {ingreso.fecha_ingreso}</p>
                        <p>hora_ingreso: {ingreso.hora_ingreso}</p>
                        <p>zona: {ingreso.zona}</p>
                        <Link href={`/ingresos/${id}`}>Editar</Link>
                    </div>
                );
            })}
            </div>
            <div>
                <h1>Registros de Salidas</h1>   
                {salidas.map((salida) => {
                    // Extraer el ID de la URL
                    const urlParts = salida.url.split('/');
                    const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash

                    return (
                        <div key={salida.url}>
                            <p>Id: {id}</p>
                            <p>username: {salida.username}</p>
                            <p>fecha_salida: {salida.fecha_salida}</p>
                            <p>hora_salida: {salida.hora_salida}</p>
                            <p>zona: {salida.zona}</p>
                            <Link href={`/salidas/${id}`}>Editar</Link>
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    )
};

export default HomePage;