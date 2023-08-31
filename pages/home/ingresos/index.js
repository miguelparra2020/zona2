// ----Importaciones y librerías---------
import React,{useState, useEffect} from "react";
import MainLayout from '../../../components/layouts/MainLayout';
import {CreateIngreso, getUsuarios} from '../../../db/db';
import { useRouter } from 'next/router';
import '../../../styles/pages/ingresos.css'
// ----Importaciones y librerías---------


const IngresosPage = () => {
    // --------Constantes y variables de estado--------------------
    const [username, setUsername ] = useState([]);
    const [fecha_ingreso, setFechaIngreso ] = useState([]);
    const [hora_ingreso, setHoraIngreso ] = useState([]);
    const [zona, setZona ] = useState([]);
    const [existeUsuario, setExisteUsuario] = useState(''); 
    const router = useRouter();
    // --------Constantes y variables de estado--------------------

    //----Función useEffect -----------
    useEffect(() => {
        // --- función asincrona para la obtención de usuarios---------
        async function fetchUsuarios() {
            const Usuarios = await getUsuarios();
            setExisteUsuario(Usuarios);
        }
        // --- función asincrona para la obtención de usuarios---------

        // ---activación de funciones----------
        fetchUsuarios();
        // ---activación de funciones----------
    }, []);
    //----Función useEffect -----------

    // --función envío de formulario-----
    const handleSubmit = async (e) => {
        e.preventDefault();

        // ----creación de objeto para el envío de datos----
        const ingresoData = {
            username,
            fecha_ingreso,
            hora_ingreso,
            zona
        }
        // ----creación de objeto para el envío de datos----
        console.log(ingresoData)

        // ---Validación que el usuario exista----------
        const usuarioExiste = existeUsuario.some((usuario) => usuario.username === username);
        if (!usuarioExiste) {
            alert('El usuario ingresado no existe, por favor ingrese un valor diferente.');
            return;
        }
        // ---Validación que el usuario exista----------

        //--validación de campos vacios---------------
        if (username == '') {
            alert('Por favor ingrese un usuario!');
            return;
        }

        if (fecha_ingreso == '') {
            alert('Por favor ingrese una fecha de ingreso!');
            return;
        }

        if (hora_ingreso == '') {
            alert('Por favor ingrese una hora de ingreso!');
            return;
        }

        if (zona == '') {
            alert('Por favor ingrese una zona de ingreso!');
            return;
        }
         //--validación de campos vacios---------------



        // -----envío de la data por post------
        const enviarData =  CreateIngreso(ingresoData);
        alert('Registro de ingreso exitoso');
        router.push(`/home`);
        // -----envío de la data por post------

    };
    // --función envío de formulario-----

    
    
    

    return (
        <MainLayout>
            <div className="titulo-ingresos">
                <h1>Bienvenid@ al área de ingresos</h1>  
                <h3>Crea un incrego de manera manual</h3>
            </div>            
            {/* formulario de creación de ingreso */}
            <div>
                <form onSubmit={handleSubmit} className="container">
                    <div>
                    Número de documento identidad = usuario: &nbsp;
                    <input type="number" value={username} onChange={(e) => setUsername(e.target.value)} className="inputs-ingresos" required />
                    </div>
                    <div>
                    Fecha de ingreso: &nbsp;
                    <input type="date" value={fecha_ingreso} onChange={(e) => setFechaIngreso(e.target.value)} className="inputs-ingresos" required/>
                    </div>
                    <div>
                    Hora de ingreso :&nbsp;
                    <input type="time" value={hora_ingreso} onChange={(e) => setHoraIngreso(e.target.value)} className="inputs-ingresos" required/>
                    </div>
                    <div>
                    Zona a la que ingresa: &nbsp;
                    <input type="text" value={zona} onChange={(e) => setZona(e.target.value)}  className="inputs-ingresos"required/>
                    </div>
                    <button type="submit">Crear ingreso</button> 
                </form>
            </div>
            {/* formulario de creación de ingreso */}
        </MainLayout>
    )
};

export default IngresosPage;
