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
      <div className='contenedor_botones'>
      {username && (
        <div>
          <button onClick={reiniciar} className='nuevo_button'>
            Leer nuevo código QR &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
  <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
  <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
  <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
  <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
  <path d="M12 9h2V8h-2v1Z"/>
</svg>
          </button>
        </div>
      )}
      </div>
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
      <div className='contenedor_div_card'>
      <div className="div_card">
      {username && <p> <strong>Usuario:</strong>  {username}</p>}
      {username && <p><strong>Nombre:</strong> {first_name} {last_name}</p>}
      {username && <p><strong>Ficha:</strong> {ficha}</p>}
      {username && <p><strong>Fecha:</strong> {fecha}</p>}
      {username && <p><strong>Hora:</strong> {hora}</p>}
      {username && <p><strong>Zona:</strong> {zona}</p>}
    <div className='contenedor_botones'>

    
    {username && (
        <div>
          <button onClick={enviarIngreso} className='registro_ingreso_button'>
            Registrar Ingreso &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
          </button>
        </div>
      )}
      &nbsp;&nbsp;
      {username && (
        <div>
          <button onClick={enviarSalida} className='registro_salida_button' >
            Registrar Salida &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
          </button>
        </div>
      )}
      </div>
      </div>
      </div>
      </div>
    </LoginLayout>
  );
};

export default IndexPage;


function Loading() {
  return <h2>🌀 Loading...</h2>;
}