import React, { useEffect, useState } from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { getUsuarios } from '../../db/db';
import Link from "next/link";
import '../../styles/pages/ingresos.css'

const UsuariosPage = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const data = await getUsuarios();
                setUsuarios(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUsuarios();
    }, []);

    return (
        <MainLayout>
            <div>
                <h1>Hola soy Usuarios</h1>
            </div>
            <div>
                <Link href="/usuarios/nuevo">
                <button>Crear nuevo usuario</button>
                </Link> 
            </div>
            <div>
                {usuarios.map((item) => (
                    <div key={item.id}>
                        {item.id} &nbsp;
                        {item.username} &nbsp;
                        {item.first_name} &nbsp;
                        {item.last_name} &nbsp;
                        {item.email} &nbsp;
                        {item.ficha} &nbsp;
                        {item.tipo_usuario} &nbsp;

                    </div>
                ))}
            </div>
        </MainLayout>
    )
};

export default UsuariosPage;
