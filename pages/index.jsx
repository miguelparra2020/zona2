import  LoginLayout from '../components/layouts/LoginLayout';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getUsuario, CreateIngreso, CreateSalida } from '../db/db';
import '../styles/pages/home.css'

const DynamicQrReader = dynamic(() => import('react-qr-scanner'), { ssr: false });


const IndexPage = () => {
  const [scanning, setScanning] = useState(true);
  const [username, setResult] = useState(null);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [ficha, setFicha] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [zona, setZona] = useState("Zona 1");
  const [usuario, setUsuario] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data.text); // Usamos solo la propiedad 'text' del objeto QR
      setScanning(false);
    }
  };

  

  const handleError = (error) => {
    console.error(error);
    setScanning(false);
  };

  const reiniciar = () => {
    setResult(null); // Reiniciar el resultado
    setScanning(true); // Activar el escaneo nuevamente
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };


  useEffect(() => {
    const now = new Date();
    const formattedFecha = formatDate(now); // Formato 'YYYY-MM-DD'
    const formattedHora = formatTime(now); // Formato 'HH:mm:ss'PM
    setFecha(formattedFecha);
    setHora(formattedHora);

    //--- Función para obtener los datos del usuario----
    async function fetchUsuario() {
      try {
          const data = await getUsuario(username);
          setUsuario(data);
          console.log(data);
          setFicha(data.ficha);
          setFirstName(data.first_name);
          setLastName(data.last_name);
      } catch (error) {
          console.error(error);
      }
  }
//--- Función para obtener los datos del usuario----
fetchUsuario();
  }, [username]);

  

  const ingresoData = {
    username,
    fecha_ingreso:fecha,
    hora_ingreso:hora,
    zona
  }
  const salidaData = {
    username,
    fecha_salida:fecha,
    hora_salida:hora,
    zona
  }

  const enviarIngreso = () => {
    console.log(ingresoData);
    CreateIngreso(ingresoData);
    alert("Ingreso Exitoso!");
    reiniciar();
  }

  const enviarSalida = () => {
    console.log(salidaData);
    CreateSalida(salidaData);
    alert("Salida Exitosa!");
    reiniciar();
  }

  

  return (
    <LoginLayout>
      <div >
        <h1 className='contenedor_titulo_asistencias'>Bienvenid@ a la Zona 1</h1>
        <h3 className='contenedor_titulo_asistencias'>Por favor escanear el código Qr de la aplicación</h3>
      </div>
      {username && (
        <div>
          <button onClick={reiniciar}>
            Leer nuevo código QR
          </button>
        </div>
      )}
      <div>
      <div className='div-contenedor-lector'>
      {scanning && (
        <DynamicQrReader
          delay={100}
          onError={handleError}
          onScan={handleScan}
          className='contenedor-lector'
        />
      )}
      </div>
      {username && <p> <strongn>Usuario:</strongn>  {username}</p>}
      {username && <p><strongn>Nombre:</strongn> {first_name} {last_name}</p>}
      {username && <p><strongn>Ficha:</strongn> {ficha}</p>}
      {username && <p><strongn>Fecha:</strongn> {fecha}</p>}
      {username && <p><strongn>Hora:</strongn> {hora}</p>}
      {username && <p><strongn>Zona:</strongn> {zona}</p>}
    </div>
    {username && (
        <div>
          <button onClick={enviarIngreso}>
            Registrar Ingreso
          </button>
        </div>
      )}
      {username && (
        <div>
          <button onClick={enviarSalida}>
            Registrar Salida
          </button>
        </div>
      )}
    </LoginLayout>
  );
};

export default IndexPage;


function Loading() {
  return <h2>🌀 Loading...</h2>;
}