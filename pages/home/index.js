import React from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { getIngresos, getSalidas } from '../../db/db';
import { useState, useEffect } from "react";
import Link from "next/link";
import '../../styles/pages/home.css';
import Image from 'next/image'
import { Suspense } from 'react';


const HomePage = () => {

//---------------Variables------------------------------------------------- 
    const [ingresos, setIngresos] = useState([]);
    const [salidas, setSalidas] = useState([]);
    const [fechaInicioFiltro, setFechaInicioFiltro] = useState(getFormattedDate());
    const [fechaFinFiltro, setFechaFinFiltro] = useState(getFormattedDate());
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
            {/* titulo */}
            <div className="contenedor_titulo_asistencias">
                <h1>Bienvenid@ al área de asistencias</h1>   
            </div>
            {/* titulo */}

            {/* Filtros */}
            <div className="contenedor_filtros_asistencias">
                <div className="div_titulo_filtrar">
                    <h1>Filtrar</h1> 
                </div>
                <div className="div_fechas"> 
                    <div className="div_fecha_inicio">
                        Por fecha inicial: &nbsp;
                        <input
                            type="date"
                            value={fechaInicioFiltro}
                            onChange={(e) => setFechaInicioFiltro(e.target.value)}
                            className="date_input" 
                        />
                    </div>
                    <div className="div_fecha_final"> 
                        hasta la fecha: &nbsp;
                        <input
                            type="date"
                            value={fechaFinFiltro}
                            onChange={(e) => setFechaFinFiltro(e.target.value)}
                            className="date_input" 
                        />
                    </div>
                    
                </div>
            </div>
            {/* Filtros */}

            {/* registros */}
            <div className="contenedor_registros">

                {/* registros de ingresos*/}
                <div className="contenedor_registro_ingresos">
                    <div className="div_titulo_registros">
                        <h1>Registros de ingresos</h1> 
                    </div>
                    <div className="div_contenedor_card_registros">
                    {ingresos.filter((ingreso) => {
                            if (!fechaInicioFiltro || !fechaFinFiltro) return true; // Mostrar todo si no se ingresaron fechas
                            return (
                                ingreso.fecha_ingreso >= fechaInicioFiltro &&
                                ingreso.fecha_ingreso <= fechaFinFiltro
                            );
                        })
                        .map((ingreso) => {
                    // Extraer el ID de la URL
                    const urlParts = ingreso.url.split('/');
                    const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash

                    return (
                            <div key={ingreso.url}>
                                <div className="div_card">
                                    <div className="div_card_header">
                                        <Image 
                                        src="https://res.cloudinary.com/unidigital/image/upload/v1692931577/biometric%20services/acceso_wmsdly.png" alt="Icono de ingresos" 
                                        width={30}
                                        height={30}  />
                                        &nbsp;&nbsp;                               
                                        <p><strong>Id ingreso:</strong> {id}</p>
                                    </div>
                                    <div className="div_card_usuario">
                                        <p className="div_card_usuario_ind">
                                            <strong>▫ Usuario:</strong> {ingreso.username}</p>
                                        <p className="div_card_usuario_ind">
                                            <strong>Nombre:</strong> <span className="div_card_usuario_nombre">Miguel Ángel Páez parra</span> </p>
                                    </div>
                                    <div className="div_card_usuario">
                                        <p className="div_card_usuario_ind">
                                            <strong>▫ Fecha de ingreso:</strong> {ingreso.fecha_ingreso}</p>
                                        <p className="div_card_usuario_ind">
                                            <strong>Hora de ingreso:</strong> {ingreso.hora_ingreso}</p>
                                    </div>
                                    <div className="div_card_usuario">
                                        <p className="div_card_usuario_ind">
                                            <strong>▫ Ficha:</strong> 2465417
                                        </p>
                                        <p className="div_card_usuario_ind">
                                            <strong>Zona:</strong> {ingreso.zona}
                                        </p>
                                    </div>
                                    <div className="div_card_usuario_button_editar">
                                        <Link href={`/home/ingresos/${id}`}className="edit_link">Editar &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></Link>
                                    </div>
                                    
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
                {/* registros de ingresos*/}

                {/* registros de salidas*/}
                <div className="contenedor_registro_ingresos">
                    <div className="div_titulo_registros">
                        <h1>Registros de Salidas</h1>  
                    </div>
                    <div className="div_contenedor_card_registros">
                    <Suspense fallback={<Loading />}>
                    {salidas
                        .filter((salida) => {
                            if (!fechaInicioFiltro || !fechaFinFiltro) return true; // Mostrar todo si no se ingresaron fechas
                            return (
                                salida.fecha_salida >= fechaInicioFiltro &&
                                salida.fecha_salida <= fechaFinFiltro
                            );
                        })
                        .map((salida) => {
                        // Extraer el ID de la URL
                        const urlParts = salida.url.split('/');
                        const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash

                        return (
                            <div key={salida.url}>
                            <div className="div_card">
                                <div className="div_card_header">
                                    <Image 
                                    src="https://res.cloudinary.com/unidigital/image/upload/v1692931577/biometric%20services/cerrar-sesion_wlgj16.png" alt="Icono de ingresos" 
                                    width={30}
                                    height={30}  />
                                    &nbsp;&nbsp;                               
                                    <p><strong>Id salida:</strong> {id}</p>
                                </div>
                                <div className="div_card_usuario">
                                    <p className="div_card_usuario_ind">
                                        <strong>▫ Usuario:</strong> {salida.username}</p>
                                    <p className="div_card_usuario_ind">
                                        <strong>Nombre:</strong> <span className="div_card_usuario_nombre">Miguel Ángel Páez parra</span> </p>
                                </div>
                                <div className="div_card_usuario">
                                    <p className="div_card_usuario_ind">
                                        <strong>▫ Fecha de salida:</strong> {salida.fecha_salida}</p>
                                    <p className="div_card_usuario_ind">
                                        <strong>Hora de salida:</strong> {salida.hora_salida}</p>
                                </div>
                                <div className="div_card_usuario">
                                    <p className="div_card_usuario_ind">
                                        <strong>▫ Ficha:</strong> 2465417
                                    </p>
                                    <p className="div_card_usuario_ind">
                                        <strong>Zona:</strong> {salida.zona}
                                    </p>
                                </div>
                                <div className="div_card_usuario_button_editar">
                                    <Link href={`/home/salidas/${id}`}className="edit_link">Editar &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></Link>
                                </div>
                                
                            </div>
                        </div>
                                );
                            })}
                    </Suspense>
                    </div>                    
                </div>
                {/* registros de salidas*/}

            </div>
            {/* registros */}
        </MainLayout>
    )
};

export default HomePage;

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }