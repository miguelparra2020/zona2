import React, { useEffect, useState } from "react";
import MainLayout from '../../../components/layouts/MainLayout';
import { getUsuarios, getFichas } from '../../../db/db';

const CrearUsuarioPage = () => {
    const [existeUsuario, setExisteUsuario] = useState([]); 
    const [username, setUsername] = useState([]); 
    const [first_name, setFirstName] = useState([]); 
    const [last_name, setLastName] = useState([]); 
    const [email, setEmail] = useState([]);
    const [ficha, setFicha] = useState([]);  
    const [fichas, setFichas] = useState([]); 
    const [fichaSeleccionada, setFichaSeleccionada] = useState([]); 


    useEffect(() => {
        async function fetchUsuarios() {
            const Usuarios = await getUsuarios();
            setExisteUsuario(Usuarios);
        }
        async function fetchFichas() {
            const data = await getFichas();
            setFichas(data);
            console.log(data);
        }
        fetchFichas();
        fetchUsuarios();
    }, []);

    const handleFichaChange = (e) => {
        setFichaSeleccionada(e.target.value);
        setFicha(e.target.value);
    };

    //Validación de formulario 
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validar si el usuario ya existe
        const usuarioExiste = existeUsuario.some((usuario) => usuario.username === username);
        if (usuarioExiste) {
            alert('El usuario ingresado ya existe, por favor ingrese un valor diferente.');
            return;
        }
    
        const usuarioData = {
            username,
            email,
            first_name,
            last_name,
            ficha,
            
        };
        console.log(usuarioData);
        // const createFicha = await CreateFicha(fichaData);
        // console.log(fichaData);
        // alert("Ha creado la ficha de manera exitosa");
        // router.push(`/fichas`);
    };

    
    return(
        <MainLayout>
        <div>
            {/* <h3><Link href="/fichas">Volver</Link></h3> */}
        </div>
        <div>
            <h1>Crear Usuario</h1>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
            <div>
            Número de documento identidad = usuario:&nbsp;
            <input type="number" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
            Nombres:&nbsp;
            <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
            Apellidos:&nbsp;
            <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
            Email:&nbsp;
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
            Asignar ficha:&nbsp;
            <select value={fichaSeleccionada} onChange={handleFichaChange}>
                <option value="">Selecciona una ficha</option>
                {fichas.map((ficha) => (
                    <option key={ficha.url} value={ficha.numero_ficha}>
                        {ficha.numero_ficha}
                    </option>
                ))}
            </select>
            </div>
            <button type="submit">Crear usuario</button> 
        </form>
        </div>
        </MainLayout>
    )
};


export default CrearUsuarioPage;
