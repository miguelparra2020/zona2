import React, { useEffect, useState } from "react";
import MainLayout from '../../../components/layouts/MainLayout';
import { getUsuarios, getFichas, CreateUsuario } from '../../../db/db';
import { useRouter } from 'next/router';
import '../../../styles/pages/ingresos.css'

const CrearUsuarioPage = () => {
    const [existeUsuario, setExisteUsuario] = useState(''); 
    const [username, setUsername] = useState(''); 
    const [first_name, setFirstName] = useState(''); 
    const [last_name, setLastName] = useState(''); 
    const [email, setEmail] = useState('');
    const [ficha, setFicha] = useState([]);  
    const [fichas, setFichas] = useState([]); 
    const [fichaSeleccionada, setFichaSeleccionada] = useState(""); 
    const [tipo_usuario, setTipoUsuario] = useState(""); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 

    const router = useRouter();

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

    //---Función para el cambio de selección de ficha----
    const handleFichaChange = (e) => {
        setFichaSeleccionada(e.target.value);
        setFicha(e.target.value);
    };
    //---Función para el cambio de selección de ficha----

    const handleTipoUsuarioChange = (e) => {
        setTipoUsuario(e.target.value);
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

        if (username == '') {
            alert('Por favor ingresar un valor de usuario, recuerda es el número de documento identidad!.');
            return;
        }

        if (first_name == '') {
            alert('Por favor ingresar los nombres del usuario!.');
            return;
        }

        if (last_name == '') {
            alert('Por favor ingresar los apellidos del usuario!.');
            return;
        }

        if (email == '') {
            alert('Por favor ingresar el correo del usuario!.');
            return;
        }

        if (ficha == '') {
            alert('Por favor asignar una ficha al usuario!.');
            return;
        }

        if (tipo_usuario == '') {
            alert('Por favor seleccionar un tipo de usuario!.');
            return;
        }

        if (password == '') {
            alert('Por favor crear una contraseña al usuario!.');
            return;
        }

        if (password != confirmPassword) {
            alert('La contraseña proporcionada es diferente al confirmarse, por favor validar!.');
            return;
        }
    
        const usuarioData = {
            username,
            email,
            first_name,
            last_name,
            ficha,
            tipo_usuario,
            password
            
        };
        console.log(usuarioData);



        const createUsuario = await CreateUsuario(usuarioData);
        console.log(createUsuario);
        alert("Ha creado el usuario de manera exitosa");
        router.push(`/usuarios`);
    };

    
    return(
        <MainLayout>
        <div>
            {/* <h3><Link href="/fichas">Volver</Link></h3> */}
        </div>
        <div className="titulo-ingresos">
                <h1>Bienvenid@ al área de crear usuarios</h1>  
            </div> 
        <div>
            <form onSubmit={handleSubmit} className="container">
            <div>
            Número de documento identidad = usuario:&nbsp;
            <input type="number" value={username} onChange={(e) => setUsername(e.target.value)} className="inputs-ingresos" required/>
            </div>
            <div>
            Nombres:&nbsp;
            <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} className="inputs-ingresos" required/>
            </div>
            <div>
            Apellidos:&nbsp;
            <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} className="inputs-ingresos" required/>
            </div>
            <div>
            Email:&nbsp;
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inputs-ingresos" required/>
            </div>
            <div>
            Asignar ficha:&nbsp;
            <select value={fichaSeleccionada} className="inputs-ingresos" required onChange={handleFichaChange}>
                <option value="">Selecciona una ficha</option>
                {fichas.map((ficha) => (
                    <option key={ficha.url} value={ficha.numero_ficha}>
                        {ficha.numero_ficha}
                    </option>
                ))}
            </select>
            </div>
            <div>
            Tipo de usuario:&nbsp;
            <select value={tipo_usuario} className="inputs-ingresos" required onChange={handleTipoUsuarioChange}>
                <option value="">Seleccionar Tipo de Usuario</option>
                <option value="aprendiz">Aprendiz</option>
                <option value="instructor">Instructor</option>
                <option value="administrador">Administrador</option>
                <option value="instructoradministrador">Instructor Administrador</option>
            </select>
            </div>
            <div>
            Contraseña:&nbsp;
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputs-ingresos" required/>
            </div>
            <div>
            Confirmar contraseña:&nbsp;
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="inputs-ingresos" required/>
            </div>
            <button type="submit">Crear usuario</button> 
        </form>
        </div>
        </MainLayout>
    )
};


export default CrearUsuarioPage;
