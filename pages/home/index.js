import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { getIngresos, getSalidas } from '../../db/db';
import { useState, useEffect } from "react";
import Link from "next/link";
import '../../styles/pages/home.css'

const HomePage = () => {

//---------------Variables------------------------------------------------- 
    const [ingresos, setIngresos] = useState([]);
    const [salidas, setSalidas] = useState([]);
    //Inicializar la varialle con la fecha de hoy
    const [fechaFiltro, setFechaFiltro] = useState(getFormattedDate()); 
//---------------Variables------------------------------------------------- 


//-------Función para obtener la fecha de hoy ---------------------
    function getFormattedDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
//-------Función para obtener la fecha de hoy ---------------------



    useEffect(() => {
//---Función asyncrona para obtener los datos de ingresos -----------------
        async function fetchIngreos() {
            try {
                const data = await getIngresos();
                setIngresos(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
//---Función asyncrona para obtener los datos de ingresos -----------------

//---Función asyncrona para obtener los datos de salidas -----------------
        async function fetchSalidas() {
            try {
                const data = await getSalidas();
                setSalidas(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
//---Función asyncrona para obtener los datos de salidas -----------------

//---Inicializar funciones asyncronas -----------------
        fetchIngreos();
        fetchSalidas();
//---Inicializar funciones asyncronas -----------------
    }, []);
    

    return (
        <MainLayout>
            <div>
                <h1>Bienvenid@ al área de asistencias</h1>   
            </div>

            <div>
                <h1>Filtrar</h1> 
                <div> 
                    Por fecha: &nbsp;
                <input
                    type="date"
                    value={fechaFiltro}
                    onChange={(e) => setFechaFiltro(e.target.value)}
                />
                </div>
            </div>

            <div>
                <h1>Registros de ingresos</h1>   
                
                {ingresos
                    .filter((ingreso) => {
                        if (!fechaFiltro) return true; // Si no se ha ingresado fecha de filtro, mostrar todo
                        return ingreso.fecha_ingreso === fechaFiltro;
                    })
                    .map((ingreso) => {
                // Extraer el ID de la URL
                const urlParts = ingreso.url.split('/');
                const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash

                return (
                    <div key={ingreso.url}>
                        <p>icono: src:asdsadasd</p>
                        <p>Id ingreso: {id}</p>
                        <p>Usuario: {ingreso.username}</p>
                        <p>Nombre: {ingreso.username}</p>
                        <p>Fecha de ingreso: {ingreso.fecha_ingreso}</p>
                        <p>Hora hora de ingreso: {ingreso.hora_ingreso}</p>
                        <p>zona: {ingreso.zona}</p>
                        <Link href={`/ingresos/${id}`}>Editar</Link>
                    </div>
                );
            })}
            </div>
            <div>
                <h1>Registros de Salidas</h1>  
                {salidas
                    .filter((salida) => {
                        if (!fechaFiltro) return true; // Si no se ha ingresado fecha de filtro, mostrar todo
                        return salida.fecha_salida === fechaFiltro;
                    })
                    .map((salida) => {
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