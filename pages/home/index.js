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
                    {ingresos
                        .filter((ingreso) => {
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
                                    <p>icono:</p>
                                    <p>Id ingreso: {id}</p>
                                    <p>Usuario: {ingreso.username}</p>
                                    <p>Nombre: Miguel Ángel Páez parra</p>
                                    <p>Fecha de ingreso: {ingreso.fecha_ingreso}</p>
                                    <p>Hora hora de ingreso: {ingreso.hora_ingreso}</p>
                                    <p>zona: {ingreso.zona}</p>
                                    <Link href={`/ingresos/${id}`}>Editar</Link>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
                {/* registros de ingresos*/}

                {/* registros de salidas*/}
                <div className="contenedor_registro_salidas">
                    <div className="div_titulo_registros">
                        <h1>Registros de Salidas</h1>  
                    </div>
                    <div className="div_contenedor_card_registros">
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
                                    <p>icono: src:asdsadasd</p>
                                    <p>Id salida: {id}</p>
                                    <p>Usuario: {salida.username}</p>
                                    <p>Nombre: Miguel Ángel Páez parra</p>
                                    <p>fecha_salida: {salida.fecha_salida}</p>
                                    <p>hora_salida: {salida.hora_salida}</p>
                                    <p>zona: {salida.zona}</p>
                                    <Link href={`/salidas/${id}`}>Editar</Link>
                                </div>
                                );
                            })}
                    </div>                    
                </div>
                {/* registros de salidas*/}

            </div>
            {/* registros */}
        </MainLayout>
    )
};

export default HomePage;